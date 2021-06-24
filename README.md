# Pokepedia

Pokepedia é uma aplicação web que contém informações sobre gerações de games e pokedex com informações de pokemons.

![https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F89ea2841-2f7c-4f4a-b511-1ca2758772ad%2FUntitled.png?table=block&id=3c8c046e-8071-47fb-a378-0adef5fbec3e&spaceId=8c0d1f05-7d40-4d95-9498-8f023ed8a412&width=3810&userId=&cache=v2](https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F89ea2841-2f7c-4f4a-b511-1ca2758772ad%2FUntitled.png?table=block&id=3c8c046e-8071-47fb-a378-0adef5fbec3e&spaceId=8c0d1f05-7d40-4d95-9498-8f023ed8a412&width=3810&userId=&cache=v2)

### Instalação local

1. Faça download ou fork do repositório;
2. Instale as dependências:

    ```bash
    # Usando Yarn
    yarn install --production # Se deseja instalar as dependências de desevolvimento remova a flag --production
    yarn dev

    # Usando NPM
    npm run install --only-prod # Se deseja instalar as dependências de desevolvimento remova a flag --only-prod
    npm run dev
    ```

### Demonstração

O site pode ser localizado no link  [https://pokepedia-vue.netlify.app/](https://pokepedia-vue.netlify.app/)

### Funcionalidades da versão 1.x.x

- [x]  Exibir gerações;
- [x]  Exibir detalhes de uma determinada geração;
- [x]  Exibir pokedex;
- [x]  Exibir detalhes de um pokemon.

### Implementação para versão 2.x.x

- [x]  Exibir nome das páginas dinamicamente;
- [x]  Criar um favicon;
- [x]  Ocultar sidebar para dispositivos móveis;
- [x]  Aplicar paginação com efeito infinite-scroll na página do Pokedex;
- [x]  Aplicar tema noturno;
- [x]  (Bug 🐞) Somente imagens importadas de forma estática estão sendo adicionadas ao bundle;
- [x]  Internacionalização (i18n);
