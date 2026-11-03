/**
 * Identificação do responsável, pro rodapé do blog.
 *
 * O blog não vende nada e não coleta dado nenhum (não há formulário,
 * cookie, analytics ou pixel; as fontes são servidas pelo próprio
 * domínio via `next/font`). Mesmo assim, o Marco Civil da Internet
 * (Lei 12.965/2014) espera que o responsável por conteúdo publicado
 * seja identificável, e a LGPD exige um canal pra exercer direitos —
 * mesmo que aqui não haja dado tratado, o leitor tem que saber pra
 * quem escrever.
 *
 * AS POLÍTICAS MORAM NO SITE PRINCIPAL. Em vez de manter uma quarta
 * cópia de política de privacidade aqui, o rodapé aponta pra
 * crescix.com.br. Se os textos de lá mudarem, nada precisa ser feito
 * neste repositório.
 *
 * COMO PREENCHER: os mesmos valores de `client/src/lib/empresa.ts` do
 * repositório da landing page. São dois lugares porque são dois
 * repositórios; mantenha iguais.
 */

export const EMPRESA = {
  nomeFantasia: "CrescIX",
  responsavel: "[PREENCHER: nome civil completo do responsável]",
  cpf: "[PREENCHER: CPF do responsável]",
  cnpj: null,
  razaoSocial: null,
  endereco: "[PREENCHER: logradouro, número, bairro, cidade/UF, CEP]",
  emailContato: "contato@crescix.com.br",
  emailDpo: "privacidade@crescix.com.br",
  site: "https://crescix.com.br",
};

/** Usa CNPJ quando existir; senão, nome civil + CPF. */
export function identificacaoFornecedor() {
  if (EMPRESA.cnpj && EMPRESA.razaoSocial) {
    return `${EMPRESA.razaoSocial} — CNPJ ${EMPRESA.cnpj}`;
  }
  return `${EMPRESA.responsavel} — CPF ${EMPRESA.cpf}`;
}

/** `true` enquanto o campo estiver com placeholder. */
export function pendente(valor) {
  return !valor || valor.startsWith("[PREENCHER");
}
