import { GridColDef } from "@mui/x-data-grid/models/colDef";
export interface RowDetails {
  id: string;
  state: string;
  description: string;
  totalAmount: number;
}
export const columnsDetails: GridColDef[] = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "state", headerName: "State" },
  { field: "description", headerName: "Description" },
  { field: "totalAmount", headerName: "Total Amount", editable: true },
];
export const rowsDetails: RowDetails[] = [
  {
    id: "1",
    state: "Valido",
    description: "Reactivos maquinaria",
    totalAmount: 10.5,
  },
  {
    id: "2",
    state: "Pendiente",
    description: "Recambios impresión",
    totalAmount: 11.2,
  },
  {
    id: "3",
    state: "Pendiente",
    description: "Soportes plataforma",
    totalAmount: 540,
  },
];
