# Teste Prático em Node.js com TypeScript

## Objetivo:

O objetivo deste teste é avaliar suas habilidades como programador full stack utilizando as tecnologias Node.js, TypeScript e React.js. O teste consiste em utilizar um layout de lista de tarefas (Todo List) no formato Kanban, pré-desenvolvido em React.js, e criar o back-end em Node.js para implementar funcionalidades de adicionar, atualizar e excluir tarefas.

## Instruções:

Neste teste, você receberá um layout de front-end pré-desenvolvido em React.js que representa uma lista de tarefas no formato Kanban, com colunas para tarefas "A Fazer", "Em Progresso" e "Concluído". Sua tarefa é criar o back-end em Node.js, e implementar as funcionalidades de adicionar, editar e excluir tarefas.

## Requisitos:

- Criar uma API RESTful em Node.js com TypeScript para gerenciar as tarefas;
- Utilizar um ORM para persistir os dados no banco de dados (MySQL, PostgreSQL ou MongoDB);
- Implementar as funcionalidades de listar, adicionar, atualizar e excluir tarefas;
- Defina os seguintes campos para cada tarefa: id, título, descrição, status (A Fazer, Em Progresso ou Concluído) e data de criação;

## Front-End (React.js):

- Utilize o layout fornecido para criar uma interface de usuário onde as tarefas são exibidas no formato Kanban.
- Conecte o front-end ao back-end para realizar operações CRUD nas tarefas.
- Implemente a funcionalidade de editar tarefas, permitindo que o usuário modifique o título, descrição e status da tarefa.
- Implemente a funcionalidade de excluir tarefas.

## Critérios de Avaliação:

- Integração correta entre front-end e back-end.
- Funcionalidade completa de adicionar, editar e excluir tarefas.
- Criação de testes unitários no back-end para as funcionalidades principais, utilizando o framework Jest.
- Manipulação adequada das requisições e respostas entre as camadas front-end e back-end.
- Código limpo e organizado.
- Utilização de boas práticas de programação.

#

# Documentação do Projeto Back-end - CRUD de Tarefas

Este projeto back-end consiste em um CRUD (Create, Read, Update, Delete) de tarefas, onde cada tarefa possui um título, descrição e status. A estrutura do projeto está organizada em pastas, cada uma com sua responsabilidade. Siga as instruções abaixo para configurar e executar o projeto corretamente.

## Configuração

Abra o terminal na pasta do projeto e execute o seguinte comando para instalar as dependências necessárias:

```shell
npm install
```

### Configuração do arquivo .env

Antes de executar o projeto, é necessário configurar o arquivo .env na raiz do projeto. Este arquivo contém variáveis de ambiente necessárias para o funcionamento correto do sistema. Siga as etapas abaixo:

1. Na raiz do projeto, crie um arquivo chamado .env.
2. Abra o arquivo .env.example fornecido e copie o conteúdo.
3. Cole o conteúdo no arquivo .env recém-criado.
4. Preencha os campos no arquivo .env com as informações apropriadas, como banco de dados, chaves de acesso, etc.

## Executando o Projeto

Após a configuração do arquivo .env, você está pronto para executar o projeto. No terminal, execute o seguinte comando:

```shell
npm run dev
```

O projeto será executado na porta 3333.

## Endpoints para Teste

Aqui estão os endpoints disponíveis para testar o CRUD de tarefas:

**GET:** http://localhost:3333/tasks

Retorna todas as tarefas cadastradas.

**POST:** http://localhost:3333/tasks

Cria uma nova tarefa. Envie os dados da tarefa no corpo da solicitação.

**PUT:** http://localhost:3333/tasks?status=A%20Fazer

Atualiza s tarefa com o status "A Fazer". Substitua "A Fazer" pelo status desejado.

**DELETE:** http://localhost:3333/tasks/:id

Deleta a tarefa com o ID fornecido. Substitua ":id" pelo ID numérico da tarefa a ser excluída.

Certifique-se de substituir ":id" pelos valores apropriados ao usar o endpoint DELETE.

#

# Documentação do Projeto Front-end - Kanban de Tarefas

Este projeto front-end consiste em um Kanban de tarefas, onde você pode criar, arrastar, editar e excluir tarefas. Antes de executar o projeto, certifique-se de ter o back-end em execução. Siga as instruções abaixo para configurar e executar o projeto corretamente.

## Configuração

Abra o terminal na pasta do projeto e execute o seguinte comando para instalar as dependências necessárias:

```shell
npm install
```

## Executando o Projeto

Após a instalação das dependências, execute o seguinte comando no terminal:

```shell
npm run dev
```

O projeto front-end será executado e estará disponível na seguinte URL: [http://localhost:5173/](http://localhost:5173/).

## Uso do Kanban de Tarefas

Após acessar a URL mencionada acima, você poderá interagir com o Kanban de Tarefas. Aqui estão algumas funcionalidades disponíveis:

- **Criar uma Tarefa:** Clique no botão "Adicionar Tarefa" ou em um local apropriado no Kanban para criar uma nova tarefa. Preencha os detalhes da tarefa, como título, descrição e status.

- **Arrastar Tarefas:** As tarefas podem ser arrastadas de uma coluna para outra para refletir seu progresso. Basta clicar na tarefa e arrastá-la para a coluna desejada.

- **Editar uma Tarefa:** Para editar os detalhes de uma tarefa, clique no ícone de edição na tarefa desejada e faça as alterações necessárias nos campos disponíveis.

- **Deletar uma Tarefa:** Para excluir uma tarefa, clique no ícone de lixeira associado à tarefa que deseja remover.
