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
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import AddMerchantForm from "../AddMerchantForm"; // Import the AddMerchantForm component

const Sidebar = ({ handleAddMerchant }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [selected, setSelected] = useState("Dashboard");
  const [successMessage, setSuccessMessage] = useState("");
  const [showAddMerchantForm, setShowAddMerchantForm] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleItemClick = (title) => {
    setSelected(title);
    setIsSidebarOpen(false);
  };

  const handleAddMerchantClick = () => {
    setShowAddMerchantForm(!showAddMerchantForm); // Toggle the visibility of the form
    setSuccessMessage(""); 
    console.log("merchant has been added successfully")// Clear the success message when the form is displayed or hidden
  };

  return (
    <>
      <IconButton onClick={toggleSidebar} sx={{ mt: 1 }}>
        <MenuOutlinedIcon />
      </IconButton>
      <Drawer anchor="left" open={isSidebarOpen} onClose={toggleSidebar}>
        <Box sx={{ width: 240, p: 2 }}>
          <Box display="flex" justifyContent="space-between" alignItems="center">
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
              onClick={() => handleItemClick("Route Planning")}
              selected={selected === "Route Planning"}
              component={Link}
              to="/routeplanning"
            >
              <ListItemIcon>
                <PeopleOutlinedIcon />
              </ListItemIcon>
              <ListItemText primary="Route Planning" />
            </ListItem>
            <ListItem
              button
              onClick={() => handleItemClick("Reports")}
              selected={selected === "Reports"}
              component={Link}
              to="/reports"
            >
              <ListItemIcon>
                <ContactsOutlinedIcon />
              </ListItemIcon>
              <ListItemText primary="Reports" />
            </ListItem>
            <ListItem
              button
              onClick={() => handleItemClick("Settings")}
              selected={selected === "Settings"}
              component={Link}
              to="/settings"
            >
              <ListItemIcon>
                <ContactsOutlinedIcon />
              </ListItemIcon>
              <ListItemText primary="Settings" />
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
          </List>
          {/* Add Merchant button */}
          {showAddMerchantForm ? (
            <AddMerchantForm handleAddMerchant={handleAddMerchant} />
          ) : (
            <ListItem button onClick={handleAddMerchantClick}>
              <ListItemText primary="Add Merchant" />
            </ListItem>
          )}
          {/* Display success message */}
          {successMessage && <p>{successMessage}</p>}
        </Box>
      </Drawer>
    </>
  );
};

export default Sidebar;
