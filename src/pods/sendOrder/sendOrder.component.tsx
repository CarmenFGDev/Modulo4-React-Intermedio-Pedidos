import React from "react";
import { Box, Button, TextField } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { MyContextStateGrid } from "../../core/providers/stateGridProvider";

export const SendOrderComponent: React.FC = () => {
  const context = React.useContext(MyContextStateGrid);
  const rowsGrid = context.stateGrid.rowsGrid;
  const rowSelection = context.stateGrid.rowsSelection;

  const disabledSend: boolean = rowsGrid.some((row) => row.state === "Valido");
  const totalAmount = rowsGrid.reduce(
    (accumulator, currentValue) => accumulator + currentValue.totalAmount,
    0
  );
  const totalAmountValidate = rowsGrid.reduce(
    (accumulator, currentValue) =>
      currentValue.state === "Valido"
        ? accumulator + currentValue.totalAmount
        : accumulator,
    0
  );

  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          id="amount"
          label="Importe total"
          InputProps={{
            readOnly: true,
          }}
          value={totalAmount}
        />
        <TextField
          id="progress"
          label="Progress"
          InputProps={{
            readOnly: true,
          }}
          value={((totalAmountValidate * 100) / totalAmount).toFixed(2)}
        />
        <Button
          variant="outlined"
          size="medium"
          disabled={disabledSend}
          color="success"
          endIcon={<SendIcon />}
          sx={{ color: "olive", borderColor: "olive", margin: "1em" }}
        >
          Send
        </Button>
      </div>
    </Box>
  );
};
