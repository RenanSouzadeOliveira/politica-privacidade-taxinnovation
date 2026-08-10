import type { ReactNode } from "react";
import { Brand } from "@/components/Brand";
import { ArrowUpIcon, MailIcon, ShieldIcon } from "@/components/Icons";

const company = {
  legalName: "INOVA TAX GESTAO E CONSULTORIA EMPRESARIAL LTDA",
  tradeName: "Tax Innovation",
  cnpj: "25.047.521/0001-25",
  address: "Av. Paulista, 1636, Conj. 1504, Bela Vista, CEP 01310-200",
  privacyEmail: "privacidade@taxinnovation.com.br",
};

const sections = [
  ["aplicacao", "A quem esta Política se aplica"],
  ["responsavel", "Responsável pelo tratamento"],
  ["dados-coletados", "Dados que podemos coletar"],
  ["coleta", "Como coletamos os dados"],
  ["finalidades", "Finalidades do tratamento"],
  ["bases-legais", "Bases legais utilizadas"],
  ["publicidade", "Publicidade e Meta"],
  ["comunicacoes", "Comunicações comerciais"],
  ["compartilhamento", "Compartilhamento de dados"],
  ["transferencia", "Transferência internacional"],
  ["conservacao", "Conservação dos dados"],
  ["seguranca", "Segurança dos dados"],
  ["direitos", "Direitos dos titulares"],
  ["dados-sensiveis", "Dados pessoais sensíveis"],
  ["criancas", "Crianças e adolescentes"],
  ["alteracoes", "Alterações desta Política"],
  ["contato", "Contato"],
] as const;

function PolicySection({
  number,
  id,
  title,
  children,
}: {
  number: number;
  id: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="policy-section" id={id} aria-labelledby={`${id}-title`}>
      <div className="section-heading">
        <span className="section-number" aria-hidden="true">
          {String(number).padStart(2, "0")}
        </span>
        <h2 id={`${id}-title`}>{title}</h2>
      </div>
      <div className="section-body">{children}</div>
    </section>
  );
}

