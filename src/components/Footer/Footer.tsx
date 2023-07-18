'use client';
import { useMemo } from 'react';
import {
  FooterWrapper,
  FooterContainer,
  FooterNavContainer,
  FooterNavList,
  FooterNavListItem,
  FooterNavInternalLink,
  FooterNavExternalLink,
  FooterLogoContainer,
  FooterLogo,
  FooterContactsContainer,
  FooterContacts,
  FooterContactsList,
  FooterContactsListItem,
  FooterContactsLabel,
} from './Footer.styles';
import Logo from '../../assets/Logos/Logo.svg';
import SocialIcon from '../SocialIcon/SocialIcon';
import IconMessanger from '../IconMessage/IconMessangers';
import CurlyDevTeam from '../CurlyDevTeam/CurlyDevTeam';
import { footerLinks } from '@/data/dataFooterList';
import type { FooterLinksData } from '@/data/dataFooterList';

export default function Footer(): JSX.Element {
  const footerListLinks = useMemo(() => {
    return footerLinks.map(({ id, link, name }: FooterLinksData) => (
      <FooterNavInternalLink key={id} href={link}>
        <FooterNavListItem>{name}</FooterNavListItem>
      </FooterNavInternalLink>
    ));
  }, []);
  return (
    <FooterWrapper>
      <FooterContainer>
        <FooterNavContainer>
          <FooterNavList>{footerListLinks}</FooterNavList>
        </FooterNavContainer>
        <FooterLogoContainer>
          <FooterLogo src={Logo} alt="Logo" width={100} height={100} />
        </FooterLogoContainer>
        <FooterContactsContainer>
          <FooterContacts>
            <FooterContactsLabel>Телефони:</FooterContactsLabel>
            <FooterContactsList>
              <FooterContactsListItem>
                <a href="tel:+380 63 184 60 52">+380 63 184 60 52</a>
              </FooterContactsListItem>
              <IconMessanger place={'footer'} />
            </FooterContactsList>
          </FooterContacts>
          <>
            <FooterContactsLabel>Соціальні мережі:</FooterContactsLabel>
            <SocialIcon />
          </>
        </FooterContactsContainer>
      </FooterContainer>
      <CurlyDevTeam />
    </FooterWrapper>
  );
}
