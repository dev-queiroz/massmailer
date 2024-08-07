# MassMailer

## Descrição

*"MassMailer é uma solução de **automação de e-mails** projetada para **empresas** e **desenvolvedores** que precisam enviar mensagens personalizadas para uma lista de contatos de e-mails. Com suporte para múltiplos bancos de dados **relacionais** (separados por repositórios) e uma configuração simples, MassMailer facilita o envio de e-mails em massa utilizando templates HTML personalizados."*

### Principais Funcionalidades

- **Envio de E-mails em Massa**: Envie e-mails personalizados para todos os contatos de uma lista com um único clique.
- **Templates Personalizáveis**: Utilize templates HTML fixos para garantir uma apresentação profissional e consistente.
- **Integração Flexível**: Suporte para diversos bancos de dados relacionais, permitindo fácil adaptação ao seu ambiente existente.
- **Fácil Configuração**: Gerencie todas as configurações através de um simples arquivo .env.

## Como Funciona

O MassMailer se conecta ao seu banco de dados, através do arquivo ".env" recupera uma lista de endereços de e-mail e envia um template para todos os contatos, utilizando um template HTML definido dentro da pasta "templates".

## Requisitos

- Node.js;
- Banco de dados relacional;
- Conta Gmail (para envio de e-mails).

## Configuração

1. ### Clonar o Repositório:

    ```bash
    git clone https://github.com/dev-queiroz/massmailer.git
    cd massmailer
    ```

2. ### Instalar Dependências:

    ```bash
    npm install
    ```

3. ### Configurar o .env:

    No arquivo ".env" na raiz do projeto, configure as seguintes variáveis de ambiente:
    
    - #### Para MySQL:

        ```ini
        # Configurações de e-mail
        EMAIL=your-email@gmail.com
        APP_PASSWORD=your-app-password
        EMAIL_SUBJECT=Your Email Subject
        EMAIL_TEMPLATE_FILE=example_template.html

        # Configurações MySQL
        MYSQL_HOST=localhost
        MYSQL_USER=root
        MYSQL_PASSWORD=password
        MYSQL_DATABASE=your_database
        MYSQL_TABLE=users
        MYSQL_EMAIL_COLUMN=email
        ```

    - #### Para Postgree:

        ```ini
        # Configurações de e-mail
        EMAIL=your-email@gmail.com
        APP_PASSWORD=your-app-password
        EMAIL_SUBJECT=Your Email Subject
        EMAIL_TEMPLATE_FILE=example_template.html

        # Configurações PostgreSQL
        PG_USER=user
        PG_HOST=localhost
        PG_DATABASE=your_database
        PG_PASSWORD=password
        PG_PORT=5432
        PG_TABLE=users
        PG_EMAIL_COLUMN=email

        ```

4. #### Adicionar Template de E-mail:

    Coloque seu template de e-mail em HTML na pasta "templates" e nomeie-o conforme especificado no ".env".

5. #### Executar o Servidor:

    ```bash
    node app.js
    ```

## Como funciona?

O MassMailer irá se conectar ao seu banco de dados, recuperar os e-mails dos contatos e enviar o template especificado para todos os destinatários.

### Sobre Dúvidas nas Variáveis de Ambiente (.env):

*As variáveis de ambiente são utilizadas para configurar o comportamento do MassMailer. Abaixo, explicamos cada uma delas:*

#### Configurações de E-mail:

- **EMAIL**: O endereço de e-mail do remetente. Utilize um e-mail do Gmail para enviar as mensagens.
- **APP_PASSWORD**: A senha de aplicativo do Gmail, compatível com o e-mail, necessária para autenticação segura.
- **EMAIL_SUBJECT**: O assunto do e-mail a ser enviado.
- **EMAIL_TEMPLATE_FILE**: O nome template HTML localizado na pasta "templates" (corpo do e-mail).

#### Configurações MySQL:

- **MYSQL_HOST**: O host do servidor MySQL.
- **MYSQL_USER**: O nome do usuário do banco de dados MySQL.
- **MYSQL_PASSWORD**: A senha do usuário do banco de dados MySQL.
- **MYSQL_DATABASE**: O nome do banco de dados onde a tabela de contatos está armazenada.
- **MYSQL_TABLE**: O nome da tabela no banco de dados que contém os endereços de e-mail.
- **MYSQL_EMAIL_COLUMN**: O nome da coluna na tabela que contém os endereços de e-mail dos destinatários.

#### Configurações PostgreSQL:

- **PG_USER**: O usuário do banco de dados PostgreSQL.
- **PG_HOST**: O host do servidor PostgreSQL.
- **PG_DATABASE**: O nome do banco de dados onde a tabela de contatos está armazenada.
- **PG_PASSWORD**: A senha do usuário do banco de dados PostgreSQL.
- **PG_PORT**: A porta do servidor PostgreSQL.
- **PG_TABLE**: O nome da tabela no banco de dados que contém os endereços de e-mail.
- **PG_EMAIL_COLUMN**: O nome da coluna na tabela que contém os endereços de e-mail dos destinatários.

## Exemplo de Uso.

Configure as credenciais de e-mail e as informações do banco de dados no ".env".
Adicione seu template HTML na pasta templates.
Execute o servidor com `npm run start` ou `node app.js`.

## Por Que Adquirir o MassMailer?

- **Simplicidade e Eficácia**: Ideal para empresas que precisam de uma solução rápida para envios de e-mails, sem que haja necessidade de interface gráfica para a manipulação.
- **Flexibilidade**: Suporte para múltiplos bancos de dados relacionais, permitindo a integração com a maioria dos sistemas utilizados em empresas com alto nível de integridade de dados.
- **Escalabilidade**: Capacidade de lidar com grandes volumes de e-mails, garantindo que sua mensagem chegue a todos os contatos, com a menor das possibilidades de que o e-mail seja interpretado como "spam".

## Disponibilidade e Licenciamento!

O MassMailer está disponível para aquisição. Este software não é de código aberto e, portanto, não está licenciado sob nenhuma licença de código livre. A compra do software concede ao comprador o direito de uso, mas o código-fonte não pode ser redistribuído, modificado ou compartilhado sem autorização prévia.

Para mais informações sobre como adquirir o MassMailer, entre em contato com `dev.queiroz05@gmail.com`.