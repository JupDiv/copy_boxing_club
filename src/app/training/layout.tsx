import module from './layout.module.css';
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className={module.container}>
      <div className={module.containerInner}>{children}</div>
    </div>
  );
}
