import React from "react";
import { InfoOrder } from "../infoOrder/infoOrder.container";
import { SendOrder } from "../sendOrder/sendOrder.container";

export const OrderComponent: React.FC = () => {
  return (
    <div className="container">
      <InfoOrder />
      <SendOrder />
    </div>
  );
};
