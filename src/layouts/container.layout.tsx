import React from "react";
import * as classes from "../details.styles";

interface Props {
  children: React.ReactNode;
}

export const ContainerLayout: React.FC<Props> = ({ children }) => (
  <div css={classes.layoutContainer}>{children}</div>
);
