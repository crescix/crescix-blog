# Blog CrescIX 🌱

Blog oficial da CrescIX, feito em **Next.js** com a mesma identidade visual do [crescix.com.br](https://crescix.com.br). Hospedado na **Vercel** com deploy automático: todo push no branch `main` entra no ar sozinho em **blog.crescix.com.br**.

## Como adicionar um post novo (o mais importante!)

Os posts são arquivos **Markdown** na pasta `content/posts`. Não precisa mexer em código.

1. **Copie** o arquivo `content/posts/_modelo.md` e renomeie seguindo o padrão
   `ANO-MES-DIA-titulo-curto.md` (ex.: `2026-07-25-novo-projeto.md`).
2. **Preencha o cabeçalho** (entre os `---` no topo): `titulo`, `data` (formato
   `2026-07-25`), `categoria` e `resumo`.
3. **Escreva o post** em Markdown: texto normal, `**negrito**`, `## subtítulos`,
   listas com `-`, citações com `>`, imagens etc.
4. **Envie pro GitHub** (commit + push no `main`). A Vercel publica sozinha em
   ~1 minuto.

Os posts aparecem na página inicial do mais novo para o mais antigo (pela `data`).

## Estrutura do projeto

```
crescix-blog/
├── content/posts/       → OS POSTS (arquivos .md, é aqui que você escreve)
│   └── _modelo.md       → Modelo para copiar (não apague!)
├── public/imagens/      → Fotos usadas nos posts
├── public/logo.png      → Logo da navegação
├── app/
│   ├── icon.png         → Favicon (mesmo do site principal)
│   ├── globals.css      → Cores e visual (tokens do crescix.com.br)
│   ├── layout.js        → Navegação e rodapé
│   ├── page.js          → Página inicial
│   ├── sobre/           → Página "Sobre"
│   └── posts/[slug]/    → Página de cada post
└── lib/posts.js         → Leitura dos arquivos Markdown
```

## Rodar localmente (opcional)

Precisa do Node.js instalado:

```bash
npm install   # só na primeira vez
npm run dev   # abre em http://localhost:3000
```

## Identidade visual

As cores vêm do site principal e ficam no `:root` do `app/globals.css`:
fundo `#0b1622`, cards `#172a3a`, verde CrescIX `#22c55e`, fontes
Plus Jakarta Sans (títulos) e DM Sans (texto).
