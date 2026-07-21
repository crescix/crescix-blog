export const metadata = {
  title: "Sobre",
  description: "Quem é a CrescIX e por que este blog existe.",
};

export default function Sobre() {
  return (
    <main className="post-container">
      <article>
        <header className="post-header">
          <span className="categoria">Institucional</span>
          <h1>Sobre a CrescIX</h1>
          <p className="meta">Quem somos e por que este blog existe</p>
        </header>

        <div className="prose">
          <p>
            A <strong>CrescIX</strong> transforma áudios e mensagens do Telegram
            em controle financeiro real. Cadastre vendas, despesas e compras
            conversando — sem planilha, sem complicação.
          </p>
          <p>
            Este blog é o nosso diário de bordo: aqui registramos projetos,
            decisões, aprendizados e cada passo da nossa jornada construindo a
            gestão financeira no automático pra pequenos negócios.
          </p>

          <h2>Contato</h2>
          <p>
            📧 E-mail:{" "}
            <a href="mailto:cashflowcontatomg@gmail.com">
              cashflowcontatomg@gmail.com
            </a>
            <br />
            🌐 Site: <a href="https://crescix.com.br">crescix.com.br</a>
          </p>
        </div>
      </article>
    </main>
  );
}
