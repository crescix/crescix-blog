import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const postsDir = path.join(process.cwd(), "content", "posts");

export function getAllPosts() {
  return fs
    .readdirSync(postsDir)
    .filter((f) => f.endsWith(".md") && !f.startsWith("_"))
    .map((fileName) => {
      const slug = fileName.replace(/\.md$/, "");
      const raw = fs.readFileSync(path.join(postsDir, fileName), "utf8");
      const { data } = matter(raw);
      return { slug, ...data };
    })
    .sort((a, b) => (a.data < b.data ? 1 : -1));
}

export async function getPost(slug) {
  const raw = fs.readFileSync(path.join(postsDir, `${slug}.md`), "utf8");
  const { data, content } = matter(raw);
  const processed = await remark().use(html).process(content);
  return { slug, ...data, contentHtml: processed.toString() };
}

export function formatarData(iso) {
  const meses = [
    "janeiro", "fevereiro", "março", "abril", "maio", "junho",
    "julho", "agosto", "setembro", "outubro", "novembro", "dezembro",
  ];
  const [ano, mes, dia] = iso.split("-").map(Number);
  return `${dia} de ${meses[mes - 1]} de ${ano}`;
}
