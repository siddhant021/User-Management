import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Container, Paper } from "@mui/material";
// Table Showing all User Details
const Table = ({ rows, columns, rowHeight = 52 }) => {
  return (
    <Container
      sx={{
        height: "100vh",
      }}
    >
      <Paper
        elevation={3}
        sx={{
          padding: "1rem 4rem",
          borderRadius: "1rem",
          margin: "auto",
          width: "100%",
          overflow: "hidden",
          height: "100%",
          boxShadow: "none",
        }}
      >

        <DataGrid
          rows={rows}
          columns={columns}
          rowHeight={rowHeight}
          style={{
            height: "80%",
          }}
          sx={{
            border: "none",
            ".table-header": {
              bgcolor: "#1c1c1c",
              color: "white",
            },
          }}
        />
      </Paper>
    </Container>
  );
};

export default Table;