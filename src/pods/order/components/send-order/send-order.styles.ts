import {css} from '@emotion/react';
import { theme } from '../../../../core/styles/theme';
import {inputsOrder} from "./../../order.styles"
export const buttonSend = css`
    color:${theme.color};
    border-color:${theme.color};
    margin: 1em;
`;
export const inputSend = inputsOrder;