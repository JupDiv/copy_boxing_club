'use client';
import { useState, useEffect, useCallback } from 'react';
import { Button } from '@mui/material';
import {
  HeaderWrapper,
  HeaderContainer,
  HeaderLogo,
  HeaderLogoImage,
  HeaderLink,
  HeaderContactsContainer,
  HeaderContacts,
  MobileMenuContainer,
  MobileMenuIcon,
  MobileMenuButton,
} from './Header.styles';
import Logo from '@/assets/Logos/Logo.svg';
import IconMessanger from '../IconMessage/IconMessangers';
import MobileMenu from '../MobileMenu/MobileMenu';
import HeaderNav from '../HeaderNav/HeaderNav';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const widthWindow = useCallback(() => {
    if (typeof window !== 'undefined') {
      return window.innerWidth;
    }
    return 0;
  }, []);

  useEffect(() => {
    const maxWidth: number = 900;

    if (widthWindow() > maxWidth) {
      setIsMobileMenuOpen(false);
    }
  }, [widthWindow]);

  const handleMobileMenuOpen = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <HeaderWrapper>
      <HeaderContainer>
        <HeaderLogo>
          <HeaderLogoImage src={Logo} alt="Logo" width={80} height={80} />
        </HeaderLogo>
        <HeaderNav />
        <HeaderContactsContainer>
          <HeaderContacts>
            <a href="tel:+380 63 184 60 52">+380 63 184 60 52</a>
          </HeaderContacts>
          <IconMessanger place="header" />
        </HeaderContactsContainer>
        <MobileMenu isMobileMenuOpen={isMobileMenuOpen} />
        <MobileMenuContainer>
          <MobileMenuButton onClick={handleMobileMenuOpen}>
            <MobileMenuIcon />
          </MobileMenuButton>
        </MobileMenuContainer>
      </HeaderContainer>
    </HeaderWrapper>
  );
}
