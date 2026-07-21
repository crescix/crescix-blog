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
        &larr; Voltar para o início
      </Link>

      <article>
        <header className="post-header">
          <span className="categoria">{post.categoria}</span>
          <h1>{post.titulo}</h1>
          <p className="meta">Publicado em {formatarData(post.data)}</p>
        </header>

        <div
          className="prose"
          dangerouslySetInnerHTML={{ __html: post.contentHtml }}
        />
      </article>
    </main>
  );
}
