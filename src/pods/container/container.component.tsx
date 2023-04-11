import React from "react";
import { Order } from "../order/order.container";
import { Detail } from "../detail/detail.container";
import { MyStateGridProvider } from "../../core/providers/stateGridProvider";

export const ContainerComponent: React.FC = () => {
  return (
    <>
      <MyStateGridProvider>
        <Order />
        <Detail />
      </MyStateGridProvider>
    </>
  );
};
