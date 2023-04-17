import React, { useState } from "react";
import styles from "./Table.module.scss";
import { tableData } from "../../tableData";
import { Divider, Pagination, Stack, PaginationItem } from "@mui/material";
import TableData from "./TableData";

const Table = () => {
  const columns = [
    { header: "Name", size: "40%" },
    { header: "Duration", size: "15%" },
    { header: "Status", size: "15%" },
    { header: "Edited", size: "20%" },
    { header: "", size: "10%" },
  ];
  const [data, setData] = useState(tableData);
  const [page, setPage] = useState(1);

  const handleChange = (event, value) => {
    setPage(value);
  };

  const setStarred = (id) => {
    const index = data.findIndex((d) => d.id === id);
    console.log(index);
    if (index !== -1) {
      const newData = [...data];
      newData[index].starred = !newData[index].starred;
      setData(newData);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles["table-header-container"]}>
        {columns.map((col) => {
          return (
            <div
              key={col.header}
              className={styles["table-header"]}
              style={{ width: col.size }}
            >
              {col.header}
            </div>
          );
        })}
      </div>
      <Divider style={{ backgroundColor: "#A6A6A6" }} />
      <div className={styles["table-data-container"]}>
        {data.map((td) => {
          return (
            <React.Fragment key={td.id}>
              <TableData td={td} columns={columns} setStarred={setStarred} />
              <Divider style={{ backgroundColor: "#A6A6A6" }} />
            </React.Fragment>
          );
        })}
      </div>
      <div className={styles["pagination-container"]}>
        <Stack spacing={2}>
          <Pagination
            size="large"
            count={10}
            page={page}
            boundaryCount={2}
            onChange={handleChange}
            renderItem={(item) => (
              <PaginationItem
                type="start-ellipsis"
                sx={{
                  color: "white",
                  "&.MuiPaginationItem": {
                    color: "white",
                  },
                  "&.Mui-selected": {
                    backgroundColor: "white",
                    color: "#262626",
                    "&:hover": {
                      backgroundColor: "white",
                      color: "#262626",
                    },
                  },
                }}
                {...item}
              />
            )}
          />
        </Stack>
      </div>
    </div>
  );
};

export default Table;
