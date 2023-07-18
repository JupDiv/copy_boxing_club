import styled from 'styled-components';
import Image from 'next/image';

type FooterSocialProps = {
  $place?: string;
};

export const FooterContactsSocials = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
export const FooterContactsSocialsList = styled.ul<FooterSocialProps>`
  display: flex;
  justify-content: ${({ $place }) =>
    $place === 'contacts' ? 'center' : 'space-around'};
  align-items: center;
  list-style: none;
  padding: 2px;
`;
export const FooterContactsSocialsListLabel = styled.label`
  text-align: center;
  margin: 3px;
  padding: 2px;

  @media (max-width: 768px) {
    display: none;
  }
`;
export const FooterContactsSocialsListItem = styled.li`
  height: 30px;
  margin: 3px;
  padding: 2px;
`;
export const FooterContactsSocialsIcon = styled(Image)``;
export const FooterContactsSocialsLink = styled.a`
  display: inline-block;
  height: inherit;
`;
