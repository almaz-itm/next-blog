import type { Metadata } from "next";
import "./globals.css";
import "./post-list.css";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "Новый проект - блог",
  description: "Учебный блог на Next.js",
};

const themeScript = `try { if (localStorage.getItem('blog-theme') === 'dark') document.documentElement.classList.add('dark-mode'); } catch {}`;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="ru">
      <head>
        <script dangerouslySetInnerHTML={{ __html:themeScript }} />
      </head>
      <body>
        <div className="site-shell">
          <Header />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
