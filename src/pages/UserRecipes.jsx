// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import {
//   collection,
//   getDocs,
//   query,
//   where,
//   doc,
//   updateDoc,
//   arrayUnion,
//   arrayRemove,
// } from "firebase/firestore";
// import { db } from "../firebase";
// import { UserAuth } from "../context/AuthContext";
// import {RecipesProvider} from '../context/RecipesContext'
// import { FlexContainer, SpinnerContainer } from "../assets/styles/Containers";
// import {
//   Container,
//   Form,
//   FormLabel,
//   Image,
//   Spinner,
// } from "react-bootstrap";
// import { RecipesGroup } from "../components/RecipesGroup";
// import { OrangeButton } from "../assets/styles/Buttons";
// import { StyledH2 } from "../assets/styles/StyledH2";
// import { FormCategory } from "../components/FormCategory";
// import { FilterUserRecipesDiv } from "../assets/styles/RecipesStyles";
// import AddIcon from '@mui/icons-material/Add';
// import CheckIcon from '@mui/icons-material/Check';

// export const UserRecipes = () => {
//   const { username } = useParams();
//   const { user } = UserAuth();
//   const {recipes} = RecipesProvider()
//   const [userData, setUserData] = useState(null);
//   const [userRecipes, setUserRecipes] = useState([]);
//   const [likedByUser, setLikedByUser] = useState([]);
//   //state to manage a meal selection
//   const [mealSelected, setMealSelected] = useState("Wszystko");
//   //filter user recipes by a meal
//   const [filteredUserRecipes, setFilteredUserRecipes] = useState([]);
//   // checks if user is already followed by logged user
//   const [isFollowed, setIsFollowed] = useState(false);

//   //get data of the user
//   useEffect(() => {
//     const getUserData = async () => {
//       setUserData(null);
//       const q = query(
//         collection(db, "users"),
//         where("normalizedName", "==", username)
//       );

//       //check if logged user is following the recipe creator
//       const querySnapshot = await getDocs(q);
//       querySnapshot.forEach((doc) => {
//         if (user && doc.data().followers) {
//           setUserData({ ...doc.data(), id: doc.id });
//         } else {
//           setUserData({ ...doc.data(), id: doc.id, followers: []});
//         }

//         if (user && doc.data().followers) {
//           setIsFollowed(doc.data()?.followers.includes(user.displayName))
//         } else {
//           setIsFollowed(false)
//         }
//       });
//     };

//     getUserData();
//   }, [username]);

//   //then catch user recipes
//   useEffect(() => {
//     const getUserRecipes = () => {
//       if (userData) {
//         setUserRecipes(
//           recipes.filter((recipe) => recipe.addedBy.user === userData.username)
//         );
//         setFilteredUserRecipes(
//           recipes.filter((recipe) => recipe.addedBy.user === userData.username)
//         );
//       }
//     };

//     const getRecipesLikedByUser = () => {
//       if (userData) {
//         setLikedByUser(
//           recipes.filter((recipe) => recipe.likedBy.includes(userData.id))
//         );
//       }
//     };

//     getRecipesLikedByUser();
//     getUserRecipes();
//   }, [userData, username]);

//   //filter out meals
//   useEffect(() => {
//     if (userRecipes) {
//       if (mealSelected === "Wszystko") {
//         setFilteredUserRecipes(userRecipes);
//       } else {
//         setFilteredUserRecipes(
//           userRecipes.filter((recipe) => recipe.category === mealSelected)
//         );
//       }
//     }
//   }, [userRecipes, mealSelected]);

//   const categories = [
//     "Wszystko",
//     "Zupy",
//     "Desery",
//     "Dania główne",
//     "Śniadania",
//     "Kolacje",
//     "Przekąski",
//     "Napoje",
//   ];

//   const onCategoryChange = (e) => {
//     setMealSelected(e.target.value);
//   };

//   //handle follow/unfollow
//   const handleFollow = async () => {
//     const tempUserData = {...userData};
//     const docOfRecipeCreator = doc(db, "users", userData.id);
//     const loggedUserRef = doc(db, 'users', user.uid)
//     if (
//       tempUserData.followers &&
//       tempUserData.followers.includes(user.displayName)
//     ) {
//       await updateDoc(docOfRecipeCreator, {
//         followers: arrayRemove(user.displayName),
//       });
//       tempUserData.followers = tempUserData.followers.filter(
//         (follower) => follower !== user.displayName
//       );
//       setUserData(tempUserData)
//       setIsFollowed(false)

