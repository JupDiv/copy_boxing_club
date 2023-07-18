import {
  HeaderNavContainer,
  HeaderNavList,
  HeaderNavListItem,
  HeaderNavLink,
} from './HeaderNav.styles';
import { arrayHeaderNavList } from '@/data/dataNavMenu';
import type { HeaderNavListType } from '@/data/dataNavMenu';

type HeaderNavListProps = {
  isOpen?: boolean;
};

export default function HeaderNav({ isOpen }: HeaderNavListProps) {
  return (
    <HeaderNavContainer $isOpen={isOpen}>
      <HeaderNavList>
        {arrayHeaderNavList.map(({ name, link }: HeaderNavListType) => (
          <HeaderNavLink key={link} href={link}>
            <HeaderNavListItem>{name}</HeaderNavListItem>
          </HeaderNavLink>
        ))}
      </HeaderNavList>
    </HeaderNavContainer>
  );
}
