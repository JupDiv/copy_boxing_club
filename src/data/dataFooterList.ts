export type FooterLinksData = {
  id: number;
  link: string;
  name: string;
};

export const footerLinks: FooterLinksData[] = [
  {
    id: 1,
    link: '/',
    name: 'Головна',
  },
  {
    id: 2,
    link: '/about',
    name: 'Про Нас',
  },
  {
    id: 3,
    link: '/gallery',
    name: 'Галерея',
  },
  {
    id: 4,
    link: '/training',
    name: 'Тренерування',
  },
  {
    id: 5,
    link: '/contacts',
    name: 'Контакти',
  },
];
