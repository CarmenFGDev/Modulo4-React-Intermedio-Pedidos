import React from "react";
import { Box, Button, TextField } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { MyContextStateGrid } from "../../../../core/providers/stateGridProvider";
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';
import * as classes from "./send-order.styles";
import { useManageInfo } from "./useManageInfo";

export const SendOrderComponent: React.FC = () => {
  const context = React.useContext(MyContextStateGrid);
  const rowsGrid = context.stateGrid.rowsGrid;
  const { disabledSend, totalAmount, totalAmountValidate} = useManageInfo(rowsGrid);
 
  // Dialog
  const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box
      component="form"
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
          value={totalAmountValidate}
           css= {classes.inputSend}
        />
        <TextField
          id="progress"
          label="Progreso (%)"
          InputProps={{
            readOnly: true,
          }}
          value={((totalAmountValidate * 100) / totalAmount).toFixed(2)}
          css= {classes.inputSend}
        />
        <Button
          variant="outlined"
          size="medium"
          disabled= {disabledSend}
          color="success"
          endIcon={<SendIcon />}
          css={classes.buttonSend}
          onClick={handleClickOpen}
        >
          Enviar
        </Button>
         <Dialog
          open={open}
          TransitionComponent={Transition}
          keepMounted
          onClose={handleClose}
          aria-describedby="alert-dialog-slide-description"
        >
        <DialogTitle>{"Petición envío de pedido"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
           El pedido ha sido enviado correctamente
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Aceptar</Button>
        </DialogActions>
      </Dialog>
      </div>
    </Box>
  );
};


