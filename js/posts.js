// ============================================================
// LISTA DE POSTS DO BLOG DA CRESCIX
//
// Para adicionar um post novo:
//   1. Duplique o arquivo posts/_modelo.html e renomeie
//      (ex.: posts/2026-07-25-nome-do-post.html)
//   2. Escreva o conteúdo dentro dele
//   3. Adicione um bloco novo NO TOPO da lista abaixo
//      (o primeiro da lista aparece primeiro na página inicial)
// ============================================================

const POSTS = [
  {
    titulo: "Bem-vindos ao blog da Crescix!",
    data: "20 de julho de 2026",
    categoria: "Institucional",
    resumo:
      "Estreamos nosso espaço oficial para registrar tudo o que fazemos: projetos, bastidores, aprendizados e novidades da Crescix.",
    arquivo: "posts/2026-07-20-bem-vindos.html",
  },
];

// ---- Não precisa mexer daqui para baixo ----

const lista = document.getElementById("lista-posts");

if (lista) {
  if (POSTS.length === 0) {
    lista.innerHTML = "<p>Nenhum post publicado ainda. Em breve!</p>";
  } else {
    lista.innerHTML = POSTS.map(
      (post) => `
      <div class="card">
        <span class="categoria">${post.categoria}</span>
        <h2><a href="${post.arquivo}">${post.titulo}</a></h2>
        <p class="data">${post.data}</p>
        <p class="resumo">${post.resumo}</p>
        <a class="leia-mais" href="${post.arquivo}">Ler post completo &rarr;</a>
      </div>`
    ).join("");
  }
}
