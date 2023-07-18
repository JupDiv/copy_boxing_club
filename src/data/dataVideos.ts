export type YouTubeVideosTypes = {
  id: string;
  title: string;
  description: string;
  videoId: string;
};

export const dataVideos: YouTubeVideosTypes[] = [
  {
    id: '1',
    title: 'Смертельний Джеб',
    description:
      'Удар від корпусу зазвичай є першим, який ми вчимося наносити, але памʼятайте, що залежно від кута та траєкторії, ми можемо змінювати, як саме ми наносимо цей удар',
    videoId: 'yKiZEZJQDnA',
  },
  {
    id: '2',
    title: 'Смертельний Аперкот',
    description:
      'Аперкот - це удар, який виконується знизу вгору, зазвичай він виконується знизу вгору, але може бути виконаний і згори вниз',
    videoId: 'tiHXt3v4bco',
  },
  {
    id: '3',
    title: 'Смертельний боковий удар',
    description:
      'Боковий удар - це удар, який виконується з боку в бік, зазвичай він виконується знизу вгору, але може бути виконаний і згори вниз',
    videoId: 'tiHXt3v4bco',
  },
];
