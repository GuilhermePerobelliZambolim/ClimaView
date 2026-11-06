# ClimaView

**Consulte o clima. Acompanhe a previsão. Planeje seu dia!**

O **ClimaView** é uma aplicação web desenvolvida para apresentar informações meteorológicas de maneira simples, intuitiva e visualmente agradável.

A aplicação permite consultar as condições climáticas de diferentes cidades, apresentando informações como temperatura atual, sensação térmica, umidade, pressão atmosférica e previsão do tempo para os próximos cinco dias.

O projeto utiliza as APIs da **Open-Meteo** para obter informações geográficas e meteorológicas em tempo real, atualizando dinamicamente os componentes conforme a cidade selecionada pelo usuário.

## Demonstração online

**[Acesse o ClimaView](https://climaview-weather.netlify.app/)**

## Preview

![ClimaView - Interface da aplicação](./docs/images.png)

## Funcionalidades

**Implementadas**

- Interface com fundo animado em degradê.
- Campo de pesquisa de cidades.
- Integração com a Geocoding API da Open-Meteo.
- Modal para seleção entre cidades encontradas.
- Consulta de informações meteorológicas por latitude e longitude.
- Integração com a Weather Forecast API da Open-Meteo.
- Card principal com informações meteorológicas dinâmicas:
  - Nome da cidade.
  - Temperatura atual.
  - Sensação térmica.
  - Umidade relativa do ar.
  - Pressão atmosférica.
  - Condição climática e emoji correspondente.
  - Data e horário.
- Previsão dinâmica para os próximos cinco dias:
  - Data formatada em português.
  - Temperaturas mínima e máxima.
  - Descrição da condição climática.
  - Emoji correspondente à previsão.
- Interpretação dos códigos meteorológicos por meio de uma função utilitária.
- Componentes reutilizáveis desenvolvidos com React.
- Comunicação entre componentes utilizando Props e callbacks.
- Gerenciamento de estados com useState.
- Estilização personalizada com Tailwind CSS.

## Planejadas

- Implementar indicador visual de carregamento durante as requisições.
- Melhorar o tratamento de erros, apresentando mensagens amigáveis ao usuário.
- Aprimorar a responsividade para dispositivos móveis.
- Realizar testes com diferentes cidades e condições climáticas.
- Refinar a experiência do usuário e os detalhes visuais da interface.
  - **Status do projeto:** em desenvolvimento. A integração com as APIs meteorológicas e a apresentação dinâmica das informações já estão implementadas. As próximas etapas estão concentradas em melhorias de experiência do usuário, responsividade e tratamento de estados.

## Tecnologias utilizadas

- **React:** construção da interface e organização dos componentes.
- **TypeScript:** tipagem estática e organização dos dados e propriedades.
- **Tailwind CSS:** estilização e construção do layout.
- **Vite:** ambiente de desenvolvimento e inicialização da aplicação.
- **Open-Meteo API:** obtenção de informações geográficas e meteorológicas.

## APIs utilizadas

- O projeto utiliza duas APIs disponibilizadas pela Open-Meteo:

**Geocoding API**

- Responsável por pesquisar cidades e retornar informações como:
  - Nome da cidade.
  - País.
  - Região ou estado.
  - Latitude.
  - Longitude.

**Weather Forecast API**

- Responsável por fornecer informações meteorológicas a partir das coordenadas geográficas selecionadas.

- Os dados utilizados incluem:
  - Temperatura atual (temperature_2m).
  - Sensação térmica (apparent_temperature).
  - Umidade relativa (relative_humidity_2m).
  - Pressão atmosférica (pressure_msl).
  - Código da condição climática (weather_code).
  - Temperaturas mínimas e máximas diárias.
  - Datas correspondentes à previsão.
- A previsão é configurada para retornar seis dias: o dia atual e os cinco dias seguintes.

## Informações meteorológicas

A aplicação foi projetada para apresentar as seguintes informações:

- Cidade: localização consultada pelo usuário.
- Temperatura atual: temperatura registrada na cidade.
- Condição climática: descrição das condições meteorológicas.
- Sensação térmica: temperatura percebida.
- Umidade: percentual de umidade do ar.
- Pressão atmosférica: pressão registrada no momento da consulta.
- Previsão para os próximos cinco dias: temperaturas mínimas e máximas e condições climáticas previstas.

## Organização dos componentes

- Header: pesquisa de cidades, consulta à Geocoding API e seleção da localização.
- Card: apresentação das condições meteorológicas atuais da cidade selecionada.
- Aside: apresentação dos cartões com a previsão dos próximos cinco dias.
- Footer: rodapé e informações do projeto.
  - Os componentes recebem informações por meio de Props, enquanto o componente principal gerencia os estados e a comunicação com a API.

## Organização dos dados
- O projeto utiliza arquivos auxiliares para organizar os tipos e as funções:
  - **types.ts:** definição dos tipos utilizados na aplicação, incluindo Cidade, DadosMeteorologicos, CardProps e PrevisaoDia.
  - **weatherUtils.ts:** função obterCondicaoClimatica(), responsável por interpretar os códigos meteorológicos da Open-Meteo e retornar a descrição e o emoji correspondentes.

## Como executar o projeto

1. Faça o download ou clone este repositório.
2. Abra a pasta do projeto no editor de código.
3. Abra o terminal na pasta do projeto.
4. Instale as dependências:
```bash
npm install
```
5. Inicie o servidor de desenvolvimento:
```bash
npm run dev
```
6. Acesse o endereço disponibilizado pelo Vite no terminal.

## Estrutura do projeto
```text
weather-app/
├── docs/
│   └── images.png
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── Aside.tsx
│   │   ├── Card.tsx
│   │   ├── Footer.tsx
│   │   └── Header.tsx
│   ├── index.css
│   ├── main.tsx
│   ├── types.ts
│   └── weatherUtils.ts
├── index.html
├── package.json
├── package-lock.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

## Objetivo do projeto

O objetivo do ClimaView é desenvolver uma aplicação meteorológica funcional, apresentando informações climáticas de maneira clara, organizada e acessível.

O projeto faz parte da minha jornada de aprendizado em desenvolvimento full-stack e surgiu da vontade de colocar em prática os conhecimentos que venho adquirindo por meio dos meus estudos, especialmente durante minha formação na **OneBitCode**, onde venho estudando os fundamentos de desenvolvimento web, React, JavaScript e outras tecnologias.

Também utilizei como referência um projeto apresentado pelo canal **DevClub | Programação**. A partir dessa referência, busquei desenvolver minha própria versão da aplicação, construindo a estrutura, os componentes e a lógica por conta própria, em vez de simplesmente reproduzir o código apresentado no vídeo.

Durante o desenvolvimento, procurei aplicar e consolidar os conhecimentos adquiridos nos estudos, especialmente:
- Desenvolvimento de interfaces com React.
- Utilização de TypeScript e tipagem de propriedades.
- Criação e reutilização de componentes.
- Gerenciamento de estados com useState.
- Comunicação entre componentes por meio de Props e callbacks.
- Consumo de APIs utilizando Fetch, Promises e async/await.
- Manipulação de arrays e objetos.
- Renderização dinâmica de componentes com map().
- Manipulação e interpretação de respostas JSON.
- Utilização de funções auxiliares para organizar a lógica da aplicação.
- Estilização de interfaces com Tailwind CSS.
  - O ClimaView também representa uma oportunidade de desenvolver habilidades importantes para minha futura atuação profissional como Desenvolvedor full-stack, especialmente raciocínio lógico, organização de código, resolução de problemas e autonomia no desenvolvimento.

**Referência de aprendizagem:** 
- Formação: **[OneBitCode](https://onebitcode.com/)**
- Canal: **DevClub | Programação**
  - Vídeo utilizado como referência: **[Assistir ao vídeo no YouTube](https://www.youtube.com/watch?v=1mm_C-t_Vyg)**

## Autor
- Guilherme Perobelli Zambolim
- [GitHub](https://github.com/GuilhermePerobelliZambolim)
