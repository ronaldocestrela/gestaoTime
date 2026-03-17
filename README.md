# FFC Dashboard

Sistema de gestão para clube de futebol - Dashboard com dados mocados para apresentação e demonstração.

## Tecnologias

- **React 19** + **Vite 8**
- **Tailwind CSS** (estilização)
- **React Router v7** (navegação)
- **Recharts** (gráficos)
- **Lucide React** (ícones)

## Funcionalidades

### Autenticação (demonstração)

- Tela de login com logo do clube
- Qualquer usuário/senha preenchidos permitem o acesso
- Persistência de sessão via `localStorage`
- Botão de logout na sidebar

### Painel (Dashboard principal)

- KPIs: Bilheteria, Sócios Torcedores, Atletas, Comissão Técnica
- Gráficos de área: Receita, Despesas, Sócios Ativos (12 meses)
- Tabela de produtos mais vendidos

### Elenco

- **Jogadores**: Grid com filtro por posição (Goleiros, Defensores, Meias, Atacantes)
- **Comissão técnica**: Lista de membros da comissão

### Financeiro

- **Contas a receber**: Tabela de recebíveis
- **Contas a pagar**: Tabela de contas a pagar
- **Dashboard**: KPIs financeiros, gráfico Receita vs Despesa, distribuição de receitas (donut), transações recentes

### Agenda

- **Dashboard geral**: Todos os eventos (jogos, beneficentes, internos) com filtro por data via calendário
- **Jogos**: Próximos jogos oficiais
- **Eventos beneficentes**: Ações sociais do clube
- **Eventos internos**: Treinos, reuniões, coletivas

### Outros

- Modal **Novo Comunicado** (demonstração)
- Navegação em acordeão para Elenco, Financeiro e Agenda

## Estrutura do projeto

```
src/
├── components/
│   ├── layout/
│   │   ├── MainLayout.jsx
│   │   └── Sidebar.jsx
│   └── ui/
│       ├── ChartCard.jsx
│       ├── DataTable.jsx
│       ├── KpiCard.jsx
│       └── NovoComunicadoModal.jsx
├── contexts/
│   └── AuthContext.jsx
├── data/
│   └── mockData.js
├── pages/
│   ├── Agenda.jsx
│   ├── Elenco.jsx
│   ├── Financeiro.jsx
│   ├── Login.jsx
│   └── Painel.jsx
├── App.jsx
└── main.jsx
```

## Como rodar

### Desenvolvimento

```bash
npm install
npm run dev
```

Acesse: http://localhost:5173

### Build de produção

```bash
npm run build
npm run preview
```

### Docker

```bash
docker compose up -d --build
```

Acesse: http://localhost:3000

## Credenciais (demonstração)

Qualquer usuário e senha preenchidos na tela de login permitem o acesso ao painel.

## Licença

Projeto de demonstração - uso interno.
