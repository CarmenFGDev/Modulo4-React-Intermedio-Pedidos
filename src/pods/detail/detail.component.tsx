import React from "react";
import { Box, Button } from "@mui/material";
import ButtonGroup from "@mui/material/ButtonGroup";
import { DataGrid } from "@mui/x-data-grid";
import { columnsDetails } from "../../common/model/detail.model";
import { MyContextStateGrid } from "../../core/providers/stateGridProvider";

export const DetailComponent: React.FC = () => {
  const context = React.useContext(MyContextStateGrid);
  const rowsGrid = context.stateGrid.rowsGrid;
  const rowSelection = context.stateGrid.rowsSelection;

  const buttons = [
    <Button key="validate">Validate</Button>,
    <Button key="Invalidate">Invalidate</Button>,
  ];

  const processRowUpdate = (newRow: any) => {
    context.setStateGrid({
      ...context.stateGrid,
      rowsGrid: rowsGrid.map((row) => {
        if (row.id === newRow.id) {
          return { ...row, totalAmount: newRow.totalAmount };
        } else {
          return row;
        }
      }),
    });

    return newRow;
  };

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "left",
          "& > *": {
            m: 1,
          },
        }}
      >
        <ButtonGroup
          color="success"
          aria-label="medium success button group"
          sx={{ color: "olive", borderColor: "olive" }}
        >
          {buttons}
        </ButtonGroup>
      </Box>
      <div className="data-grid">
        <DataGrid
          rows={rowsGrid}
          columns={columnsDetails}
          hideFooterPagination={true}
          processRowUpdate={processRowUpdate}
          onProcessRowUpdateError={(error) => console.log(error)}
          onRowSelectionModelChange={(newRowSelectionModel) => {
            context.setStateGrid({
              ...context.stateGrid,
              rowsSelection: newRowSelectionModel,
            });
          }}
          checkboxSelection
        />
      </div>
    </>
  );
};