export default function PrivacyPolicyPage() {
  return (
    <>
      <a className="skip-link" href="#conteudo">
        Ir para o conteúdo
      </a>

      <header className="site-header" id="topo">
        <div className="header-inner">
          <a href="#topo" aria-label="Tax Innovation — início">
            <Brand />
          </a>
          <span className="header-label">Privacidade e Proteção de Dados</span>
          <a className="header-contact" href={`mailto:${company.privacyEmail}`}>
            <MailIcon />
            <span>Fale com nosso canal de privacidade</span>
          </a>
        </div>
      </header>

      <main id="conteudo">
        <section className="hero" aria-labelledby="titulo-politica">
          <div className="hero-inner">
            <span className="eyebrow">Privacidade em primeiro lugar</span>
            <h1 id="titulo-politica">
              Política de Privacidade e <span>Proteção de Dados</span>
            </h1>
            <p className="hero-description">
              Transparência sobre como a Tax Innovation coleta, utiliza, armazena,
              compartilha e protege seus dados pessoais.
            </p>
            <div className="hero-meta" aria-label="Informações da versão">
              <span className="meta-pill">
                Versão <strong>1.0</strong>
              </span>
              <span className="meta-pill">
                Atualizada em <strong>10 de agosto de 2026</strong>
              </span>
            </div>
          </div>
        </section>

        <div className="trust-strip">
          <div className="trust-card">
            <ShieldIcon className="trust-icon" />
            <div>
              <strong>Compromisso com a proteção dos seus dados</strong>
              <p>
                Tratamento responsável, transparente e limitado às finalidades informadas.
              </p>
            </div>
            <span className="law-badge">EM CONFORMIDADE COM A LGPD</span>
          </div>
        </div>

        <div className="content-shell">
          <aside className="toc" aria-label="Índice da Política">
            <p className="toc-kicker">Nesta política</p>
            <nav>
              <ol>
                {sections.map(([id, label], index) => (
                  <li key={id}>
                    <a href={`#${id}`}>
                      {String(index + 1).padStart(2, "0")} · {label}
                    </a>
                  </li>
                ))}
              </ol>
            </nav>
            <div className="contact-mini">
              <span>Dúvidas sobre seus dados?</span>
              <a href={`mailto:${company.privacyEmail}`}>{company.privacyEmail}</a>
            </div>
          </aside>

          <article>
            <div className="policy-intro">
              <p>
                A <strong>{company.legalName}</strong>, nome fantasia {company.tradeName},
                inscrita no CNPJ sob nº {company.cnpj}, com sede na {company.address}, valoriza
                a privacidade e a proteção dos dados pessoais das pessoas que interagem com
                nossos canais, sites, páginas, anúncios, formulários e serviços.
              </p>
              <p>
                Esta Política de Privacidade tem como objetivo explicar, de forma clara e
                transparente, como coletamos, utilizamos, armazenamos, compartilhamos e
                protegemos dados pessoais, em conformidade com a Lei nº 13.709/2018 — Lei
                Geral de Proteção de Dados Pessoais (LGPD) e demais normas aplicáveis.
              </p>
            </div>

            <PolicySection number={1} id="aplicacao" title="A quem esta Política se aplica">
              <p>
                Esta Política se aplica às pessoas naturais que forneçam seus dados à Tax
                Innovation, inclusive:
              </p>
              <ul>
                <li>representantes, sócios, proprietários, diretores, gestores e colaboradores de empresas;</li>
                <li>interessados em nossos serviços;</li>
                <li>potenciais clientes;</li>
                <li>pessoas que preencham formulários em nossos sites ou landing pages;</li>
                <li>pessoas que preencham formulários disponibilizados por plataformas de anúncios, como Facebook e Instagram;</li>
                <li>pessoas que entrem em contato conosco por WhatsApp, telefone, e-mail ou outros canais.</li>
              </ul>
              <p>A LGPD protege informações relacionadas a pessoas naturais identificadas ou identificáveis.</p>
            </PolicySection>

            <PolicySection number={2} id="responsavel" title="Quem é responsável pelo tratamento dos dados">
              <p>
                Para os tratamentos descritos nesta Política, a Tax Innovation atuará,
                conforme o caso, como controladora dos dados pessoais, sendo responsável
                pelas decisões relativas ao tratamento realizado para suas próprias finalidades.
              </p>
              <dl className="info-grid">
                <div className="info-item">
                  <dt>Controladora</dt>
                  <dd>{company.legalName}</dd>
                </div>
                <div className="info-item">
                  <dt>Nome fantasia</dt>
                  <dd>{company.tradeName}</dd>
                </div>
                <div className="info-item">
                  <dt>CNPJ</dt>
                  <dd>{company.cnpj}</dd>
                </div>
                <div className="info-item">
                  <dt>Endereço</dt>
                  <dd>{company.address}</dd>
                </div>
                <div className="info-item">
                  <dt>Canal de privacidade</dt>
                  <dd><a href={`mailto:${company.privacyEmail}`}>{company.privacyEmail}</a></dd>
                </div>
                <div className="info-item">
                  <dt>Encarregado ou canal responsável</dt>
                  <dd><a href={`mailto:${company.privacyEmail}`}>{company.privacyEmail}</a></dd>
                </div>
              </dl>
              <p>
                A LGPD exige que o titular tenha acesso facilitado à identificação e aos
                contatos do controlador, bem como a informações sobre finalidade,
                compartilhamentos e seus direitos.
              </p>
            </PolicySection>

            <PolicySection number={3} id="dados-coletados" title="Quais dados podemos coletar">
              <p>Dependendo da interação realizada, poderemos coletar:</p>
              <h3>Dados de identificação e contato</h3>
              <ul>
                <li>nome completo;</li>
                <li>e-mail;</li>
                <li>e-mail profissional;</li>
                <li>número de telefone;</li>
                <li>WhatsApp.</li>
              </ul>
              <h3>Informações profissionais</h3>
              <ul>
                <li>empresa em que trabalha ou que representa;</li>
                <li>cargo ou função;</li>
                <li>segmento de atuação;</li>
                <li>participação ou influência em decisões financeiras, tributárias ou administrativas.</li>
              </ul>
              <h3>Informações relacionadas à empresa representada</h3>
              <p>Quando necessárias à avaliação comercial, poderão ser solicitadas informações como:</p>
              <ul>
                <li>segmento empresarial;</li>
                <li>faixa de faturamento;</li>
                <li>regime tributário;</li>
                <li>existência de operações, bonificações, rebates, incentivos comerciais ou outras características relacionadas ao serviço objeto da consulta.</li>
              </ul>
              <p>
                Essas informações serão solicitadas somente na medida necessária para avaliar
                a adequação dos serviços oferecidos pela Tax Innovation.
              </p>
              <h3>Dados técnicos e de navegação</h3>
              <p>Quando o titular acessa nossos sites ou landing pages, também poderemos receber informações como:</p>
              <ul>
                <li>endereço IP;</li>
                <li>data e horário de acesso;</li>
                <li>navegador;</li>
                <li>dispositivo;</li>
                <li>páginas acessadas;</li>
                <li>origem da visita;</li>
                <li>interações realizadas;</li>
                <li>identificadores fornecidos por cookies, pixels ou tecnologias similares.</li>
              </ul>
              <div className="note">
                <strong>Princípio da necessidade</strong>
                A LGPD determina que a coleta deve observar, entre outros, os princípios de
                finalidade, adequação e necessidade, de forma que apenas os dados pertinentes e
                proporcionais à finalidade sejam tratados.
              </div>
            </PolicySection>

            <PolicySection number={4} id="coleta" title="Como coletamos os dados">
              <p>Os dados poderão ser coletados:</p>
              <ul>
                <li>diretamente do titular;</li>
                <li>por formulários disponíveis no site da Tax Innovation;</li>
                <li>por landing pages;</li>
                <li>por formulários instantâneos disponibilizados no Facebook ou Instagram;</li>
                <li>por WhatsApp;</li>
                <li>por telefone;</li>
                <li>por e-mail;</li>
                <li>durante reuniões ou contatos comerciais;</li>
                <li>por tecnologias de navegação utilizadas em nossos sites, como cookies e pixels, quando aplicável.</li>
              </ul>
            </PolicySection>

            <PolicySection number={5} id="finalidades" title="Para quais finalidades utilizamos os dados">
              <h3>Avaliar solicitações de interessados</h3>
              <p>
                Analisar as informações fornecidas pelo potencial cliente para verificar se sua
                empresa possui perfil compatível com os serviços oferecidos pela Tax Innovation.
              </p>
              <h3>Entrar em contato</h3>
              <p>Utilizar e-mail, telefone ou WhatsApp para:</p>
              <ul>
                <li>responder à solicitação realizada;</li>
                <li>esclarecer dúvidas;</li>
                <li>fornecer informações sobre os serviços;</li>
                <li>realizar avaliação comercial inicial;</li>
                <li>agendar reuniões;</li>
                <li>apresentar propostas.</li>
              </ul>
              <h3>Qualificar oportunidades comerciais</h3>
              <p>
                Analisar informações como cargo, segmento empresarial, regime tributário e faixa
                de faturamento para verificar a pertinência dos serviços oferecidos.
              </p>
              <h3>Executar procedimentos pré-contratuais</h3>
              <p>
                Realizar atividades necessárias para elaboração de propostas, reuniões,
                avaliações iniciais ou outras providências solicitadas pelo potencial cliente
                antes da eventual contratação.
              </p>
              <h3>Melhorar nossos serviços e campanhas</h3>
              <p>Analisar, de forma agregada ou individual quando juridicamente permitido, a eficiência de:</p>
              <ul>
                <li>campanhas publicitárias;</li>
                <li>páginas;</li>
                <li>formulários;</li>
                <li>canais de atendimento;</li>
                <li>processos comerciais.</li>
              </ul>
              <h3>Cumprir obrigações legais e exercer direitos</h3>
              <p>Manter determinadas informações quando necessário para:</p>
              <ul>
                <li>cumprimento de obrigações legais ou regulatórias;</li>
                <li>prevenção a fraudes;</li>
                <li>exercício regular de direitos;</li>
                <li>defesa da Tax Innovation em processos administrativos, judiciais ou extrajudiciais.</li>
              </ul>
            </PolicySection>

            <PolicySection number={6} id="bases-legais" title="Bases legais utilizadas">
              <p>
                A Tax Innovation poderá tratar dados pessoais com fundamento nas hipóteses
                previstas no artigo 7º da LGPD, conforme a finalidade específica.
              </p>
              <p>
                Para responder a uma solicitação comercial e realizar providências preliminares
                solicitadas pelo próprio interessado, o tratamento poderá se apoiar na execução
                de procedimentos preliminares relacionados a eventual contrato, nos termos do
                art. 7º, V da LGPD.
              </p>
              <p>
                Em determinadas situações, poderá ser utilizado o consentimento, especialmente
                quando for necessária autorização para finalidades específicas e independentes,
                como certas comunicações promocionais. Quando utilizado, o consentimento deverá
                ser específico, informado e poderá ser revogado pelo titular.
              </p>
              <p>
                Também poderá ser utilizado o legítimo interesse, quando aplicável e após
                avaliação da finalidade, necessidade, expectativa razoável do titular e impactos
                sobre seus direitos e liberdades. A LGPD exige, nessa hipótese, tratamento
                limitado aos dados estritamente necessários e transparência ao titular.
              </p>
              <p>
                Outras bases previstas na legislação poderão ser utilizadas quando pertinentes,
                como cumprimento de obrigação legal ou exercício regular de direitos.
              </p>
            </PolicySection>

            <PolicySection number={7} id="publicidade" title="Publicidade, Facebook, Instagram e Meta">
              <p>
                A Tax Innovation poderá realizar campanhas publicitárias através de plataformas
                como Facebook e Instagram, fornecidas pela Meta.
              </p>
              <p>
                Quando o titular preencher um formulário instantâneo disponibilizado nessas
                plataformas, determinados dados informados poderão ser disponibilizados à Tax
                Innovation para que possamos:
              </p>
              <ul>
                <li>analisar a solicitação;</li>
                <li>qualificar o potencial cliente;</li>
                <li>entrar em contato;</li>
                <li>apresentar nossos serviços.</li>
              </ul>
              <p>
                O tratamento realizado pelas próprias plataformas também está sujeito às
                políticas e termos de privacidade dos respectivos fornecedores.
              </p>
              <p>
                A Tax Innovation poderá utilizar tecnologias como o Meta Pixel para medir
                acessos e interações em suas páginas, analisar resultados de campanhas e melhorar
                a publicidade apresentada.
              </p>
              <p>
                Quando exigido pela legislação aplicável, tecnologias não essenciais de
                publicidade e rastreamento deverão observar mecanismos apropriados de
                consentimento ou outra base jurídica válida. A ANPD possui orientação específica
                sobre transparência, bases legais e uso de cookies e tecnologias semelhantes.
              </p>
            </PolicySection>

            <PolicySection number={8} id="comunicacoes" title="Comunicações comerciais">
              <p>
                Quando permitido pela legislação e conforme a base legal aplicável, poderemos
                entrar em contato com o titular para apresentar informações relacionadas aos
                serviços da Tax Innovation.
              </p>
              <p>O titular poderá solicitar, a qualquer momento, a interrupção de comunicações promocionais.</p>
              <p>
                O pedido poderá ser realizado pelo e-mail <a href={`mailto:${company.privacyEmail}`}><strong>{company.privacyEmail}</strong></a>
                {" "}ou pelo próprio canal utilizado para a comunicação.
              </p>
              <p>
                A solicitação de interrupção de comunicações não impede contatos que sejam
                necessários para responder a uma solicitação ainda em andamento, cumprir
                obrigação legal ou exercer direitos.
              </p>
            </PolicySection>

            <PolicySection number={9} id="compartilhamento" title="Com quem os dados poderão ser compartilhados">
              <p>
                A Tax Innovation poderá compartilhar dados pessoais somente quando necessário
                para as finalidades descritas nesta Política, inclusive com:
              </p>
              <ul>
                <li>plataformas de publicidade e marketing;</li>
                <li>prestadores de hospedagem e infraestrutura em nuvem;</li>
                <li>sistemas de CRM;</li>
                <li>plataformas de e-mail;</li>
                <li>ferramentas de comunicação e atendimento;</li>
                <li>WhatsApp e fornecedores relacionados;</li>
                <li>fornecedores de tecnologia;</li>
                <li>prestadores responsáveis pela manutenção de sistemas;</li>
                <li>assessores jurídicos, contábeis ou auditores, quando necessário;</li>
                <li>autoridades públicas, quando houver obrigação legal ou determinação válida.</li>
              </ul>
              <p>
                Os fornecedores deverão receber apenas os dados necessários ao desempenho de
                suas respectivas atividades e deverão estar sujeitos às obrigações aplicáveis de
                segurança e proteção de dados.
              </p>
              <div className="note">
                <strong>Não comercializamos dados pessoais como produto.</strong>
              </div>
            </PolicySection>

            <PolicySection number={10} id="transferencia" title="Transferência internacional de dados">
              <p>
                Alguns fornecedores de tecnologia utilizados pela Tax Innovation poderão possuir
                servidores, infraestrutura ou empresas integrantes de seu grupo econômico
                situados fora do Brasil.
              </p>
              <p>
                Nessas situações, poderá ocorrer transferência internacional de dados pessoais,
                que deverá observar os mecanismos previstos pela LGPD e pela regulamentação da ANPD.
              </p>
              <p>
                A LGPD estabelece hipóteses e garantias específicas para transferências
                internacionais, e a Resolução CD/ANPD nº 19/2024 regulamenta mecanismos como
                decisões de adequação, cláusulas-padrão contratuais e outras garantias previstas
                na legislação.
              </p>
            </PolicySection>

            <PolicySection number={11} id="conservacao" title="Por quanto tempo conservamos os dados">
              <p>
                Os dados serão mantidos apenas pelo período necessário ao cumprimento das
                finalidades para as quais foram coletados.
              </p>
              <p><strong>Como regra interna para a captação comercial:</strong></p>
              <ul>
                <li><strong>Leads que não resultarem em contratação:</strong> até 24 meses contados do último contato ou interação comercial.</li>
                <li><strong>Leads convertidos em clientes:</strong> os dados passarão a observar os prazos relacionados à relação contratual e às obrigações legais aplicáveis.</li>
              </ul>
              <p>Dados poderão ser mantidos por prazo superior quando necessário para:</p>
              <ul>
                <li>cumprimento de obrigação legal ou regulatória;</li>
                <li>exercício regular de direitos;</li>
                <li>defesa em processos;</li>
                <li>prevenção de fraudes;</li>
                <li>cumprimento de determinação de autoridade competente.</li>
              </ul>
              <p>
                Encerrada a finalidade e não existindo fundamento para conservação, os dados
                serão eliminados ou anonimizados, conforme aplicável. A LGPD prevê o encerramento
                do tratamento quando a finalidade é alcançada ou os dados deixam de ser
                necessários, admitindo conservação em hipóteses específicas previstas em lei.
              </p>
            </PolicySection>

            <PolicySection number={12} id="seguranca" title="Segurança dos dados">
              <p>
                A Tax Innovation adota ou buscará adotar medidas técnicas, administrativas e
                organizacionais razoáveis para proteger os dados pessoais contra:
              </p>
              <ul>
                <li>acesso não autorizado;</li>
                <li>perda;</li>
                <li>destruição;</li>
                <li>alteração;</li>
                <li>vazamento;</li>
                <li>divulgação indevida;</li>
                <li>tratamento inadequado ou ilícito.</li>
              </ul>
              <p>
                A LGPD exige que agentes de tratamento adotem medidas de segurança técnicas e
                administrativas adequadas desde a concepção do serviço e durante todo o tratamento.
              </p>
              <p>Nenhum sistema, contudo, é completamente imune a incidentes.</p>
              <p>
                Caso ocorra incidente de segurança que possa gerar risco ou dano relevante aos
                titulares, serão adotadas as providências exigidas pela legislação e pela
                regulamentação da ANPD. A ANPD possui regulamento específico sobre comunicação de
                incidentes de segurança.
              </p>
            </PolicySection>

            <PolicySection number={13} id="direitos" title="Direitos dos titulares">
              <p>Nos termos da LGPD, o titular poderá, quando aplicável, solicitar:</p>
              <ul>
                <li>confirmação da existência de tratamento;</li>
                <li>acesso aos seus dados;</li>
                <li>correção de dados incompletos, inexatos ou desatualizados;</li>
                <li>anonimização, bloqueio ou eliminação de dados desnecessários, excessivos ou tratados em desconformidade;</li>
                <li>portabilidade, quando aplicável e regulamentada;</li>
                <li>eliminação dos dados tratados com base em consentimento, ressalvadas as hipóteses legais de conservação;</li>
                <li>informações sobre compartilhamento de dados;</li>
                <li>informações sobre a possibilidade de não fornecer consentimento e suas consequências;</li>
                <li>revogação do consentimento;</li>
                <li>oposição a determinados tratamentos realizados sem consentimento, quando cabível.</li>
              </ul>
              <p>Esses direitos constam do art. 18 da LGPD.</p>
              <p>
                Para exercer seus direitos, o titular poderá entrar em contato pelo e-mail{" "}
                <a href={`mailto:${company.privacyEmail}`}><strong>{company.privacyEmail}</strong></a>.
              </p>
              <p>
                Poderemos solicitar informações razoáveis para confirmar a identidade do
                requerente e impedir o fornecimento indevido de dados a terceiros.
              </p>
              <p>
                O atendimento aos direitos será realizado gratuitamente e nos termos e prazos
                previstos na legislação e regulamentação aplicável.
              </p>
            </PolicySection>

            <PolicySection number={14} id="dados-sensiveis" title="Dados pessoais sensíveis">
              <p>
                Os formulários comerciais da Tax Innovation não têm como finalidade solicitar
                dados pessoais sensíveis, tais como informações sobre:
              </p>
              <ul>
                <li>origem racial ou étnica;</li>
                <li>convicção religiosa;</li>
                <li>opinião política;</li>
                <li>filiação sindical;</li>
                <li>saúde;</li>
                <li>vida sexual;</li>
                <li>dados genéticos;</li>
                <li>dados biométricos vinculados a uma pessoa natural.</li>
              </ul>
              <p>
                Solicitamos que o titular não envie espontaneamente esse tipo de informação pelos
                campos livres dos formulários, salvo se for estritamente necessário e solicitado
                por canal apropriado.
              </p>
            </PolicySection>

            <PolicySection number={15} id="criancas" title="Crianças e adolescentes">
              <p>
                Os serviços, anúncios e formulários comerciais da Tax Innovation são direcionados
                a representantes e profissionais de empresas e não têm como objetivo coletar
                intencionalmente dados pessoais de crianças.
              </p>
              <p>Caso seja identificada coleta indevida, serão adotadas as providências adequadas.</p>
              <p>
                A LGPD estabelece proteção específica ao tratamento de dados de crianças e
                adolescentes e exige que esse tratamento observe seu melhor interesse.
              </p>
            </PolicySection>

            <PolicySection number={16} id="alteracoes" title="Alterações desta Política">
              <p>Esta Política poderá ser atualizada para refletir:</p>
              <ul>
                <li>alterações legislativas ou regulatórias;</li>
                <li>mudanças nos serviços;</li>
                <li>alterações nas tecnologias utilizadas;</li>
                <li>adoção de novos fornecedores;</li>
                <li>mudanças nas práticas de tratamento de dados.</li>
              </ul>
              <p>
                A versão atualizada será disponibilizada nos canais oficiais da Tax Innovation,
                com indicação da data de atualização.
              </p>
              <p>
                Mudanças relevantes que alterem finalidades ou condições de tratamentos baseados
                em consentimento deverão ser comunicadas conforme exigido pela LGPD.
              </p>
            </PolicySection>

            <PolicySection number={17} id="contato" title="Contato">
              <div className="final-contact">
                <p>
                  Dúvidas, solicitações ou pedidos relacionados ao tratamento de dados pessoais
                  poderão ser encaminhados para:
                </p>
                <p>
                  <strong>Tax Innovation</strong><br />
                  Razão Social: {company.legalName}<br />
                  CNPJ: {company.cnpj}<br />
                  Endereço: {company.address}
                </p>
                <p><strong>Privacidade e Proteção de Dados</strong></p>
                <a className="contact-button" href={`mailto:${company.privacyEmail}`}>
                  <MailIcon />
                  {company.privacyEmail}
                </a>
              </div>
            </PolicySection>
          </article>
        </div>
      </main>

      <footer className="site-footer">
        <div className="footer-inner">
          <div>
            <Brand />
            <p>© 2026 Tax Innovation. Todos os direitos reservados.</p>
          </div>
          <a className="back-to-top" href="#topo">
            Voltar ao topo <ArrowUpIcon />
          </a>
        </div>
      </footer>
    </>
  );
}
