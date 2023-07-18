import styled from 'styled-components';
import Link from 'next/link';

type HeaderNavProps = {
  $isOpen?: boolean;
};
export const HeaderNavContainer = styled.nav<HeaderNavProps>`
  display: flex;
  justify-content: center;
  flex: 2;
  width: 100%;
  @media (max-width: 900px) {
    display: ${(props) => (props.$isOpen ? 'flex' : 'none')};
  }
`;

export const HeaderNavList = styled.ul`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: space-around;
  @media (max-width: 900px) {
    align-items: center;
    flex-direction: column;
  }
`;

export const HeaderNavListItem = styled.li`
  margin: 20px 0;
  list-style-type: none;
  color: #293462;

  @media (max-width: 375px) {
    font-size: 12px;
  }

  @media (min-width: 425px) and (max-width: 900px) {
    font-size: 14px;
  }
`;

export const HeaderNavLink = styled(Link)``;
