import React from "react";
import { RowDetails, rowsDetails } from "../../common/model/detail.model";
import { GridRowSelectionModel } from "@mui/x-data-grid/models/gridRowSelectionModel";

interface StateGrid {
  rowsGrid: RowDetails[];
  rowsSelection: GridRowSelectionModel;
}
interface StateGridContext {
  stateGrid: StateGrid;
  setStateGrid: (value: StateGrid) => void;
}

export const MyContextStateGrid = React.createContext<StateGridContext>({
  stateGrid: { rowsGrid: [], rowsSelection: [] },
  setStateGrid: (value: StateGrid): void => {},
});

export const MyStateGridProvider = (props) => {
  const [stateGrid, setStateGrid] = React.useState({
    rowsGrid: rowsDetails,
    rowsSelection: [],
  });
  return (
    <MyContextStateGrid.Provider value={{ stateGrid, setStateGrid }}>
      {props.children}
    </MyContextStateGrid.Provider>
  );
};
