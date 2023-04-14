import { RowDetails } from "../../common/model/detail.model";
import { STATUS } from "../../common/model/info.model";

export interface UseManageInfo {
    disabledSend: boolean;
    totalAmount: number;
    totalAmountValidate: number;
}
export const useManageInfo = (rowsGrid: RowDetails[]): UseManageInfo => {
  const sumCurrentValueTotal =(accumulator, currentValue) =>  isNaN(Number(currentValue.totalAmount)) ? accumulator : accumulator + Number(currentValue.totalAmount);
  const disabledSend: boolean = rowsGrid.some((row) => row.state === STATUS.PENDING);
  const totalAmount = rowsGrid.reduce(
    (accumulator, currentValue) => sumCurrentValueTotal(accumulator, currentValue) ,
    0
  );
  const totalAmountValidate = rowsGrid.reduce(
     (accumulator, currentValue) =>
      currentValue.state === STATUS.VALID
        ? sumCurrentValueTotal(accumulator, currentValue)
        : accumulator,
    0
  );
return { disabledSend, totalAmount, totalAmountValidate};
}