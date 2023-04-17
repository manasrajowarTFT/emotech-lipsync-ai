import React from "react";
import styles from "./TableData.module.scss";
import StarOutlineRoundedIcon from "@mui/icons-material/StarOutlineRounded";
import EditNoteIcon from "@mui/icons-material/EditNote";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import MoreHorizRoundedIcon from "@mui/icons-material/MoreHorizRounded";
import defaultThumbnail from "../../assets/noThumbnail.png";
import StarRateRoundedIcon from "@mui/icons-material/StarRateRounded";
import { Menu } from "@mui/material";

const TableData = ({ td, columns, setStarred }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClickListItem = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <div className={styles["table-data"]}>
        <div className={styles.name} style={{ width: columns[0].size }}>
          {td.starred ? (
            <StarRateRoundedIcon
              style={{
                marginRight: "1rem",
                cursor: "pointer",
                color: "yellow",
              }}
              onClick={() => setStarred(td.id)}
            />
          ) : (
            <StarOutlineRoundedIcon
              style={{
                marginRight: "1rem",
                cursor: "pointer",
                color: "#A6A6A6",
              }}
              onClick={() => setStarred(td.id)}
            />
          )}
          <img src={td.thumbnail ? td.thumbnail : defaultThumbnail} alt="" />
          <p>{td.title}</p>
        </div>
        <div className={styles.data} style={{ width: columns[1].size }}>
          <p>{td.duration}</p>
        </div>
        <div className={styles.data} style={{ width: columns[2].size }}>
          {td.status === "Draft" ? (
            <EditNoteIcon
              fontSize="small"
              style={{ marginRight: "2px", color: "#A6A6A6" }}
            />
          ) : (
            <CheckCircleRoundedIcon
              fontSize="small"
              style={{ marginRight: "2px", color: "green" }}
            />
          )}
          <p style={{ color: td.status === "Draft" ? "#A6A6A6" : "green" }}>
            {td.status}
          </p>
        </div>
        <div className={styles.data} style={{ width: columns[3].size }}>
          <p>about {td.edited} minutes ago</p>
        </div>
        <div className={styles.data} style={{ width: columns[4].size }}>
          <MoreHorizRoundedIcon
            onClick={handleClickListItem}
            style={{ color: "#A6A6A6", cursor: "pointer" }}
          />
        </div>
      </div>
      <Menu
        id="lock-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "lock-button",
          role: "listbox",
        }}
        PaperProps={{
          elevation: 0,
          sx: {
            backgroundColor: "#404040",
          },
        }}
      >
        <div className={styles["menu-container"]}>
          <div className={styles["menu-item"]}>Starred</div>
          <div className={styles["menu-item"]}>Duplicate</div>
          <div className={styles["menu-item"]}>Rename</div>
          <div className={`${styles["menu-item"]}`} style={{ color: "red" }}>
            Delete
          </div>
        </div>
      </Menu>
    </>
  );
};

export default TableData;
