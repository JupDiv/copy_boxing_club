import styled from 'styled-components';
import { Button } from '@mui/material';

export const ContactsWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;
export const ContactsMapContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  margin-top: 73px;

  // @media (min-height: 1920px) and (orientation: portrait) {
  //   height: 1288px;
  // }

  // @media (min-width: 1920px) and (orientation: landscape) {
  //   height: 829px;
  // }
`;

export const ContactsTitle = styled.h2`
  color: #1cd6ce;
`;
export const ContactsList = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  justify-content: space-around;
`;
export const ContactsListItem = styled.li`
  padding: 5px 0;
`;
