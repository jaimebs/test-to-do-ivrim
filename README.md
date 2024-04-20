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
