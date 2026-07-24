import Link from "next/link";
import { getAllPosts, getPost, formatarData } from "../../../lib/posts";

const BASE = "https://blog.crescix.com.br";

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = await getPost(slug);
  const url = `${BASE}/posts/${slug}`;
  const publishedTime = new Date(post.data).toISOString();
  const tituloCurto = post.tituloSEO || post.titulo;

  return {
    title: tituloCurto,
    description: post.resumo,
    alternates: { canonical: `/posts/${slug}` },
    openGraph: {
      type: "article",
      url,
      title: tituloCurto,
      description: post.resumo,
      siteName: "Blog CrescIX",
      locale: "pt_BR",
      publishedTime,
      modifiedTime: publishedTime,
      section: post.categoria,
      authors: ["CrescIX"],
      tags: [post.categoria, "CrescIX", "PMEs", "tecnologia"],
    },
    twitter: {
      card: "summary_large_image",
      title: tituloCurto,
      description: post.resumo,
    },
  };
}

export default async function PostPage({ params }) {
  const { slug } = await params;
  const post = await getPost(slug);
  const url = `${BASE}/posts/${slug}`;
  const publishedTime = new Date(post.data).toISOString();

  /**
   * BlogPosting é o schema que o Google usa pra habilitar rich snippets
   * (data de publicação, autor, imagem no card do resultado). BreadcrumbList
   * habilita a linha "blog.crescix.com.br > Posts > slug" no resultado.
   */
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    headline: post.titulo,
    description: post.resumo,
    datePublished: publishedTime,
    dateModified: publishedTime,
    author: { "@type": "Organization", name: "CrescIX", url: "https://crescix.com.br" },
    publisher: {
      "@type": "Organization",
      name: "CrescIX",
      logo: { "@type": "ImageObject", url: `${BASE}/logo.png` },
    },
    articleSection: post.categoria,
    inLanguage: "pt-BR",
    wordCount: post.minutosLeitura * 200,
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Blog", item: BASE },
      { "@type": "ListItem", position: 2, name: post.titulo, item: url },
    ],
  };

  return (
    <main className="post-container">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <Link href="/" className="voltar">
        <span className="arrow" aria-hidden="true">&larr;</span> Voltar para o início
      </Link>

      <article>
        <header className={`post-header accent-${post.accent}`}>
          <span className="categoria">{post.categoria}</span>
          <h1>{post.titulo}</h1>
          <p className="meta">
            <span>Publicado em {formatarData(post.data)}</span>
            <span className="dot" aria-hidden="true" />
            <span>{post.minutosLeitura} min de leitura</span>
          </p>
        </header>

        <div
          className="prose"
          dangerouslySetInnerHTML={{ __html: post.contentHtml }}
        />
      </article>
    </main>
  );
}
