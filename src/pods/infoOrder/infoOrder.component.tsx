import React from "react";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { Box, TextField, Typography } from "@mui/material";
import { MyContextInfo } from "../../core/providers/infoProvider";
import * as classes from "./../../details.styles";
export const InfoOrderComponent: React.FC = () => {
  const infocontext = React.useContext(MyContextInfo);
  const { orderId, supplier, orderDate } = infocontext.info;
  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "25ch" },
      }}
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
        />
        <TextField
          id="supplier"
          label="Proveedor"
          defaultValue={supplier}
          InputProps={{
            readOnly: true,
          }}
        />
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker defaultValue={orderDate} />
        </LocalizationProvider>
      </div>
    </Box>
  );
};
