# DashBoard

Prototipo de dashboard administrativo em Angular, com graficos interativos (linha, barras, doughnut e combinados) feitos com Highcharts. Os dados sao mockados no proprio componente - o foco do projeto e a camada de visualizacao e a integracao com a biblioteca de graficos.

## Stack

- Angular 17
- Highcharts + highcharts-angular
- Bootstrap 5
- TypeScript
## Estrutura

- src/app/modules/dashboard - telas do dashboard (first, second e third-dashboard)
- src/app/modules/grafico - componentes de grafico reutilizaveis
- src/app/modules/shared - componentes e servicos compartilhados
## Como rodar

```
npm install
ng serve
```

Acesse http://localhost:4200

## Testes

```
ng test
```

## Proximos passos

- Trocar os dados mockados por uma API real
- Adicionar filtros de periodo nos graficos
- Melhorar a responsividade para mobile
