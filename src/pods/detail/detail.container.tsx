import React from "react";
import { DetailComponent } from "./detail.component";
import * as classes from "./../../details.styles";

export const Detail: React.FC = () => {
  return (
    <div css={classes.container}>
      <DetailComponent />
    </div>
  );
};
