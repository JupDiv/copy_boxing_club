import styled from 'styled-components';
import Link from 'next/link';
import Image from 'next/image';

export const FooterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: #fedb39;
  @media (max-width: 768px) {
    font-size: 14px;
  }
`;
export const FooterContainer = styled.footer`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  color: #293462;
  padding-top: 10px;
`;

export const FooterNavContainer = styled.div``;
export const FooterNavList = styled.ul`
  display: flex;
  flex-direction: column;

  justify-content: space-around;
  list-style: none;
`;
export const FooterNavListItem = styled.li`
  margin: 3px;
  padding: 2px;
`;
export const FooterNavInternalLink = styled(Link)``;
export const FooterNavExternalLink = styled.a``;
export const FooterLogoContainer = styled.div``;
export const FooterLogo = styled(Image)`
  @media (max-width: 768px) {
    display: none;
  }
`;
export const FooterContactsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
export const FooterContactsList = styled.ul`
  list-style: none;
`;
export const FooterContactsListItem = styled.li`
  margin: 3px;
  padding: 2px;
`;
export const FooterContacts = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const FooterContactsLabel = styled.label`
  margin: 3px;
  padding: 2px;
`;
