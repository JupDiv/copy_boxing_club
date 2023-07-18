import styled from 'styled-components';
import Link from 'next/link';
import Image from 'next/image';
import MenuIcon from '@mui/icons-material/Menu';

export const HeaderWrapper = styled.header`
  position: fixed;
  top: 0;
  background: #d61c4e;
  width: 100%;
  border-radius: 0 0 20px 20px;
  z-index: 100;
`;
export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 0 20px;
  height: 80px;
  color: #293462;

  @media (max-width: 900px) {
    justify-content: space-between;
    height: 63px;
  }
`;

export const HeaderLogo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    // display: none;
  }
`;

export const HeaderLogoImage = styled(Image)`
  @media (max-width: 900px) {
    width: 60px;
    height: 60px;
  }
`;

export const HeaderContactsContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column-reverse;
  align-items: center;
  margin-right: 20px;

  @media (max-width: 900px) {
    flex: 2;
    margin-left: 0;
    font-size: 14px;
  }
`;

export const HeaderContacts = styled.div``;

export const HeaderLink = styled(Link)`
  text-decoration: none;
  color: black;
  font-size: 20px;
  font-weight: 700;
  &:hover {
    color: red;
  }

  @media (max-width: 900px) {
    display: none;
  }
`;

export const MobileMenuContainer = styled.div`
  display: none;
  @media (max-width: 900px) {
    display: block;
  }
`;

export const MobileMenuButton = styled.button`
  background: inherit;
  border: none;
`;
export const MobileMenuIcon = styled(MenuIcon)`
  color: #1cd6ce;
`;
