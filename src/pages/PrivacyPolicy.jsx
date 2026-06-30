import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div 
      style={{ 
        backgroundColor: 'var(--zf-background-secondary)',
        position: 'absolute', 
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        overflowX: 'hidden',
        overflowY: 'auto' 
      }}
    >
      <div 
        style={{ 
          width: '100%', 
          maxWidth: '75%', 
          minWidth: '25%', 
          margin: '0 auto', 
          padding: '3rem 4rem',
          textAlign: 'left',
          minHeight: '100%', 
          borderLeft: '4px solid rgba(0, 0, 0, 0.1)', 
          borderRight: '4px solid rgba(0, 0, 0, 0.1)',
        }}
      >
        <h1 className="page-title text-center mb-3">Política de Privacidade</h1>
        
        <section className="mb-2">
          <h2>1. Introdução e Adequação à LGPD</h2>
          <p>
            A Zênite Tecnologia tem o compromisso de proteger a privacidade e os dados pessoais de nossos clientes e visitantes, em conformidade com a Lei Geral de Proteção de Dados Pessoais (LGPD - Lei nº 13.709/2018). Esta política descreve como coletamos, usamos, armazenamos e protegemos suas informações.
          </p>
        </section>

        <section className="mb-2">
          <h2>2. Coleta de Dados Pessoais</h2>
          <p>
            Coletamos dados estritamente necessários para a execução de nossos serviços e para melhorar a sua experiência. Os dados coletados podem incluir, mas não se limitam a: nome, e-mail, telefone e informações de contato corporativo. A coleta ocorre apenas quando fornecida voluntariamente pelo usuário através de formulários, cadastros ou contato direto.
          </p>
        </section>

        <section className="mb-2">
          <h2>3. Uso da API do WhatsApp da Meta</h2>
          <p>
            Em algumas de nossas comunicações e prestação de serviços, utilizamos a API oficial do WhatsApp, fornecida pela Meta Platforms, Inc. Ao entrar em contato conosco por este canal, as informações trocadas serão processadas através dessa infraestrutura. Ressaltamos que o uso obedece tanto aos termos de privacidade da Meta quanto aos nossos rigorosos padrões de confidencialidade estabelecidos por esta política.
          </p>
        </section>

        <section className="mb-2">
          <h2>4. Uso de Cookies e Tecnologias de Rastreamento</h2>
          <p>
            Utilizamos <em>cookies</em> para personalizar a sua navegação, analisar o tráfego do nosso site e garantir o funcionamento correto da plataforma. Os cookies permitem entender as preferências dos usuários e otimizar a usabilidade. Você pode configurar ou desabilitar a coleta de cookies diretamente pelas configurações do seu navegador a qualquer momento.
          </p>
        </section>

        <section className="mb-2">
          <h2>5. Direitos dos Titulares</h2>
          <p>
            Conforme previsto pela LGPD, você, como titular dos dados, possui direitos fundamentais e pode exercê-los a qualquer momento, incluindo:
          </p>
          <ul>
            <li>Confirmação da existência de tratamento de dados;</li>
            <li>Acesso imediato aos dados armazenados;</li>
            <li>Correção de dados incompletos, inexatos ou desatualizados;</li>
            <li>Anonimização, bloqueio ou eliminação de dados desnecessários ou excessivos;</li>
            <li>Revogação do consentimento para tratamento de dados a qualquer momento.</li>
          </ul>
        </section>

        <section className="mb-2">
          <h2>6. Contato da Empresa</h2>
          <p>
            Se você tiver dúvidas, solicitações ou desejar exercer seus direitos em relação aos seus dados pessoais, entre em contato conosco pelos canais abaixo:
          </p>
          <div className="notice" style={{ marginTop: '1rem' }}>
            <ul style={{ listStyleType: 'none', padding: 0 }}>
                <li><strong>Razão Social:</strong> ZENITE TECNOLOGIA LTDA</li>
                <li><strong>CNPJ:</strong> 60.935.686/0001-34</li>
                <li><strong>E-mail:</strong> DOUGLAS.CASTRO@ZENITETECNOLOGIA.COM</li>
                <li><strong>Telefone:</strong> (37) 9965-4512</li>
                <li><strong>Endereço Sede:</strong> R NOVE, 120, FUNDOS, BURITIS, MOEMA - MG, CEP 35.604-000</li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicy;