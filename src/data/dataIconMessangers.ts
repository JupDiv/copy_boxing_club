export type IconMessangerItemType = {
  id: number;
  href: string;
  srcImg: string;
  alt: string;
  width: number;
  height: number;
};

export const dataIconMessangers: IconMessangerItemType[] = [
  {
    id: 1,
    href: 'https://t.me/ivictordoroshenko',
    srcImg:
      'https://upload.wikimedia.org/wikipedia/commons/8/82/Telegram_logo.svg',
    alt: 'Telegram',
    width: 30,
    height: 30,
  },
  {
    id: 2,
    href: 'https://wa.me/380631846052',
    srcImg:
      'https://upload.wikimedia.org/wikipedia/commons/1/19/WhatsApp_logo-color-vertical.svg',
    alt: 'Whats`up',
    width: 30,
    height: 30,
  },
  {
    id: 3,
    href: 'viber://chat?number=%2B380631846052',
    srcImg:
      'https://upload.wikimedia.org/wikipedia/commons/5/5d/Viber_logo_2018_%28without_text%29.svg',
    alt: 'Viber',
    width: 30,
    height: 30,
  },
];
