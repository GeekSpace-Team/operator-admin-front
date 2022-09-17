import React from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  CssBaseline,
  Divider,
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import { Link, Outlet, useLocation } from "react-router-dom";
import { sidebarItems } from "./layout/sidebar/Sidebar";
import PropTypes from "prop-types";
import { Box } from "@mui/system";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import { NavLink } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import MuiListItem from "@material-ui/core/ListItem";
import { loginChecker } from "./common/utils.mjs";

const ListItem = withStyles({
  root: {
    "&": {
      padding: "4px",
      marginTop: "6px",
      textAlign: "center",
      borderRadius: "25px",
    },
    "&$selected": {
      backgroundColor: "#292929",
      color: "#fefefe",
      opacity: "0.9",
      padding: "4px",
      fontWeight: "bold",
      textAlign: "center",
      borderRadius: "25px",
      boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
      "& .MuiListItemIcon-root": {
        color: "#3570A2",
      },
    },
    "&$selected:hover": {
      backgroundColor: "#292929",
      color: "#fefefe",
      "& .MuiListItemIcon-root": {
        color: "#fefefe",
      },
    },
    "&:hover": {
      backgroundColor: "#292929",
      color: "#fefefe",
      "& .MuiListItemIcon-root": {
        color: "#fefefe",
      },
    },
  },
  selected: {},
})(MuiListItem);

const styles = {
  expand_icon: {
    color: "white",
  },
  link: {
    color: "#fff",
    fontFamily: "italic",
  },
};

const drawerWidth = 300;

const Sidebar = (props) => {
  const { window } = props;
  const [selected, setSelected] = React.useState(0);
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const setTitle = React.useState(sidebarItems[0].title);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleSelect = (index, title) => {
    setSelected(index);
  };

  let location = useLocation();
  const [currentPage, setCurrentPage] = React.useState("");

  React.useEffect(() => {
    loginChecker();
    setCurrentPage(`${location.pathname}${location.search}`);
  }, [location]);

  const drawer = (
    <Paper
      sx={{
        height: "100vh",
        bottom: 0,
        paddingLeft: "12px",
        paddingRight: "12px",
      }}
      style={{
        maxHeight: "100vh",
        background: "#363636",
        overflow: "hidden",
      }}
    >
      <Divider />
      <List
        style={{ maxHeight: "100%", fontFamily: "nunito", overflow: "auto" }}
      >
        {sidebarItems.map((sidebarItem, i) =>
          sidebarItem.link == "/question" ? (
            <Accordion
              style={{
                background: "#363636",
                // fontFamily: "nunito",
                color: "#fff",
                overflow: "hidden",
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Stack direction={"row"} spacing={4}>
                  <HelpOutlineIcon />
                  <Typography>Soraglar</Typography>
                </Stack>
              </AccordionSummary>
              <AccordionDetails
                style={{
                  background: "#363636",
                  fontFamily: "nunito",
                  color: "#fff",
                }}
              >
                <Stack direction={"column"} spacing={1.5} pl={3}>
                  <NavLink
                    to={"/status"}
                    style={{ textDecoration: "none", fontFamily: "nunito" }}
                  >
                    <Typography
                      style={{
                        // fontFamily: "nunito",
                        fontSize: "17px",
                        color: "#fefefe",
                        // fontWeight: "600",
                      }}
                    >
                      Müşderiniň statusy
                    </Typography>
                  </NavLink>
                  <NavLink to={"/findUs"} style={{ textDecoration: "none" }}>
                    <Typography
                      style={{
                        // fontFamily: "nunito",
                        fontSize: "17px",
                        color: "#fefefe",
                        // fontWeight: "600",
                      }}
                    >
                      Bizi nireden tapdy
                    </Typography>
                  </NavLink>
                  <NavLink
                    to={"/gurleyishAheni"}
                    style={{ textDecoration: "none" }}
                  >
                    <Typography
                      style={{
                        // fontFamily: "nunito",
                        fontSize: "17px",
                        color: "#fefefe",
                        // fontWeight: "600",
                      }}
                    >
                      Gürleýiş äheňi
                    </Typography>
                  </NavLink>
                  <NavLink
                    to={"/gurleyishTony"}
                    style={{ textDecoration: "none" }}
                  >
                    <Typography
                      style={{
                        // fontFamily: "nunito",
                        fontSize: "17px",
                        color: "#fefefe",
                        // fontWeight: "600",
                      }}
                    >
                      Gürleýiş tony
                    </Typography>
                  </NavLink>
                  <NavLink to={"/speakMode"} style={{ textDecoration: "none" }}>
                    <Typography
                      style={{
                        // fontFamily: "nunito",
                        fontSize: "17px",
                        color: "#fefefe",
                        // fontWeight: "600",
                      }}
                    >
                      Gepleýiş şekili
                    </Typography>
                  </NavLink>
                  <NavLink to={"/speakTone"} style={{ textDecoration: "none" }}>
                    <Typography
                      style={{
                        // fontFamily: "nunito",
                        fontSize: "17px",
                        color: "#fefefe",
                        // fontWeight: "600",
                      }}
                    >
                      Nähili äheňde gürleşýär
                    </Typography>
                  </NavLink>
                </Stack>
              </AccordionDetails>
            </Accordion>
          ) : (
            <Link
              to={sidebarItem.link}
              style={{
                textDecoration: "none",
                color: "#FEFEFE",
                fontFamily: "nunito",
              }}
              key={`${sidebarItem.title}___`}
            >
              <ListItem
                selected={currentPage == sidebarItem.link}
                onClick={() => handleSelect(i, sidebarItem.title)}
                key={sidebarItem.title}
                disablePadding
              >
                <ListItemButton
                  sx={{
                    textDecoration: "none",
                    fontFamily: "nunito",
                    background: "transparent",
                  }}
                  style={{
                    borderRadius: "17px",
                    background: "transparent",
                  }}
                  color="action"
                >
                  <ListItemIcon style={{ color: "#fefefe" }} color="action">
                    {sidebarItem.icon}
                  </ListItemIcon>
                  <ListItemText primary={sidebarItem.title} color="action" />
                </ListItemButton>
              </ListItem>
            </Link>
          )
        )}
      </List>
    </Paper>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />

      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Outlet />
      </Box>
    </Box>
  );
};

Sidebar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};
export default Sidebar;
