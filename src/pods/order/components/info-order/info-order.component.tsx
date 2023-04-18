import React from "react";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
//import { AdapterDayjs, LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import { Box, TextField, Typography } from "@mui/material";
import * as classes from "./info-order.styles";
import dayjs from "dayjs";
import { Info } from "../../../../common/model/info.model";

const initialState = {
  orderId: "123456",
  supplier: " Amazon",
  orderDate: dayjs(new Date()),
};
export const InfoOrderComponent: React.FC = () => {
  const [info, setInfo] = React.useState<Info>(initialState);
  const { orderId, supplier, orderDate } = info;
  return (
    <Box
      component="form"
      noValidate
      autoComplete="off"
    >
      <Typography variant="h5" component="h5" css={classes.title}>
        Pedido a proveedor
      </Typography>
      <div>
        <TextField
          id="orderId"
          label="Número"
          defaultValue={orderId}
          InputProps={{
            readOnly: true,
          }}
          css= {classes.inputsInfo} />
        <TextField
          id="supplier"
          label="Proveedor"
          defaultValue={supplier}
          InputProps={{
            readOnly: true,
          }}
          css= {classes.inputsInfo}
        />
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker defaultValue={orderDate} css= {classes.inputsInfo}/>
        </LocalizationProvider>
      </div>
    </Box>
  );
};
