import { getAllPosts } from "../lib/posts";

const BASE = "https://blog.crescix.com.br";

/**
 * Sitemap dinâmico gerado no build. Estático (Init/Sobre) + um entry por post.
 * Google usa lastModified pra priorizar recrawl das URLs que mudam.
 */
export default function sitemap() {
  const posts = getAllPosts();
  const ultimoPost = posts[0]?.data ?? new Date().toISOString().slice(0, 10);

  const rotasFixas = [
    {
      url: `${BASE}/`,
      lastModified: new Date(ultimoPost),
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${BASE}/sobre`,
      lastModified: new Date("2026-07-23"),
      changeFrequency: "monthly",
      priority: 0.6,
    },
  ];

  const rotasPosts = posts.map((post) => ({
    url: `${BASE}/posts/${post.slug}`,
    lastModified: new Date(post.data),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [...rotasFixas, ...rotasPosts];
}
