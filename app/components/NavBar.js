"use client";

import React from "react";
import Link from "next/link"; // Import the Link component from Next.js
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import SchoolIcon from '@mui/icons-material/School';
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import { Tabs, Tab, useMediaQuery, useTheme } from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import TimelineIcon from "@mui/icons-material/Timeline";
import AddReactionIcon from "@mui/icons-material/AddReaction";
import ContactMailIcon from "@mui/icons-material/ContactMail";

import {
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Menu,
} from "@mui/material";

import { Home } from "@mui/icons-material";
import Slide from "@mui/material/Slide"; // Import the Slide component from Material-UI
import useScrollTrigger from "@mui/material/useScrollTrigger"; // Import the useScrollTrigger hook
import CssBaseline from "@mui/material/CssBaseline";
import Image from "next/image";

function HideOnScroll(props) {
  const { children } = props;
  const trigger = useScrollTrigger();

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

function ResponsiveAppBar(props) {
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const theme = useTheme();
  console.log(theme);
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  console.log(isMatch);

  return (
    <React.Fragment>
      <CssBaseline />
      <HideOnScroll {...props}>
        <AppBar
          className="navbar1"
          style={{
            width: "93.5%",
            right: "3.2%",
            border: "2px solid white",
            borderRadius: "30px",
            background:
              "linear-gradient( 90deg, rgba(117, 38, 126, 0.647) 0%, rgba(21, 112, 122, 1) 100% )",
          }}
        >
          <Container maxWidth="xl">
            <Toolbar disableGutters>
              <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleOpenNavMenu}
                  color="inherit"
                >
                  <MenuIcon />
                </IconButton>
              </Box>
              <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
                {isMatch ? (
                  <IconButton
                    size="large"
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    onClick={handleOpenNavMenu}
                    color="inherit"
                  >
                    <MenuIcon />
                  </IconButton>
                ) : (
                  <>
                    <Tabs centered sx={{ margin: "auto" }}>
                      <Tab
                        value="one"
                        label={
                          <p>
                            <Home /> Home
                          </p>
                        }
                        onClick={() => {
                          window.location.href = "/";
                        }}
                        style={{
                          textDecoration: "none",
                          color: "white",
                        }}
                        className="Tab1 animate__animated animate__zoomIn"
                      />

                      <Tab
                        label={
                          <Link
                            href="/about"
                            style={{
                              textDecoration: "none",
                              color: "white",
                              opacity: "1",
                            }}
                          >
                            <p>
                              {" "}
                              <InfoIcon /> About
                            </p>
                          </Link>
                        }
                        className="Tab2 animate__animated animate__zoomIn"
                      >
                        {" "}
                      </Tab>

                      <Tab
                        value="three"
                        label={
                          <p>
                            <Link
                              href="/skills"
                              style={{
                                textDecoration: "none",
                                color: "white",
                              }}
                            >
                              {" "}
                              <ManageAccountsIcon /> Skills
                            </Link>
                          </p>
                        }
                        className="Tab3 animate__animated animate__zoomIn"
                      />

                      <Tab
                        value="three"
                        label={
                          <p>
                            <Link
                              href="/projects"
                              style={{
                                textDecoration: "none",
                                color: "white",
                              }}
                            >
                              <TimelineIcon /> Projects
                            </Link>
                          </p>
                        }
                        className="Tab3 animate__animated animate__zoomIn"
                      />

                      <Tab
                        value="three"
                        label={
                          <p>
                            <Link
                              href="/education"
                              style={{
                                textDecoration: "none",
                                color: "white",
                              }}
                            >
                              {" "}
                              <SchoolIcon /> Education
                            </Link>
                          </p>
                        }
                        className="Tab5 animate__animated animate__zoomIn"
                      />
                      <Tab
                        value="three"
                        label={
                          <p>
                            <Link
                              href="/contact"
                              style={{
                                textDecoration: "none",
                                color: "white",
                              }}
                            >
                              <ContactMailIcon /> Contact
                            </Link>
                          </p>
                        }
                        className="Tab6 animate__animated animate__zoomIn"
                      />
                    </Tabs>
                  </>
                )}
              </Box>

              <Box sx={{ flexGrow: 0 }}>
                <Tooltip>
                  <IconButton sx={{ p: 0 }}>
                    <Avatar className="Tab7 animate__animated animate__backInRight">
                      <Image
                        src={"/Kit-Pyles-avatar.jpg"}
                        style={{ width: "100%", height: "auto" }}
                        alt="sufi"
                        width={100}
                        height={100}
                        loading="lazy"
                      />
                    </Avatar>
                  </IconButton>
                </Tooltip>

                <Menu
                  id="menu-appbar-avatar"
                  anchorEl={anchorElNav}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top", // Adjust to match the new position
                    horizontal: "right",
                  }}
                  open={Boolean(anchorElNav)}
                  onClose={handleCloseNavMenu}
                  sx={{
                    display: { xs: "block", md: "none" },
                  }}
                >
                  {/* <Drawer
                    open={isDrawerOpen}
                    onClose={() => setIsDrawerOpen(false)}
                  > */}
                  <List className="DrawerList">
                    <ListItemButton>
                      <ListItemIcon>
                        <Home />
                      </ListItemIcon>
                      <ListItemText
                        primary={"Home"}
                        onClick={() => {
                          window.location.href = "/";
                        }}
                      />
                    </ListItemButton>

                    <ListItemButton>
                      <ListItemIcon>
                        <InfoIcon />
                      </ListItemIcon>
                      <Link
                        href="/about"
                        style={{ textDecoration: "none", color: "white" }}
                      >
                        <ListItemText
                          onClick={handleCloseNavMenu}
                          primary={"About"}
                        />{" "}
                      </Link>
                    </ListItemButton>

                    <ListItemButton>
                      <ListItemIcon>
                        <ManageAccountsIcon />
                      </ListItemIcon>
                      <Link
                        href="/skills"
                        style={{ textDecoration: "none", color: "white" }}
                      >
                        <ListItemText
                          onClick={handleCloseNavMenu}
                          primary={"Skills"}
                        />
                      </Link>
                    </ListItemButton>
                    <ListItemButton>
                      <ListItemIcon>
                        <TimelineIcon />
                      </ListItemIcon>
                      <Link
                        href="/projects"
                        style={{ textDecoration: "none", color: "white" }}
                      >
                        <ListItemText
                          onClick={handleCloseNavMenu}
                          primary={"Projects"}
                        />
                      </Link>
                    </ListItemButton>
                    <ListItemButton>
                      <ListItemIcon>
                        <AddReactionIcon />
                      </ListItemIcon>
                      <Link
                        href="/blogs"
                        style={{ textDecoration: "none", color: "white" }}
                      >
                        <ListItemText
                          onClick={handleCloseNavMenu}
                          primary={"Blogs"}
                        />
                      </Link>
                    </ListItemButton>
                    <ListItemButton>
                      <ListItemIcon>
                        <ContactMailIcon />
                      </ListItemIcon>
                      <Link
                        href="/contact"
                        style={{ textDecoration: "none", color: "white" }}
                      >
                        <ListItemText
                          onClick={handleCloseNavMenu}
                          primary={"Contact"}
                        />
                      </Link>
                    </ListItemButton>
                  </List>
                </Menu>
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
      </HideOnScroll>
      <Toolbar />
    </React.Fragment>
  );
}
export default ResponsiveAppBar;
