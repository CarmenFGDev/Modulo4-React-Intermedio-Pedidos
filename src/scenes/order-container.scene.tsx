import React from "react";
import { ContainerLayout } from "../layouts/container.layout";
import { ContainerScene } from "./container.scene";

export const OrderContainer: React.FC = () => {
  return (
    <>
      <ContainerLayout>
        <ContainerScene />
      </ContainerLayout>
    </>
  );
};
