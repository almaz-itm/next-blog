import Link from "next/link";

const Footer = () => {
  return (
    <footer className="site-footer">
      <span className="meta">2026 SupaBlog</span>
      <nav className="site-footer__links" aria-label="Нижняя навигация">
        <Link href="/">Записи</Link>
        <Link href="/admin">Админка</Link>
      </nav>
    </footer>
  );
}

export default Footer;