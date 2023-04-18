import React from "react";
import * as classes from "./layouts.styles";

interface Props {
  children: React.ReactNode;
}

export const CenterLayout: React.FC<Props> = ({ children }) => (
  <div css={classes.layoutCenter}>{children}</div>
);
