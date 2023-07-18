import { useMemo } from 'react';
import {
  FooterContactsSocials,
  FooterContactsSocialsIcon,
  FooterContactsSocialsLink,
  FooterContactsSocialsList,
  FooterContactsSocialsListItem,
} from './SocialIcon.styles';
import type { SocialIconType } from '@/data/dataSocialIcon';
import { dataSocialIcon } from '@/data/dataSocialIcon';
type FooterSocialType = {
  place?: string;
};

export default function FooterSocial({ place }: FooterSocialType) {
  const memorizedSocialIcon = useMemo(() => {
    return dataSocialIcon.map(
      ({ id, width, height, srcImg, href, altImg }: SocialIconType) => (
        <FooterContactsSocialsListItem key={id}>
          <FooterContactsSocialsLink href={href}>
            <FooterContactsSocialsIcon
              width={width}
              height={height}
              src={srcImg}
              alt={altImg}
            />
          </FooterContactsSocialsLink>
        </FooterContactsSocialsListItem>
      )
    );
  }, []);

  return (
    <FooterContactsSocials>
      <FooterContactsSocialsList $place={place}>
        {memorizedSocialIcon}
      </FooterContactsSocialsList>
    </FooterContactsSocials>
  );
}
