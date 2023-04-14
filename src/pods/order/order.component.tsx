import React from "react";
import { InfoOrder } from "../infoOrder/infoOrder.container";
import { SendOrder } from "../sendOrder/sendOrder.container";
import * as classes from "./../../details.styles";
export const OrderComponent: React.FC = () => {
  return (
    <div css={classes.container}>
      <InfoOrder />
      <SendOrder />
    </div>
  );
};
