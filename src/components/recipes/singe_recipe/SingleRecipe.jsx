import { useParams } from "react-router-dom";
import { Spinner } from "react-bootstrap";
import { StyledImage } from "../../../styles/StyledImage";
import { SingleRecipeH2 } from "../../../styles/StyledH2";
import {
  SingleRecipeContainer,
  SpinnerContainer,
} from "../../../styles/Containers";
import { LikeButton } from "../../LikeButton";
import {
  arrayRemove,
  arrayUnion,
  collection,
  doc,
  getDoc,
  onSnapshot,
  query,
  updateDoc,
  where,
} from "firebase/firestore";
import { db } from "../../../firebase";
import { useEffect, useState } from "react";
import {
  AuthorImageWrapper,
  RecipeDescription,
  RecipeAuthor,
  RecipeAuthorWrapper,
  RecipeTagsWrapper,
  RecipeTagLink,
  StyledCommentsDiv,
} from "../RecipesStyles";
import { UserAuth } from "../../../context/AuthContext";
import { H1wrapper } from "../../../styles/H1wrapper";
import { Wrapper } from "../../../styles/Wrapper";
import { AddComment } from "../../comments/AddComment";
import { Comments } from "../../comments/Comments";
import { StyledLink } from "../../../styles/StyledLink";
export const SingleRecipe = () => {
  const { recipeId } = useParams();
  const {
    user,
    recipes,
    userLikedRecipes,
    updateUserLikedRecipes,
    isRecipeLiked,
    updateIsRecipeLiked,
  } = UserAuth();
  //recipe which the user is on
  const [searchedRecipe, setSearchedRecipe] = useState({});
  //data of the user which has added the recipe
  const [recipeCreatorData, setRecipeCreatorData] = useState({});
  //state for managing if showing the spinner or the recipe
  const [isFound, setIsFound] = useState(false);
  //recipe comments
  const [comments, setComments] = useState([]);
  //date
  const [currentDate, setCurrentDate] = useState(Date.now());

  //donwload the recipe, get author name, check if liked by current user
  useEffect(() => {
    const findRecipe = async () => {
      if (recipes.length > 0) {
        const filterSearchedRecipe = recipes.find(
          (recipe) => recipe.id === recipeId
        );
        setSearchedRecipe(filterSearchedRecipe);
        setIsFound(true);
      }

      //current recipe
      const recipeRef = doc(db, "recipes", recipeId);
      //recipe data for notifying when recipe is liked
      const recipeDoc = await getDoc(recipeRef);
      //we get the data of the recipe creator
      const q = query(
        collection(db, "users"),
        where("username", "==", recipeDoc.data().addedBy.user)
      );
      onSnapshot(q, (recipeCreator) => {
        recipeCreator.forEach((creator) => {
          setRecipeCreatorData({ ...creator.data(), id: creator.id });
        });
      });
    };
    findRecipe();
  }, [recipes, recipeId]);

  //checks if recipe has been already liked
  useEffect(() => {
    if (user) {
      const unsub = onSnapshot(doc(db, "users", user.uid), (doc) => {
        updateIsRecipeLiked(doc.data().liked.includes(recipeId));
      });
    }
  }, [userLikedRecipes, recipeId]);

  //on like button click
  const handleLikeRecipe = async () => {
    //logged user data
    const userRef = doc(db, "users", user.uid);
    //current recipe
    const recipeRef = doc(db, "recipes", recipeId);
    //reference of recipe creator
    const recipeCreatorRef = doc(db, "users", recipeCreatorData.id);

    if (!isRecipeLiked) {
      await updateDoc(userRef, {
        liked: arrayUnion(recipeId),
      });

      await updateDoc(recipeRef, {
        likedBy: arrayUnion(user.uid),
      });


      await updateDoc(recipeCreatorRef, {
        notifications: arrayUnion({
          addDate: currentDate,
          likedBy: user.displayName,
          read: false,
          userId: user.uid,
          type: "likedRecipe",
          likedRecipeName: searchedRecipe.name,
        }),
      });

      updateIsRecipeLiked((prev) => !prev);
      updateUserLikedRecipes((prev) => [...prev, searchedRecipe]);
    }

    if (isRecipeLiked) {
      await updateDoc(userRef, {
        liked: arrayRemove(recipeId),
      });

      await updateDoc(recipeRef, {
        likedBy: arrayRemove(user.uid),
      });
      const newActualUserLikedRecipes = userLikedRecipes;
      const filterLikedRecipes = newActualUserLikedRecipes.filter(
        (recipe) => recipe.id !== recipeId
      );
      updateUserLikedRecipes(filterLikedRecipes);

      //get curent notifications of the recipe creator
      const newCreatorNotifications = recipeCreatorData.notifications;
      //find index of notification which has to be deleted
      const notificationToDelete = newCreatorNotifications.findIndex(
        (notification) =>
          searchedRecipe.name === notification.likedRecipeName &&
          notification.userId === user.uid
      );
      //filter out the deleted notification
      const filterNotifications = newCreatorNotifications.filter(
        (_, index) => index !== notificationToDelete
      );

      await updateDoc(recipeCreatorRef, {
        notifications: filterNotifications,
      });
    }
  };

  //calculate elapsed time based on date when comment was added
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentDate(Date.now());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  //download comments
  useEffect(() => {
    const getRecipeComments = async () => {
      onSnapshot(doc(db, "comments", searchedRecipe.id), (comments) => {
        //check if there's any comment/s
        if (comments.data() !== undefined) {
          setComments(comments.data().comments);
        }
      });
    };

    if (searchedRecipe.id) {
      getRecipeComments();
    }
  }, [searchedRecipe, recipeId]);

  //use effect for url of recipe change
  useEffect(() => {
    setIsFound(false);

    const timeOut = setTimeout(() => {
      setIsFound(true);
    }, 500);

    return () => clearTimeout(timeOut);
  }, [recipeId]);

  return (
    <section>
      {!isFound ? (
        <SpinnerContainer>
          <Spinner />
        </SpinnerContainer>
      ) : (
        <>
          <H1wrapper>
            <h1>{searchedRecipe.name}</h1>
          </H1wrapper>
          <SingleRecipeContainer>
            <div style={{ width: "100%" }}>
              <div style={{ marginBottom: 30 }}>
                <Wrapper justify="center">
                  <StyledImage rounded src={searchedRecipe.image} />
                </Wrapper>
              </div>
              <div style={{ display: "flex" }}>
                <StyledLink
                  to={`/${searchedRecipe.addedBy.user
                    .normalize("NFD")
                    .replace(/[\u0300-\u036f]/g, "")
                    .toLowerCase()}`}
                >
                  <RecipeAuthorWrapper>
                    <AuthorImageWrapper>
                      <img
                        src={searchedRecipe.addedBy.photo}
                        alt="profile_photo"
                      />
                    </AuthorImageWrapper>
                    <RecipeAuthor>{searchedRecipe.addedBy.user}</RecipeAuthor>
                  </RecipeAuthorWrapper>
                </StyledLink>
                <Wrapper justify="center">
                  {user && searchedRecipe.addedBy.user !== user.displayName ? (
                    <LikeButton
                      onClick={handleLikeRecipe}
                      className={isRecipeLiked ? "liked" : null}
                    ></LikeButton>
                  ) : null}
                </Wrapper>
              </div>
              <div style={{ marginTop: 20, fontSize: 20 }}>
                Polubienia: <strong>{searchedRecipe.likedBy.length}</strong>
              </div>
              <div>
                <div sm={5} style={{ marginTop: 10 }}>
                  <RecipeDescription>
                    {searchedRecipe.description}
                  </RecipeDescription>
                </div>
                {searchedRecipe.tags.length > 0 ? (
                  <RecipeTagsWrapper>
                    {searchedRecipe.tags.map((tag, index) => (
                      <RecipeTagLink key={index} to={`/show?tag=${tag}`}>
                        {tag.split("")[0].toUpperCase() +
                          tag.split("").splice(1, tag.length).join("")}
                      </RecipeTagLink>
                    ))}
                  </RecipeTagsWrapper>
                ) : null}
              </div>
            </div>
            <Wrapper direction="column">
              <div sm={5}>
                <SingleRecipeH2>Składniki</SingleRecipeH2>
                {searchedRecipe.ingredients.map((ingredient, index) => (
                  <p key={index}>{ingredient}</p>
                ))}
              </div>
              <div sm={5}>
                <SingleRecipeH2>Jak przygotować</SingleRecipeH2>
                {searchedRecipe.steps.map((value, index) => (
                  <p key={index}>
                    {`${index + 1}.`}
                    <span> {value}</span>
                  </p>
                ))}
              </div>
            </Wrapper>
          </SingleRecipeContainer>
          <StyledCommentsDiv>
            <h3 style={{ marginBottom: 30, textAlign: "center" }}>
              {comments.length > 0
                ? "Komentarze"
                : "Przepis nie ma jeszcze komentarzy"}
            </h3>
            {user && <p style={{ textAlign: "center" }}>Dodaj komentarz</p>}
            <AddComment searchedRecipe={searchedRecipe} />
            <Comments
              comments={comments}
              currentDate={currentDate}
              searchedRecipe={searchedRecipe}
            />
          </StyledCommentsDiv>
        </>
      )}
    </section>
  );
};
