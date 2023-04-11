import React from "react";
import { InfoOrderComponent } from "./infoOrder.component";
import { MyContextInfoProvider } from "../../core/providers/infoProvider";

export const InfoOrder: React.FC = () => {
  return (
    <MyContextInfoProvider>
      <InfoOrderComponent />
    </MyContextInfoProvider>
  );
};
