import React from "react";
import { ContainerComponent } from "./container.component";
import { CenterLayout } from "../../layouts/center.layout";

export const Container: React.FC = () => {
  return (
    <CenterLayout>
      <ContainerComponent />
    </CenterLayout>
  );
};
