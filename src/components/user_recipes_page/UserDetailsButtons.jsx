import { List, ListItemButton, ListItemText } from "@mui/material";

const UserDetailsButtons = ({updateSelectedTab, selectedTab}) => {
  return (
    <>
      <List
        sx={{
          display: "flex",
          flexDirection: "row",
          backgroundColor: "#e19f25",
          color: "white",
          borderRadius: "4px",
        }}
      >
        <ListItemButton
          onClick={() => updateSelectedTab("added")}
          selected={selectedTab === "added"}
        >
          <ListItemText primary="Dodane przepisy" />
        </ListItemButton>
        <ListItemButton
          selected={selectedTab === "liked"}
          onClick={() => updateSelectedTab("liked")}
        >
          <ListItemText primary="Polubione przepisy" />
        </ListItemButton>
        <ListItemButton
          selected={selectedTab === "following"}
          onClick={() => updateSelectedTab("following")}
        >
          <ListItemText primary="Obserwowani" />
        </ListItemButton>
        <ListItemButton
          selected={selectedTab === "followers"}
          onClick={() => updateSelectedTab("followers")}
        >
          <ListItemText primary="Obserwujący" />
        </ListItemButton>
      </List>
    </>
  );
};

export default UserDetailsButtons