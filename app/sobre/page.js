export const metadata = {
  title: "Sobre",
  description:
    "A CrescIX é uma startup brasileira que constrói soluções tecnológicas pra pequenos e médios negócios. Faz parte do Inatel Startups, em Santa Rita do Sapucaí, MG.",
};

export default function Sobre() {
  return (
    <main>
      <section className="hero">
        <span className="kicker">Sobre a CrescIX</span>
        <h1>
          Tecnologia que <span className="gradient">trabalha pelo seu negócio</span>
        </h1>
        <p>
          Startup brasileira que constrói soluções pra pequenos e médios negócios
          saírem da planilha e ganharem tempo pra crescer.
        </p>
      </section>

      <div className="post-container">
        <article>
          <div className="prose">
            <h2>O que a gente faz</h2>
            <p>
              A <strong>CrescIX</strong> desenvolve produtos que resolvem dores
              reais de quem toca uma empresa no dia a dia. Três frentes,
              mesmo propósito de tirar peso do balcão:
            </p>
            <ul>
              <li>
                <strong>Bot financeiro por IA</strong> pra pequenos negócios
                registrarem vendas, despesas e compras conversando no Telegram,
                por texto ou áudio. Sem planilha, sem digitação.
              </li>
              <li>
                <strong>ERP pra mercados e varejo</strong> com PDV operado no
                teclado, emissão de NFC-e, estoque em tempo real, produtos
                pesáveis e crediário organizado.
              </li>
              <li>
                <strong>Assistente de atendimento no WhatsApp</strong> feito sob
                medida pra clínicas, academias, laboratórios e empresas de
                serviço. Atende 24 horas, agenda, direciona e lembra.
              </li>
            </ul>

            <h2>Onde a gente está</h2>
            <p>
              A CrescIX faz parte do <strong>Inatel Startups</strong>, programa
              de incubação do Instituto Nacional de Telecomunicações, referência
              brasileira em inovação e tecnologia. Nosso escritório fica no
              campus do Inatel, em <strong>Santa Rita do Sapucaí, MG</strong>, o
              Vale da Eletrônica.
            </p>

            <h2>Como a gente começou</h2>
            <p>
              A ideia nasceu enquanto os fundadores ainda estudavam engenharia
              de software na <strong>UNIFEI</strong> e na <strong>FAI</strong>.
              Conversando com pequenos comerciantes da região, a gente ouviu
              sempre a mesma coisa: informação que importa pro caixa ficava
              perdida em áudios, mensagens espalhadas e caderno. E as
              ferramentas existentes pediam tempo, treino e disciplina que o
              comerciante simplesmente não tem.
            </p>
            <p>
              A aposta foi inverter a lógica: em vez de fazer o comerciante
              virar operador de sistema, a gente coloca a IA pra fazer o
              trabalho de digitar.
            </p>

            <blockquote>
              Tecnologia boa é aquela que some. Você usa, resolve o problema e
              volta pro que importa: o próprio negócio.
            </blockquote>

            <h2>Por que este blog existe</h2>
            <p>
              Este blog é o diário de bordo da CrescIX. Aqui a gente registra o
              que está construindo, o que aprendeu, o que deu errado no meio do
              caminho e o que vem por aí. Cada post é um pedaço da história do
              produto atual e um convite pra quem quiser acompanhar de perto.
            </p>

            <h2>Fala com a gente</h2>
            <p>
              📧 E-mail:{" "}
              <a href="mailto:cashflowcontatomg@gmail.com">
                cashflowcontatomg@gmail.com
              </a>
              <br />
              📱 WhatsApp:{" "}
              <a
                href="https://wa.me/5535984219965"
                target="_blank"
                rel="noopener noreferrer"
              >
                +55 (35) 98421-9965
              </a>
              <br />
              📸 Instagram:{" "}
              <a
                href="https://www.instagram.com/crescix_tecnologia"
                target="_blank"
                rel="noopener noreferrer"
              >
                @crescix_tecnologia
              </a>
              <br />
              💼 LinkedIn:{" "}
              <a
                href="https://www.linkedin.com/company/crescix/"
                target="_blank"
                rel="noopener noreferrer"
              >
                /company/crescix
              </a>
              <br />
              🌐 Site: <a href="https://crescix.com.br">crescix.com.br</a>
            </p>
            <p>
              A gente responde rápido. Se você tem um pequeno negócio ou uma
              empresa de serviço e quer participar dos testes de qualquer um dos
              produtos, é só chamar.
            </p>
          </div>
        </article>
      </div>
    </main>
  );
}
