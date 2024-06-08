import { Box, Typography } from "@mui/material";

const Following = ({ followingArray }) => {
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
        <Typography variant="h5">Obserwujesz</Typography>
        {followingArray.length > 0 ? (
          followingArray.map((follower, index) => {
            <div>{follower.name}</div>;
          })
        ) : (
          <Typography>Jeśli zaobserwujesz jakiegoś użytkownika, pojawi on się w tym miejscu</Typography>
        )}
      </Box>
    </>
  );
};

export default Following;
