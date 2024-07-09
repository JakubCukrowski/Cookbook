import { Grid, Typography } from "@mui/material";
import UserFollowStatusStructure from "./UserFollowStatusStructure";

const UserFollowing = ({ visitedUserData, username, handleFollow }) => {
  return (
    <>
      <Grid item xs={12}>
        <Typography variant="h4" sx={{ textAlign: "center" }}>
          Obserwowani (
          {visitedUserData.following ? visitedUserData.following.length : 0})
        </Typography>
      </Grid>
      <Grid container item xs={12} rowSpacing={4}>
        {visitedUserData.following && visitedUserData.following.length > 0 ? (
          visitedUserData.following.map((followed, index) => (
            <UserFollowStatusStructure
              key={index}
              follower={followed}
              username={username}
              visitedUserData={visitedUserData}
              handleFollow={handleFollow}
            />
          ))
        ) : (
          <Grid item xs={12}>
            <Typography variant="h6" sx={{ textAlign: "center" }}>
              Ten użytkownik nikogo jeszcze nie obserwuje
            </Typography>
          </Grid>
        )}
      </Grid>
    </>
  );
};

export default UserFollowing;
