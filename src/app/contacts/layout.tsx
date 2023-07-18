import module from './layout.module.css';
export default function Layout({ children }: { children: React.ReactNode }) {
  return <div className={module.containerContacts}>{children}</div>;
}
