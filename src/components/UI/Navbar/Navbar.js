import React from "react";
import Drawer from "@mui/material/SwipeableDrawer";
import { Button, Divider } from "@mui/material";
import {
  Home,
  Help,
  Delete,
  AccountCircleOutlined,
  KeyboardArrowRight,
} from "@mui/icons-material";
import styles from "./Navbar.module.scss";

const Navbar = ({ open, toggleDrawer }) => {
  return (
    <div>
      <Drawer
        sx={{
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            padding: "0.5rem 1rem",
            backgroundColor: "#404040",
            width: "15rem",
            boxSizing: "border-box",
          },
        }}
        anchor={"left"}
        open={open}
        onClose={() => toggleDrawer(false)}
        onOpen={() => toggleDrawer(true)}
        variant="persistent"
      >
        <div className={styles.container}>
          <div className={styles["sub-container"]}>
            <div>
              <Button
                className={styles.logo}
                onClick={() => toggleDrawer(false)}
              >
                LOGO
              </Button>
            </div>
            <div className={styles.item}>
              <Home fontSize="medium" />
              <p>Home</p>
            </div>
            <div className={styles.item}>
              <Help fontSize="medium" />
              <p>Help Center</p>
            </div>
          </div>
          <div className={styles["sub-container"]}>
            <div className={styles.item}>
              <Delete fontSize="medium" />
              <p>Bin</p>
            </div>
            <Divider style={{ backgroundColor: "#A6A6A6" }} />
            <div className={styles["account-item"]}>
              <div className={styles.box}>
                <AccountCircleOutlined />
                <div className={styles.account}>
                  <h5>My Account</h5>
                  <p>alibaba@gmail.com</p>
                </div>
              </div>
              <KeyboardArrowRight />
            </div>
          </div>
        </div>
      </Drawer>
    </div>
  );
};

export default Navbar;
