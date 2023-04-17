import React, { useState } from "react";
import styles from "./Home.module.scss";
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";
import FormatListBulletedRoundedIcon from "@mui/icons-material/FormatListBulletedRounded";
import GridViewRoundedIcon from "@mui/icons-material/GridViewRounded";
import Table from "./Table";

const Home = ({ open, toggleDrawer }) => {
  const [filter, setFilter] = useState("recent");

  const [view, setView] = useState("list");

  return (
    <div
      className={styles.container}
      style={{ marginLeft: open ? "15rem" : 0 }}
    >
      <div className={styles["action-container"]}>
        <div className={styles.item}>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <MenuIcon
              fontSize="large"
              style={{ cursor: "pointer" }}
              onClick={() => toggleDrawer((prevState) => !prevState)}
            />
            <h5 className={styles.title}>Home</h5>
          </div>
          <button>
            <span style={{ fontSize: "1.3rem", marginRight: "0.3rem" }}>+</span>{" "}
            Create new project
          </button>
        </div>
        <div className={styles.item}>
          <div className={styles["sub-item"]}>
            <h5>All projects</h5>
            <select value={filter} onChange={(e) => setFilter(e.target.value)}>
              <option value={"recent"}>Recent</option>
              <option value={"old"}>Old</option>
            </select>
          </div>
          <div className={styles["sub-item"]}>
            <div className={styles["input-container"]}>
              <SearchIcon style={{ cursor: "pointer" }} />
              <input placeholder="Search" />
            </div>
            <div className={styles["view-container"]}>
              <div
                className={styles.view}
                onClick={() => setView("list")}
                style={{
                  marginRight: "0.5rem",
                  cursor: "pointer",
                  backgroundColor: `${
                    view === "list" ? "#262626" : "transparent"
                  }`,
                }}
              >
                <FormatListBulletedRoundedIcon fontSize="small" />
              </div>
              <div
                className={styles.view}
                onClick={() => setView("grid")}
                style={{
                  cursor: "pointer",
                  backgroundColor: `${
                    view === "grid" ? "#262626" : "transparent"
                  }`,
                }}
              >
                <GridViewRoundedIcon fontSize="small" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Table />
    </div>
  );
};

export default Home;
