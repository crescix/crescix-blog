import { Plus_Jakarta_Sans, DM_Sans } from "next/font/google";
import Link from "next/link";
import Image from "next/image";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-display",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
});

export const metadata = {
  metadataBase: new URL("https://blog.crescix.com.br"),
  title: {
    default: "Blog da CrescIX",
    template: "%s | Blog da CrescIX",
  },
  description:
    "O diário de bordo da CrescIX: projetos, bastidores, aprendizados e novidades da gestão financeira no automático pra pequenos negócios.",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: "Blog da CrescIX",
  },
};

export const viewport = {
  themeColor: "#001c37",
  colorScheme: "light",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR" className={`${jakarta.variable} ${dmSans.variable}`}>
      <body style={{ fontFamily: "var(--font-body)" }}>
        <nav className="nav">
          <div className="nav-inner">
            <Link href="/" className="logo">
              <Image
                src="/logo.png"
                alt="CresciX"
                width={120}
                height={45}
                priority
              />
              <span className="blog-tag">Blog</span>
            </Link>
            <div className="nav-links">
              <Link href="/">Início</Link>
              <Link href="/sobre" className="esconde-mobile">
                Sobre
              </Link>
              <a href="https://crescix.com.br" className="cta">
                Conheça a CrescIX
              </a>
            </div>
          </div>
        </nav>

        {children}

        <footer>
          <p>
            <span className="logo-footer">
              Cresc<span className="ix">IX</span>
            </span>{" "}
            &copy; {new Date().getFullYear()}. Todos os direitos reservados.
          </p>
          <p>
            Gestão financeira no automático pra pequenos negócios &middot;{" "}
            <a href="https://crescix.com.br">crescix.com.br</a>
          </p>
        </footer>
      </body>
    </html>
  );
}
