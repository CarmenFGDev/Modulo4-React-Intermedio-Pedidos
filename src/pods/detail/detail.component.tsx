import React from "react";
import { Box, Button } from "@mui/material";
import ButtonGroup from "@mui/material/ButtonGroup";
import { DataGrid, GridRowSelectionModel } from "@mui/x-data-grid";
import { columnsDetails } from "../../common/model/detail.model";
import { MyContextStateGrid, StateGridContext } from "../../core/providers/stateGridProvider";
import { STATUS } from "../../common/model/info.model";

export const DetailComponent: React.FC = () => {
 
  const context: StateGridContext = React.useContext(MyContextStateGrid);
  const rowsGrid = context.stateGrid.rowsGrid;
 
  const rowsSelection: GridRowSelectionModel = context.stateGrid.rowsSelection;
  const handleChangeStatus =(status :string): void =>{
    context.setStateGrid({
      rowsGrid: rowsGrid.map((row) => {
        if (rowsSelection.includes(row.id)){
          return { ...row,
                   state:status}
        } else{
          return row;
        }
      }),
      rowsSelection
    })
   }
 
   const handleOnValid =(e)=>{
    handleChangeStatus(STATUS.VALID)
  }
  const handleOnInValid =(e)=>{
    handleChangeStatus(STATUS.PENDING);
  }

  const buttons = [
    <Button key="validate" onClick={handleOnValid}>Validar</Button>,
    <Button key="Invalidar" onClick={handleOnInValid}>Invalidar</Button>,
  ];

  const processRowUpdate = (newRow: any) => {
    context.setStateGrid({
      ...context.stateGrid,
      rowsGrid: rowsGrid.map((row) => {
        if (row.id === newRow.id) {
          return { ...row, totalAmount: isNaN(Number(newRow.totalAmount)) ? 0 : Number(newRow.totalAmount) };
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
