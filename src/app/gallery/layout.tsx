import styles from './layout.module.css';
export const metadata = {
  title: 'Бокс - Дорошенко Віктор - Галерея',
  description: 'Групові та індувідуальні заняття по боксу',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className={styles.galleryLayout}>
      <div className="gallery-layout__content">{children}</div>
    </div>
  );
}
