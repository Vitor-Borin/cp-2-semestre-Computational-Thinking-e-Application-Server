# Projeto de Requisição API - JSONPlaceholder

Este projeto é uma página web simples que faz uma requisição HTTP para a API JSONPlaceholder e exibe os dados de usuários recebidos.

## Como Rodar o Projeto

1. Baixe a pasta "cp02 Computational Thinking e Application-Server" do repositório.
2. Abra o arquivo `index.html` em um navegador web moderno (como Chrome, Firefox, ou Edge).
3. Use o campo de entrada ao lado do botão "Buscar Dados do Usuário" para especificar o ID do usuário (1-10).
4. Clique no botão "Buscar Dados do Usuário" para fazer a requisição à API e ver os resultados.
5. Use o botão "Limpar Formulário" para resetar os campos e o resultado.

## Desenvolvimento e Raciocínio Lógico

O projeto foi desenvolvido seguindo estas etapas e decisões técnicas:

1. **Estrutura HTML**: Criamos um formulário com campos para exibir os dados do usuário, um campo de entrada para o ID do usuário, e botões para buscar dados e limpar o formulário.

2. **Estilização CSS**: Utilizamos CSS interno para estilizar a página, tornando-a visualmente agradável.

3. **JavaScript e Fetch API**: Escolhemos a Fetch API para fazer a requisição HTTP devido à sua simplicidade e modernidade.

4. **Manipulação do DOM**: Usamos JavaScript para manipular o DOM, preenchendo os campos do formulário e exibindo o JSON completo.

5. **Tratamento de Erros**: Implementamos tratamento de erros para melhorar a experiência do usuário em caso de falhas na requisição.

6. **Funcionalidades Extras**: Adicionamos a capacidade de buscar diferentes usuários por ID e limpar o formulário para maior interatividade.

## Contribuições dos Membros

- **Vitor Borin - RM: 558643**: 
  - Criação da estrutura inicial do projeto
  - Implementação da função de busca de dados da API
  - Desenvolvimento do layout básico da página

- **Jenifer Souza - RM: 558047**: 
  - Implementação da funcionalidade de limpar formulário
  - Adição da exibição do JSON completo
  - Melhorias no estilo e layout da página

- **Henrique Santos - RM: 554666**: 
  - Adição da funcionalidade de buscar usuário por ID
  - Implementação do tratamento de erros
  - Melhorias no estilo e layout da página

Todos os membros contribuíram ativamente com revisões de código, resolução de conflitos e melhorias incrementais ao longo do desenvolvimento do projeto.

## Como o Código Funciona

1. Quando a página é carregada, event listeners são adicionados aos botões "Buscar Dados do Usuário" e "Limpar Formulário".
2. Ao clicar no botão de busca, a função `fetchUserData` é acionada, fazendo uma requisição GET à API JSONPlaceholder com o ID do usuário especificado.
3. A resposta da API é convertida para JSON.
4. Os dados recebidos são usados para preencher os campos do formulário na página usando a função `populateForm`.
5. O JSON completo da resposta é exibido em uma área separada abaixo do formulário usando a função `displayJsonResult`.
6. Em caso de erro na requisição, uma mensagem de alerta é exibida ao usuário.
7. O botão "Limpar Formulário" aciona a função `clearForm`, que reseta todos os campos e a área de exibição do JSON.

Este projeto demonstra o uso de HTML, CSS e JavaScript para interagir com uma API externa e manipular dados dinamicamente em uma página web, proporcionando uma experiência interativa ao usuário.
