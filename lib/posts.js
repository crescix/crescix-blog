import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const postsDir = path.join(process.cwd(), "content", "posts");

/**
 * Tempo de leitura estimado. 200 palavras/min é o padrão pra leitura
 * casual em português; conta apenas palavras alfabéticas do markdown cru.
 */
function tempoLeitura(texto) {
  const palavras = (texto.match(/\p{L}+/gu) || []).length;
  return Math.max(1, Math.round(palavras / 200));
}

/**
 * Mapa de categoria em minúsculas pra um accent semântico:
 * verde (padrão brand), cyan (tech/IA), amber (novidade/lançamento).
 * Facilita variar visual sem tocar no CSS a cada post novo.
 */
export function accentDaCategoria(categoria) {
  const c = (categoria || "").toLowerCase();
  if (c.includes("ia") || c.includes("tech") || c.includes("engenharia")) return "cyan";
  if (c.includes("novidade") || c.includes("lançamento") || c.includes("lancamento") || c.includes("release")) return "amber";
  return "green";
}

function lerFrontmatter(fileName) {
  const slug = fileName.replace(/\.md$/, "");
  const raw = fs.readFileSync(path.join(postsDir, fileName), "utf8");
  const { data, content } = matter(raw);
  return {
    slug,
    ...data,
    minutosLeitura: tempoLeitura(content),
    accent: accentDaCategoria(data.categoria),
    _content: content,
  };
}

export function getAllPosts() {
  return fs
    .readdirSync(postsDir)
    .filter((f) => f.endsWith(".md") && !f.startsWith("_"))
    .map(lerFrontmatter)
    .map(({ _content, ...post }) => post)
    .sort((a, b) => (a.data < b.data ? 1 : -1));
}

export async function getPost(slug) {
  const post = lerFrontmatter(`${slug}.md`);
  const processed = await remark().use(html).process(post._content);
  const { _content, ...meta } = post;
  return { ...meta, contentHtml: processed.toString() };
}

export function formatarData(iso) {
  const meses = [
    "janeiro", "fevereiro", "março", "abril", "maio", "junho",
    "julho", "agosto", "setembro", "outubro", "novembro", "dezembro",
  ];
  const [ano, mes, dia] = iso.split("-").map(Number);
  return `${dia} de ${meses[mes - 1]} de ${ano}`;
}
