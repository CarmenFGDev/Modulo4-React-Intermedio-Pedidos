import React from "react";
import { OrderContainer } from "./scenes/order-container.scene";
import { MyStateGridProvider } from "./core/providers/stateGridProvider";
export const App = () => {
  return (
    <MyStateGridProvider>
      <OrderContainer />;
    </MyStateGridProvider>
  );
};
