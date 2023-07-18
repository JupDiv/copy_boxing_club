import styles from './layout.module.css';

export const metadata = {
  title: 'Бокс - Дорошенко Віктор - Про мене',
  description: 'Групові та індувідуальні заняття по боксу',
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className={styles.container}>{children}</div>;
}
