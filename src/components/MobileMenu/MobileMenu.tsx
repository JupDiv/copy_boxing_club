import HeaderNav from '../HeaderNav/HeaderNav';
import { MobileMenuWrapper } from './MobileMenu.styles';

type MobileMenuProps = {
  isMobileMenuOpen: boolean;
};

export default function MobileMenu({ isMobileMenuOpen }: MobileMenuProps) {
  return (
    <MobileMenuWrapper $isOpen={isMobileMenuOpen}>
      <HeaderNav isOpen={isMobileMenuOpen} />
    </MobileMenuWrapper>
  );
}
