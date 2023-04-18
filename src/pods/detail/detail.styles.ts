import {css} from '@emotion/react';
import { theme } from './../../core/styles/theme';
export const customDataGrid= css`
  width: 100%;
  height: 300px;
  margin-top: 1em;
`;
export const buttonGrid = css`
    color:${theme.color};
    border-color:${theme.color};
`;
export const boxButtoms = css`
   display: flex;
   flex-direction: column;
   align-items: left;
`;
export const container = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 3em;
  box-shadow: 1px 1px 8px 0px rgba(0, 0, 0, 0.1) inset;
  margin: 2em;
`;