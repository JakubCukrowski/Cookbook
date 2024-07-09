import { Grid, Typography } from "@mui/material";
import UserFollowStatusStructure from "./UserFollowStatusStructure";

const UserFollowers = ({ visitedUserData, username, handleFollow }) => {
  return (
    <>
      <Grid item xs={12}>
        <Typography variant="h4" sx={{ textAlign: "center" }}>
          Obserwujący (
          {visitedUserData.followers ? visitedUserData.followers.length : 0})
        </Typography>
      </Grid>
      <Grid container item xs={12} rowSpacing={4}>
        {visitedUserData.followers && visitedUserData.followers.length > 0 ? (
          visitedUserData.followers.map((follower, index) => (
            <UserFollowStatusStructure
              key={index}
              follower={follower}
              username={username}
              visitedUserData={visitedUserData}
              handleFollow={handleFollow}
            />
          ))
        ) : (
          <Grid item xs={12}>
            <Typography variant="h6" sx={{ textAlign: "center" }}>
              Nikt jeszcze nie obserwuje tego użytkownika
            </Typography>
          </Grid>
        )}
      </Grid>
    </>
  );
};

export default UserFollowers;
