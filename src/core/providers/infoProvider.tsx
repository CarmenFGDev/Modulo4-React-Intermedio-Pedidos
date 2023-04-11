import React from "react";
import { Info } from "../../common/model/info.model";
import dayjs from "dayjs";

interface InfoContext {
  info: Info;
  setInfo: (value: Info) => void;
}
const initialState = {
  orderId: "123456",
  supplier: " Amazon",
  orderDate: dayjs(new Date()),
};
export const MyContextInfo = React.createContext<InfoContext>({
  info: initialState,
  setInfo: (value: Info): void => {},
});

export const MyContextInfoProvider = (props) => {
  const [info, setInfo] = React.useState(initialState);
  return (
    <MyContextInfo.Provider value={{ info, setInfo }}>
      {props.children}
    </MyContextInfo.Provider>
  );
};
