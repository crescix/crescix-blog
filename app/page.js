import Link from "next/link";
import { getAllPosts, formatarData } from "../lib/posts";

export default function Home() {
  const posts = getAllPosts();

  return (
    <main>
      <section className="hero">
        <span className="kicker">Diário de bordo</span>
        <h1>
          Registrando tudo o que a CrescIX <span className="gradient">constrói</span>
        </h1>
        <p>
          Projetos, bastidores, aprendizados e novidades da gestão financeira no
          automático pra pequenos negócios.
        </p>
      </section>

      <div className="container">
        <h2 className="section-title">Últimos posts</h2>
        {posts.length === 0 ? (
          <p>Nenhum post publicado ainda. Em breve!</p>
        ) : (
          <div className="grid">
            {posts.map((post) => (
              <Link key={post.slug} href={`/posts/${post.slug}`} className="card">
                <span className="categoria">{post.categoria}</span>
                <h2>{post.titulo}</h2>
                <p className="data">{formatarData(post.data)}</p>
                <p className="resumo">{post.resumo}</p>
                <span className="leia-mais">Ler post completo &rarr;</span>
              </Link>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
