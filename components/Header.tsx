import Image from "next/image";
import Link from "next/link";
import ThemeToggle from "./theme-toggle";

const Header = () => {
  return (
    <header className="site-header">
      <nav className="site-header__nav" aria-label="Основная навигация">
        <div className="site-header__left">
          {/* Logo */}
          <Link className="brand" href="/">
            <Image 
              className="brand__mark"
              src="/brand/book-logo@2x.png" 
              width={56} 
              height={56} 
              alt="SupaBlog logo" 
              priority 
            />
            <span className="brand__name">SupaBlog</span>
          </Link>
          <Link className="site_header__link" href="/">
            Главная
          </Link>
        </div>
        <div className="site-header__actions">
          <ThemeToggle />
          <Link className="button button--compact" href="/admin">Админка</Link>
        </div>
      </nav>
    </header>
  );
}

export default Header;