//       await updateDoc(loggedUserRef, {
//         following: arrayRemove(userData.username)
//       })
//     } else {
//       await updateDoc(docOfRecipeCreator, {
//         followers: arrayUnion(user.displayName),
//       });
//       tempUserData.followers.push(user.displayName);
//       setUserData(tempUserData);
//       setIsFollowed(true)

//       await updateDoc(loggedUserRef, {
//         following: arrayUnion(userData.username)
//       })
//     }
//   };

//   return (
//     <>
//       {userData ? (
//         <>
//           <Container>
//             <FlexContainer className="mobile_view" align="center" padding="50px 0 0 0">
//               <Image
//                 roundedCircle
//                 src={userData.profilePhoto}
//                 alt="profile_photo"
//                 style={{ width: 200, height: 200, objectFit: "cover" }}
//               />
//               <div style={{ textAlign: "start", marginLeft: 20 }}>
//                 <h2>{userData.username}</h2>
//                 <p>Dodane przepisy: {userRecipes.length}</p>
//                 <p>Obserwujących: {userData.followers.length}</p>
//               </div>
//               <div style={{ marginLeft: "auto", marginRight: "auto" }}>
//                 {user && user.displayName !== userData.username &&(isFollowed ? (
//                   <>
//                     <OrangeButton onClick={(handleFollow)}>
//                       <CheckIcon /> Obserwujesz
//                     </OrangeButton>{" "}
//                   </>
//                 ) : (
//                   <>
//                     <OrangeButton onClick={handleFollow}>
//                       <AddIcon /> {" "} Obserwuj
//                     </OrangeButton>{" "}
//                   </>
//                 ))}
//                 {user && user.displayName !== userData.username && <OrangeButton>Napisz wiadomość</OrangeButton>}
//               </div>
//             </FlexContainer>
//             <StyledH2>Przepisy użytkownika</StyledH2>
//             <FilterUserRecipesDiv>
//               <Form style={{ marginBottom: 50 }}>
//                 <FormLabel htmlFor="filter_select">
//                   Filtruj po posiłku
//                 </FormLabel>
//                 <FormCategory
//                   array={categories}
//                   value={mealSelected}
//                   onChange={onCategoryChange}
//                 />
//               </Form>
//             </FilterUserRecipesDiv>
//           </Container>
//           {filteredUserRecipes.length > 0 ? (
//             <RecipesGroup array={filteredUserRecipes} />
//           ) : (
//             <Container>
//               <h5 style={{ textAlign: "center" }}>
//                 Użytkownik {userData.username} nie posiada przepisu w kategorii{" "}
//                 {mealSelected}
//               </h5>
//             </Container>
//           )}

//           {userData && likedByUser.length > 0 && (
//             <>
//               <StyledH2>{userData.username} lubi te przepisy</StyledH2>
//               <RecipesGroup array={likedByUser} />
//             </>
//           )}
//         </>
//       ) : (
//         <SpinnerContainer>
//           <Spinner />
//         </SpinnerContainer>
//       )}
//     </>
//   );
// };

