import {jsx, css} from '@emotion/react';
import { theme } from './core/styles/theme';
export const buttonGrid = css`
    color:${theme.color};
    border-color:${theme.color};
`;

export const buttonSend = css`
    color:${theme.color};
    border-color:${theme.color};
    margin: 1em;
`;

export const title = css`
    color:${theme.color};
    padding-bottom:2em;`;

export const layoutCenter = css`
  width: 55%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border: 1px solid #808000;
  box-shadow: 1px 1px 3px 0px rgba(128, 128, 0.1) inset;
`; 

export const layoutContainer = css`
  width: 100%;
  display: flex;
  justify-content: center;
`;  

export const container = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 3em;
  box-shadow: 1px 1px 8px 0px rgba(0, 0, 0, 0.1) inset;
  margin: 2em;
`;

export const boxButtoms = css`
   display: flex;
   flex-direction: column;
   align-items: left;
`;







