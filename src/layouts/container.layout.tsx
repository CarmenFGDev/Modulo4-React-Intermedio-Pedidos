import React from "react";

interface Props {
  children: React.ReactNode;
}

export const ContainerLayout: React.FC<Props> = ({ children }) => (
  <div className="layout-container">{children}</div>
);
