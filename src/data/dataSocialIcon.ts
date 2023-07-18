export type SocialIconType = {
  id: number;
  href: string;
  srcImg: string;
  altImg: string;
  width: number;
  height: number;
};

export const dataSocialIcon: SocialIconType[] = [
  {
    id: 1,
    href: 'https://www.twitter.com',
    srcImg: 'https://upload.wikimedia.org/wikipedia/commons/3/30/Twitter2.svg',
    altImg: 'Twitter',
    width: 32,
    height: 32,
  },
  {
    id: 2,
    href: 'https://www.facebook.com',
    srcImg:
      'https://upload.wikimedia.org/wikipedia/commons/1/1b/Facebook_icon.svg',
    altImg: 'Facebook',
    width: 33,
    height: 33,
  },
  {
    id: 3,
    href: 'https://www.instagram.com/ivictordoroshenko',
    srcImg:
      'https://upload.wikimedia.org/wikipedia/commons/e/e7/Instagram_logo_2016.svg',
    altImg: 'Instagram',
    width: 33,
    height: 33,
  },
];
