import React from "react";
import { ContainerComponent } from "../pods/container/container.component";
import { CenterLayout } from "../layouts/center.layout";

export const ContainerScene: React.FC = () => {
  return (
    <CenterLayout>
      <ContainerComponent />
    </CenterLayout>
  );
};
