<img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" width="100%"/>

### Projeto Pokemon Center

Este é um projeto desenvolvido com as seguintes tecnologias: Next.js, TypeScript, Tailwind CSS e Axios. O projeto consome a PokeAPI para exibir informações sobre pokemons.

#### Funcionalidades

- A página inicial apresenta o título "Pokemon Center" e um link para obter informações sobre pokemons.

- A página de pokemons lista vários pokemons e oferece a opção de filtrar por nome.

- O cabeçalho inclui o logo da PokeAPI e navegação para a página inicial e a página de pokemons.

#### Tecnologias Utilizadas

- Next.js: Framework React que permite renderização do lado do servidor e geração de páginas estáticas.
- TypeScript: Linguagem de programação que adiciona tipagem estática ao JavaScript.
- Tailwind CSS: Biblioteca CSS utilitária que facilita a estilização responsiva.
- Axios: Biblioteca para fazer requisições HTTP.

#### Como Executar o Projeto

<ol>
<li>
    Clone este repositório para sua máquina local.
<li>
    Instale as dependências utilizando o comando npm install ou yarn install.
</li>
</li>
<li>
    Crie um arquivo .env.local na raiz do projeto e defina a variável de ambiente endpoint com a URL da PokeAPI.

````js
const nextConfig = {
    env: {
        endpoint: "https://pokeapi.co/api/v2/pokemon/"
    }
}
module.exports = nextConfig
````
</li>
<li>
    Execute o projeto utilizando npm run dev ou yarn dev.
</li>
<li>
    Acesse o projeto em seu navegador através de http://localhost:3000.
</li>
</ol>

### Contribuições

Contribuições, melhorias e correções de bugs são bem-vindas. Sinta-se à vontade para abrir um pull request.

- É importante ressaltar que este projeto é voltado exclusivamente para fins educacionais e de aprendizado.