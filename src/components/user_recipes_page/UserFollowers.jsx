import { Grid, Typography } from "@mui/material";
import UserFollowerStructure from "./UserFollowerStructure";

const UserFollowers = ({ followers }) => {
  return (
    <>
      <Grid item xs={12}>
        <Typography variant="h4" sx={{ textAlign: "center" }}>
          Obserwujący ({followers.length})
        </Typography>
      </Grid>
      <Grid container item xs={12} rowSpacing={4}>
        {followers.length > 0 ? (
          followers.map((follower) => (
            <UserFollowerStructure follower={follower} />
          ))
        ) : (
          <Typography variant="h6" sx={{ textAlign: "center" }}>
            Nikt jeszcze nie obserwuje tego użytkownika
          </Typography>
        )}
      </Grid>
    </>
  );
};

export default UserFollowers;
