import React from "react";
import { Order } from "../order/order.container";
import { Detail } from "../detail/detail.container";

export const ContainerComponent: React.FC = () => {
  return (
    <>
        <Order />
        <Detail />
    </>
  );
};
