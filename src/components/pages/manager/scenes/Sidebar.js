import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
  IconButton,
} from "@mui/material";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
// import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
// import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
// import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
// import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
// import PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined";
// import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
// import MapOutlinedIcon from "@mui/icons-material/MapOutlined";

const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [selected, setSelected] = useState("Dashboard");

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleItemClick = (title) => {
    setSelected(title);
    setIsSidebarOpen(false);
  };

  return (
    <>
      <IconButton onClick={toggleSidebar} sx={{ mt: 1 }}>
        <MenuOutlinedIcon />
      </IconButton>
      <Drawer anchor="left" open={isSidebarOpen} onClose={toggleSidebar}>
        <Box
          sx={{
            width: 240,
            p: 2,
          }}
        >
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography variant="h5">Manager</Typography>
            <IconButton onClick={toggleSidebar}>
              <MenuOutlinedIcon />
            </IconButton>
          </Box>
          <List>
            <ListItem
              button
              onClick={() => handleItemClick("Dashboard")}
              selected={selected === "Dashboard"}
              component={Link}
              to="/"
            >
              <ListItemIcon>
                <HomeOutlinedIcon />
              </ListItemIcon>
              <ListItemText primary="Dashboard" />
            </ListItem>
            <ListItem
              button
              onClick={() => handleItemClick("Manage Team")}
              selected={selected === "Manage Team"}
              component={Link}
              to="/team"
            >
              <ListItemIcon>
                <PeopleOutlinedIcon />
              </ListItemIcon>
              <ListItemText primary="Manage Team" />
            </ListItem>
            <ListItem
              button
              onClick={() => handleItemClick("Contacts Information")}
              selected={selected === "Contacts Information"}
              component={Link}
              to="/contacts"
            >
              <ListItemIcon>
                <ContactsOutlinedIcon />
              </ListItemIcon>
              <ListItemText primary="Contacts Information" />
            </ListItem>
            {/* Add more sidebar items here */}
          </List>
        </Box>
      </Drawer>
    </>
  );
};

export default Sidebar;
