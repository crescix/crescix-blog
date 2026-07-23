import Link from "next/link";
import { getAllPosts, getPost, formatarData } from "../../../lib/posts";

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = await getPost(slug);
  return {
    title: post.titulo,
    description: post.resumo,
    openGraph: { title: post.titulo, description: post.resumo },
  };
}

export default async function PostPage({ params }) {
  const { slug } = await params;
  const post = await getPost(slug);

  return (
    <main className="post-container">
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
