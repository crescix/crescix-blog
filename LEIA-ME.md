# Blog da Crescix 🌱

Blog estático da Crescix — sem precisar de servidor, banco de dados nem programação avançada. Basta abrir o `index.html` no navegador.

## Estrutura das pastas

```
crescix-blog/
├── index.html          → Página inicial (lista os posts automaticamente)
├── sobre.html          → Página "Sobre a Crescix" (edite com a sua história)
├── LEIA-ME.md          → Este arquivo
├── css/style.css       → Cores e visual do blog
├── js/posts.js         → LISTA DE POSTS (é aqui que você cadastra post novo)
├── posts/              → Um arquivo HTML por post
│   ├── _modelo.html    → Modelo para copiar (não apague!)
│   └── 2026-07-20-bem-vindos.html
└── imagens/            → Coloque aqui as fotos usadas nos posts
```

## Como adicionar um post novo (3 passos)

1. **Copie** o arquivo `posts/_modelo.html` e renomeie seguindo o padrão
   `ANO-MES-DIA-titulo-curto.html` (ex.: `2026-07-25-novo-projeto.html`).
2. **Escreva** o conteúdo dentro do arquivo: troque o título, a data, a
   categoria e os parágrafos.
3. **Cadastre** o post em `js/posts.js`: copie um bloco `{ ... },` existente,
   cole **no topo** da lista `POSTS` e atualize título, data, categoria,
   resumo e o nome do arquivo.

Pronto! O post aparece automaticamente na página inicial.

## Como mudar as cores

Abra `css/style.css` — as cores principais estão logo no começo, na seção
`:root`. Troque os códigos (ex.: `--verde: #16a34a;`) pelos da identidade
visual da Crescix.

## Como publicar na internet (de graça)

Algumas opções gratuitas:

- **Netlify** (mais fácil): acesse [netlify.com/drop](https://app.netlify.com/drop)
  e arraste a pasta `crescix-blog` inteira. Pronto, o blog fica no ar.
- **GitHub Pages**: crie um repositório no GitHub, envie os arquivos e ative
  o Pages nas configurações.
- **Vercel**: parecido com o Netlify, em [vercel.com](https://vercel.com).

Depois dá para conectar um domínio próprio (ex.: `blog.crescix.com.br`).
