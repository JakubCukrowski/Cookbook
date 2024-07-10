import { Box, Typography } from "@mui/material";

const Followers = ({ followersArray }) => {
  return (
    <>
      <Box
        sx={{
          boxShadow: "0 0 6px 2px #e19f2540",
          borderRadius: "10px",
          textAlign: "center",
          padding: "20px"
        }}
      >
        <Typography variant="h5">Obserwujący</Typography>
        {followersArray && followersArray.length > 0 ? (
          followersArray.map((follower, index) => {
            <div>{follower.username}</div>;
          })
        ) : (
          <Typography>Tutaj pojawią się użytkownicy, którzy Cię zaobserwują</Typography>
        )}
      </Box>
    </>
  );
};

export default Followers;
