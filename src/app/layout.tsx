import './globals.css';
import StyledComponentsRegistry from './lib/registry';
import styles from './layout.module.css';
import Header from '../components/Header/Header';
import Footer from '@/components/Footer/Footer';
import { Analytics } from '@vercel/analytics/react';
import FormOnline from '@/components/FormOnline/FormOnline';
export const metadata = {
  title: 'Бокс - Дорошенко Віктор',
  description: 'Групові та індувідуальні заняття по боксу',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className={styles.html} lang="en">
      <body className={styles.body}>
        <Header />
        <div className={styles.page}>
          <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
        </div>
        <FormOnline />
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
