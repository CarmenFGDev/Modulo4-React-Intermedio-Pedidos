import React from "react";
import { InfoOrder } from "./components/info-order/info-order.container";
import { SendOrder } from "./components/send-order/send-order.container";
import * as classes from "./order.styles";
export const OrderComponent: React.FC = () => {
  return (
    <div css={classes.container}>
      <InfoOrder />
      <SendOrder />
    </div>
  );
};
