/**
 * robots.txt gerado pelo Next. Permite tudo (não temos áreas privadas) e
 * aponta o sitemap dinâmico. Bloqueia crawlers agressivos que não trazem
 * valor de busca (evita ruído em analytics e economia de banda).
 */
export default function robots() {
  return {
    rules: [
      { userAgent: "*", allow: "/" },
      { userAgent: "GPTBot", disallow: "/" },
      { userAgent: "CCBot", disallow: "/" },
    ],
    sitemap: "https://blog.crescix.com.br/sitemap.xml",
    host: "https://blog.crescix.com.br",
  };
}
