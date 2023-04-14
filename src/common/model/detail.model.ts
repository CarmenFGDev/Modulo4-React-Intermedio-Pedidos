import { GridColDef } from "@mui/x-data-grid/models/colDef";
import { STATUS } from "./info.model";
export interface RowDetails {
  id: string;
  state: string;
  description: string;
  totalAmount: number;
}
export const columnsDetails: GridColDef[] = [
  { field: "id", headerName: "ID", width: 100},
  { field: "state", headerName: "Estado", width: 200 },
  { field: "description", headerName: "Descripción", width: 260 },
  { field: "totalAmount", headerName: "Total", editable: true , width: 50},
];
export const rowsDetails: RowDetails[] = [
  {
    id: "1",
    state: STATUS.VALID,
    description: "Reactivos maquinaria",
    totalAmount: 10.5,
  },
  {
    id: "2",
    state: STATUS.PENDING,
    description: "Recambios impresión",
    totalAmount: 11.2,
  },
  {
    id: "3",
    state: STATUS.PENDING,
    description: "Soportes plataforma",
    totalAmount: 540,
  },
];
