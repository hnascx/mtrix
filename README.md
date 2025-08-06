Preciso criar um sistema de compra de ingressos que contenha três páginas: lista de eventos, checkout e confirmação de compra.

A página de lista de eventos deve conter:

- Imagem do evento
- Título do evento
- Descrição do evento
- Data do evento
- Local do evento
- Preço do ingresso
- Tag de categoria do evento
- Botão de compra

O página de checkout deve conter:

- Botão de voltar para a lista de eventos
- CPF do comprador
- Nome do comprador
- Email do comprador
- Telefone do comprador
- Endereço do comprador
- CEP do comprador
- Meio de pagamento
- Lista de ingressos selecionados com imagem, nome, quantidade, data, local, preço e subtotal
- Botão de finalizar compra

A página de confirmação de compra deve conter:

- Texto de confirmação de compra com o nome do comprador, lista de ingressos comprados com imagem, nome, quantidade, data, local, preço e subtotal e meio de pagamento selecionado
- Botão de voltar para a lista de eventos

Tecnologias:

Front-end: Next.js
Estilização: Material UI
Back-end: Nest.js
Banco de dados: PostgreSQL 
Validação de Dados: Zod
ORM: Prisma
Ferramentas: Dockerfile e Docker Compose
Testes: Jest
Design System: Storybook
Gerenciador de pacotes: pnpm
Documentação da API: README.md

Considerações:

* Preciso que ao rodar o back-end, o banco seja populado com 20 registros de eventos.
* Não é necessário se preocupar com escalabilidade, é um teste técnico para uma vaga de Desenvolvedor Fullstack Jr.
* Não é necessário integração com gateway de pagamento. Gostaria que apenas fosse feita a simulação desse fluxo da seguinte forma: A forma de pagamento é selecionada no checkout e exibida na página de confirmação de compra.
* Não é necessário painel administrativo para gerenciar os eventos uma vez que o banco já esteja populado com os 20 registros de eventos.
* Não há necessidade de atribuir uma quantidade total de ingressos disponíveis em cada evento, mas não deve ser possível comprar mais de 4 ingressos de um mesmo evento.
* Não há necessidade de implementar sistema de fila.
* Não há requisitos específicos de SEO a princípio.
* Não é necessário implementar autenticação de usuários. Sendo a home da aplicação a listagem de eventos disponíveis para compra.
* Não é necessário se preocupar com estratégia de renderização do Front-end a princípio.
* Deve ser criado um monolito simples no Back-end invés de uma abordagem de microsserviços.
* Não é necessário adicionar o Redis para lidar com gerenciamento de sessões e cache de dados.
* Para gestão de estado no Front-end podemos utilizar React Context API pois a gestão de estados é simples.
* As imagens dos eventos podem ficar armazenadas dentro do próprio banco de dados a princípio.
* Gostaria que sempre especificasse o diretório para a criação de arquivos.
* Gostaria que sempre sinalizasse o momento adequado para realizar o commit das alterações realizadas e me desse também uma sugestão de mensagem para esse commit.

OBS: Gostaria que não ficasse evidente que o código foi desenvolvido com ajuda de IA e que me respondesse apenas em português. Você pode também me fornecer sugestões de melhoria durante o desenvolvimento quando for pertinente.