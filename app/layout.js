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
    default: "Blog CrescIX | Bastidores da startup de tecnologia pra pequenos negócios",
    template: "%s | Blog CrescIX",
  },
  description:
    "Diário de bordo da CrescIX. Bastidores, projetos, decisões técnicas e novidades dos produtos que a gente constrói pra pequenos e médios negócios brasileiros.",
  keywords: [
    "CrescIX",
    "startup brasileira",
    "gestão financeira pra pequenos negócios",
    "ERP para mercados",
    "atendimento automático WhatsApp",
    "IA para PMEs",
    "Inatel Startups",
    "Santa Rita do Sapucaí",
  ],
  authors: [{ name: "CrescIX", url: "https://crescix.com.br" }],
  creator: "CrescIX",
  publisher: "CrescIX",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: "Blog CrescIX",
    url: "https://blog.crescix.com.br",
    title: "Blog CrescIX",
    description:
      "Bastidores, projetos e novidades da CrescIX, startup brasileira de tecnologia pra pequenos e médios negócios.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog CrescIX",
    description:
      "Bastidores e novidades da CrescIX, startup brasileira de tecnologia pra pequenos e médios negócios.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "technology",
};

export const viewport = {
  themeColor: "#001c37",
  colorScheme: "light",
};

/**
 * JSON-LD Organization + WebSite. Fornecem entidade estruturada da CrescIX
 * pro Google Knowledge Graph e habilitam sitelinks + search box no
 * resultado da marca. Publicados como <script type="application/ld+json">
 * porque o Next não injeta structured data automaticamente.
 */
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "CrescIX",
  legalName: "CrescIX",
  url: "https://crescix.com.br",
  logo: "https://blog.crescix.com.br/logo.png",
  description:
    "Startup brasileira que constrói soluções tecnológicas pra pequenos e médios negócios. Faz parte do Inatel Startups, em Santa Rita do Sapucaí, MG.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Santa Rita do Sapucaí",
    addressRegion: "MG",
    addressCountry: "BR",
  },
  sameAs: [
    "https://crescix.com.br",
    "https://www.instagram.com/crescix_tecnologia",
    "https://www.linkedin.com/company/crescix/",
  ],
  memberOf: {
    "@type": "Organization",
    name: "Inatel Startups",
    url: "https://inatel.br/inatelstartups",
  },
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Blog CrescIX",
  url: "https://blog.crescix.com.br",
  inLanguage: "pt-BR",
  publisher: { "@type": "Organization", name: "CrescIX" },
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR" className={`${jakarta.variable} ${dmSans.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
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
              <Link href="/" className="esconde-mobile">
                Início
              </Link>
              <Link href="/sobre">Sobre</Link>
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
