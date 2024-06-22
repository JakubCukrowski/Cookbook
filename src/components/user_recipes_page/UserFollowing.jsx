import { Grid, Typography } from "@mui/material";
import UserFollowerStructure from "./UserFollowerStructure";

const UserFollowing = ({ following }) => {
  return (
    <>
      <Grid item xs={12}>
        <Typography variant="h4" sx={{ textAlign: "center" }}>
          Obserwowani ({following.length})
        </Typography>
      </Grid>
      <Grid container item xs={12} rowSpacing={4}>
        {following.length > 0 ? (
          following.map((followed) => (
            <UserFollowerStructure follower={followed} />
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
