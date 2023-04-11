import React from "react";
import { ContainerLayout } from "../layouts/container.layout";
import { Container } from "../pods/container/container.container";

export const OrderContainer: React.FC = () => {
  return (
    <>
      <ContainerLayout>
        <Container />
      </ContainerLayout>
    </>
  );
};