import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  collection,
  getDocs,
  query,
  where,
  doc,
  updateDoc,
  arrayUnion,
  arrayRemove,
} from "firebase/firestore";
import { db } from "../firebase";
import { UserAuth } from "../context/AuthContext";
import { RecipesProvider } from "../context/RecipesContext";
import { Avatar, Grid, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import { OrangeButton } from "../assets/styles/Buttons";
import MessageIcon from "@mui/icons-material/Message";
import AddIcon from "@mui/icons-material/Add";
import { RecipeStructure } from "../components/RecipeStructure";

export const UserRecipes = () => {
  const { username } = useParams();
  const { user } = UserAuth();
  const { recipes } = RecipesProvider();
  const [userData, setUserData] = useState(null);
  const [userRecipes, setUserRecipes] = useState([]);
  const [likedByUser, setLikedByUser] = useState([]);
  //state to manage a meal selection
  const [mealSelected, setMealSelected] = useState("Wszystko");
  const [filteredUserRecipes, setFilteredUserRecipes] = useState([]);
  // checks if user is already followed by logged user
  const [isFollowed, setIsFollowed] = useState(false);
  const navigate = useNavigate();

  //get data of the user
  useEffect(() => {
    const getUserData = async () => {
      setUserData(null);
      const q = query(
        collection(db, "users"),
        where("normalizedName", "==", username)
      );

      //check if logged user is following the recipe creator
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        if (user && doc.data().followers) {
          setUserData({ ...doc.data(), id: doc.id });
        } else {
          setUserData({ ...doc.data(), id: doc.id, followers: [] });
        }

        if (user && doc.data().followers) {
          setIsFollowed(doc.data()?.followers.includes(user.displayName));
        } else {
          setIsFollowed(false);
        }
      });
    };

    getUserData();
  }, [username]);

  //then catch user recipes
  useEffect(() => {
    const getUserRecipes = () => {
      if (userData) {
        setUserRecipes(
          recipes.filter((recipe) => recipe.addedBy.user === userData.username)
        );
        setFilteredUserRecipes(
          recipes.filter((recipe) => recipe.addedBy.user === userData.username)
        );
      }
    };

    const getRecipesLikedByUser = () => {
      if (userData) {
        setLikedByUser(
          recipes.filter((recipe) => recipe.likedBy.includes(userData.id))
        );
      }
    };

    getRecipesLikedByUser();
    getUserRecipes();
  }, [userData, username]);

  //filter out meals
  useEffect(() => {
    if (userRecipes) {
      if (mealSelected === "Wszystko") {
        setFilteredUserRecipes(userRecipes);
      } else {
        setFilteredUserRecipes(
          userRecipes.filter((recipe) => recipe.category === mealSelected)
        );
      }
    }
  }, [userRecipes, mealSelected]);

  const categories = [
    "Wszystko",
    "Zupy",
    "Desery",
    "Dania główne",
    "Śniadania",
    "Kolacje",
    "Przekąski",
    "Napoje",
  ];

  const onCategoryChange = (e) => {
    setMealSelected(e.target.value);
  };

  //handle follow/unfollow
  const handleFollow = async () => {
    const tempUserData = { ...userData };
    const docOfRecipeCreator = doc(db, "users", userData.id);
    const loggedUserRef = doc(db, "users", user.uid);
    if (
      tempUserData.followers &&
      tempUserData.followers.includes(user.displayName)
    ) {
      await updateDoc(docOfRecipeCreator, {
        followers: arrayRemove(user.displayName),
      });
      tempUserData.followers = tempUserData.followers.filter(
        (follower) => follower !== user.displayName
      );
      setUserData(tempUserData);
      setIsFollowed(false);

      await updateDoc(loggedUserRef, {
        following: arrayRemove(userData.username),
      });
    } else {
      await updateDoc(docOfRecipeCreator, {
        followers: arrayUnion(user.displayName),
      });
      tempUserData.followers.push(user.displayName);
      setUserData(tempUserData);
      setIsFollowed(true);

      await updateDoc(loggedUserRef, {
        following: arrayUnion(userData.username),
      });
    }
  };

  console.log(userData);

  return (
    <section id="user_data">
      {userData && (
        <Container>
          <Grid container sx={{ margin: "10px 0" }} rowSpacing={4}>
            <Grid item xs={12}>
              <Box sx={{ display: "flex", alignItems: "flex-end", gap: "8px" }}>
                <Avatar
                  src={userData.profilePhoto}
                  sx={{ width: "140px", height: "140px" }}
                />
                <Box>
                  <Typography variant="h4">{userData.username}</Typography>
                  <Typography variant="h7">
                    Dodanych przepisów: {userRecipes.length}
                  </Typography>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-around",
                  width: "100%",
                }}
              >
                {userData.id !== user.uid ? (
                  <>
                    <OrangeButton>
                      <AddIcon />
                      Obserwuj
                    </OrangeButton>
                    <OrangeButton>
                      <MessageIcon /> Napisz wiadomość
                    </OrangeButton>
                  </>
                ) : (
                  <OrangeButton onClick={() => navigate("/dashboard")}>
                    Panel użytkownika
                  </OrangeButton>
                )}
              </Box>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h4" sx={{ textAlign: "center" }}>
                Przepisy użytkownika
              </Typography>
            </Grid>
            <Grid container item xs={12} rowSpacing={8}>
              {userRecipes.map((recipe, index) => (
                <RecipeStructure
                  key={index}
                  recipe={recipe}
                  onClick={() => navigate(`/recipes/${recipe.id}`)}
                />
              ))}
            </Grid>
            {/* <Grid item xs={12}>
              <Typography variant="h4" sx={{ textAlign: "center" }}>
                {userData.id !== user.uid ? `${userData.username} lubi te przepisy` : "Lubisz te przepisy"}
              </Typography>
            </Grid>
            <RecipesGroup array={likedByUser} /> */}
          </Grid>
        </Container>
      )}
    </section>
  );
};
