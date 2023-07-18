import styled from 'styled-components';
import { Button } from '@mui/material';

export const ContactsMapSwitcher = styled.ul`
  display: flex;
  align-items: flex-end;
  list-style: none;
  width: 100%;
  justify-content: space-around;
  margin: 10px 0;

  @media (max-width: 768px) {
    flex-wrap: wrap;
    justify-content: space-around;
  }
`;
export const ContactsMapSwitcherButton = styled(Button)`
  color: #1cd6ce;
  background-color: none;
`;
export const ContactsMapSwitcherItem = styled.li`
  margin-left: 10px;

  @media (max-width: 768px) {
    margin: 5px 5px;
  }
`;
