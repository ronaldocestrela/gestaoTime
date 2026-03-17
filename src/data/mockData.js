// KPIs principais (Painel)
export const kpiData = {
  bilheteria: { label: 'BILHETERIA', value: 'R$ 150K' },
  sociosTorcedores: { label: 'SÓCIOS TORCEDORES', value: '500' },
  atletas: { label: 'ATLETAS', value: '35' },
  comissaoTecnica: { label: 'COMISSÃO TÉCNICA', value: '48' },
};

// Dados mensais para gráficos (12 meses)
const meses = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'];

export const revenueData = meses.map((mes, i) => ({
  mes,
  valor: 120000 + Math.sin(i * 0.5) * 40000 + i * 8000,
}));

export const expensesData = meses.map((mes, i) => ({
  mes,
  valor: 90000 + Math.cos(i * 0.4) * 25000 + i * 5000,
}));

export const activeMembersData = meses.map((mes, i) => ({
  mes,
  valor: 380 + Math.sin(i * 0.3) * 80 + i * 12,
}));

// Produtos mais vendidos
export const topProducts = [
  { id: 1, nome: 'Camisa Oficial 2025', quantidade: 450, receita: 67500 },
  { id: 2, nome: 'Boné FFC', quantidade: 320, receita: 9600 },
  { id: 3, nome: 'Caneca Oficial', quantidade: 280, receita: 8400 },
  { id: 4, nome: 'Cachecol', quantidade: 195, receita: 9750 },
  { id: 5, nome: 'Chaveiro', quantidade: 180, receita: 2700 },
];

// Jogadores do elenco
export const players = [
  { id: 1, nome: 'Carlos Eduardo Silva', numero: 1, posicao: 'Goleiro', idade: 28, nacionalidade: 'Brasil', jogos: 42, gols: 0, assistencias: 0 },
  { id: 2, nome: 'Rafael Santos', numero: 12, posicao: 'Goleiro', idade: 24, nacionalidade: 'Brasil', jogos: 8, gols: 0, assistencias: 0 },
  { id: 3, nome: 'Marcos Paulo', numero: 2, posicao: 'Lateral Direito', idade: 26, nacionalidade: 'Brasil', jogos: 38, gols: 2, assistencias: 8 },
  { id: 4, nome: 'Lucas Oliveira', numero: 4, posicao: 'Zagueiro', idade: 29, nacionalidade: 'Brasil', jogos: 45, gols: 3, assistencias: 1 },
  { id: 5, nome: 'Bruno Ferreira', numero: 5, posicao: 'Zagueiro', idade: 27, nacionalidade: 'Brasil', jogos: 40, gols: 1, assistencias: 2 },
  { id: 6, nome: 'Alan Rilbert', numero: 6, posicao: 'Lateral Esquerdo', idade: 25, nacionalidade: 'Brasil', jogos: 35, gols: 0, assistencias: 5 },
  { id: 7, nome: 'Vitinho', numero: 7, posicao: 'Meia', idade: 30, nacionalidade: 'Brasil', jogos: 42, gols: 8, assistencias: 12 },
  { id: 8, nome: 'Lucaneta', numero: 8, posicao: 'Volante', idade: 28, nacionalidade: 'Brasil', jogos: 39, gols: 2, assistencias: 6 },
  { id: 9, nome: 'Thiago Galhardo', numero: 10, posicao: 'Meia', idade: 26, nacionalidade: 'Brasil', jogos: 44, gols: 15, assistencias: 10 },
  { id: 10, nome: 'Gustavo Lima', numero: 11, posicao: 'Ponta', idade: 23, nacionalidade: 'Brasil', jogos: 41, gols: 12, assistencias: 9 },
  { id: 11, nome: 'André Martins', numero: 9, posicao: 'Atacante', idade: 27, nacionalidade: 'Brasil', jogos: 43, gols: 18, assistencias: 4 },
  { id: 12, nome: 'Felipe Ribeiro', numero: 17, posicao: 'Atacante', idade: 22, nacionalidade: 'Brasil', jogos: 36, gols: 10, assistencias: 3 },
  { id: 13, nome: 'João Pedro', numero: 13, posicao: 'Lateral Direito', idade: 21, nacionalidade: 'Brasil', jogos: 15, gols: 0, assistencias: 2 },
  { id: 14, nome: 'Mateus Silva', numero: 15, posicao: 'Volante', idade: 24, nacionalidade: 'Brasil', jogos: 28, gols: 1, assistencias: 4 },
  { id: 15, nome: 'Thiago Mendes', numero: 19, posicao: 'Meia', idade: 29, nacionalidade: 'Brasil', jogos: 33, gols: 5, assistencias: 7 },
  { id: 16, nome: 'Eduardo Pereira', numero: 20, posicao: 'Ponta', idade: 25, nacionalidade: 'Brasil', jogos: 30, gols: 7, assistencias: 6 },
  { id: 17, nome: 'Gabriel Torres', numero: 21, posicao: 'Atacante', idade: 20, nacionalidade: 'Colômbia', jogos: 18, gols: 4, assistencias: 2 },
  { id: 18, nome: 'Rodrigo Andrade', numero: 22, posicao: 'Zagueiro', idade: 26, nacionalidade: 'Brasil', jogos: 25, gols: 0, assistencias: 1 },
  { id: 19, nome: 'Vinícius Costa', numero: 23, posicao: 'Lateral Esquerdo', idade: 23, nacionalidade: 'Brasil', jogos: 12, gols: 0, assistencias: 1 },
  { id: 20, nome: 'Leonardo Gomes', numero: 14, posicao: 'Meia', idade: 19, nacionalidade: 'Brasil', jogos: 10, gols: 1, assistencias: 0 },
];

// Comissão técnica
export const comissaoTecnica = [
  { id: 1, nome: 'João Silva', cargo: 'Treinador Principal', idade: 52, nacionalidade: 'Brasil', desde: '2023-01' },
  { id: 2, nome: 'Pedro Santos', cargo: 'Assistente Técnico', idade: 45, nacionalidade: 'Brasil', desde: '2023-01' },
  { id: 3, nome: 'Marcos Oliveira', cargo: 'Preparador Físico', idade: 38, nacionalidade: 'Brasil', desde: '2022-07' },
  { id: 4, nome: 'Carlos Mendes', cargo: 'Treinador de Goleiros', idade: 48, nacionalidade: 'Brasil', desde: '2023-06' },
  { id: 5, nome: 'Ricardo Ferreira', cargo: 'Analista de Performance', idade: 35, nacionalidade: 'Brasil', desde: '2024-01' },
];

// Transações financeiras
export const financialTransactions = [
  { id: 1, data: '2025-03-15', descricao: 'Venda ingressos - Jogo 15/03', categoria: 'Bilheteria', valor: 45000, status: 'Recebido' },
  { id: 2, data: '2025-03-14', descricao: 'Mensalidade sócios', categoria: 'Associados', valor: 125000, status: 'Recebido' },
  { id: 3, data: '2025-03-13', descricao: 'Pagamento folha', categoria: 'Salários', valor: -280000, status: 'Pago' },
  { id: 4, data: '2025-03-12', descricao: 'Patrocínio - Empresa X', categoria: 'Patrocínio', valor: 50000, status: 'Recebido' },
  { id: 5, data: '2025-03-11', descricao: 'Loja oficial', categoria: 'Loja', valor: 18200, status: 'Recebido' },
  { id: 6, data: '2025-03-10', descricao: 'Manutenção CT', categoria: 'Infraestrutura', valor: -15000, status: 'Pago' },
  { id: 7, data: '2025-03-09', descricao: 'Aluguel estádio', categoria: 'Operacional', valor: -35000, status: 'Pago' },
  { id: 8, data: '2025-03-08', descricao: 'Venda ingressos - Jogo 08/03', categoria: 'Bilheteria', valor: 38500, status: 'Recebido' },
  { id: 9, data: '2025-03-07', descricao: 'Material esportivo', categoria: 'Operacional', valor: -22000, status: 'Pago' },
  { id: 10, data: '2025-03-06', descricao: 'Direitos de transmissão', categoria: 'Mídia', valor: 75000, status: 'Recebido' },
  { id: 11, data: '2025-03-05', descricao: 'Energia e água', categoria: 'Infraestrutura', valor: -8500, status: 'Pago' },
  { id: 12, data: '2025-03-04', descricao: 'Inadimplência sócios', categoria: 'Associados', valor: -12500, status: 'Pendente' },
  { id: 13, data: '2025-03-03', descricao: 'Seguro do elenco', categoria: 'Operacional', valor: -18000, status: 'Pago' },
  { id: 14, data: '2025-03-02', descricao: 'Venda ingressos - Jogo 02/03', categoria: 'Bilheteria', valor: 52000, status: 'Recebido' },
  { id: 15, data: '2025-03-01', descricao: 'Cota TV', categoria: 'Mídia', valor: 95000, status: 'Recebido' },
];

// Distribuição de receitas (para gráfico donut)
export const revenueBreakdown = [
  { nome: 'Bilheteria', valor: 450000, cor: '#006B3F' },
  { nome: 'Sócios', valor: 380000, cor: '#00A86B' },
  { nome: 'Patrocínio', valor: 520000, cor: '#FF6B6B' },
  { nome: 'Loja', valor: 125000, cor: '#4CAF50' },
  { nome: 'Mídia', valor: 280000, cor: '#2196F3' },
];

// Contas a receber
export const contasReceber = [
  { id: 1, descricao: 'Mensalidade sócios - março', valor: 125000, vencimento: '2025-03-20', status: 'A receber' },
  { id: 2, descricao: 'Patrocínio Empresa X', valor: 50000, vencimento: '2025-03-25', status: 'A receber' },
  { id: 3, descricao: 'Cota TV - 2º trimestre', valor: 95000, vencimento: '2025-04-01', status: 'A receber' },
  { id: 4, descricao: 'Direitos de imagem', valor: 35000, vencimento: '2025-04-15', status: 'A receber' },
  { id: 5, descricao: 'Venda ingressos - próximo jogo', valor: 45000, vencimento: '2025-03-22', status: 'A receber' },
];

// Contas a pagar
export const contasPagar = [
  { id: 1, descricao: 'Folha de pagamento', valor: 280000, vencimento: '2025-03-25', status: 'A pagar' },
  { id: 2, descricao: 'Aluguel estádio', valor: 35000, vencimento: '2025-03-28', status: 'A pagar' },
  { id: 3, descricao: 'Material esportivo', valor: 22000, vencimento: '2025-04-05', status: 'A pagar' },
  { id: 4, descricao: 'Seguro do elenco', valor: 18000, vencimento: '2025-04-10', status: 'A pagar' },
  { id: 5, descricao: 'Energia e água', valor: 8500, vencimento: '2025-04-12', status: 'A pagar' },
  { id: 6, descricao: 'Manutenção CT', valor: 15000, vencimento: '2025-04-15', status: 'A pagar' },
];

// KPIs financeiros
export const financialKpis = {
  receitaTotal: { label: 'Receita Total', value: 'R$ 1.755M' },
  despesaTotal: { label: 'Despesa Total', value: 'R$ 1.398M' },
  saldo: { label: 'Saldo', value: 'R$ 357K' },
  inadimplencia: { label: 'Inadimplência', value: 'R$ 12,5K' },
};

// Próximos jogos
export const matches = [
  { id: 1, adversario: 'Avaí', data: '2025-03-22', hora: '16:00', local: 'Florianópolis', competicao: 'Campeonato Catarinense' },
  { id: 2, adversario: 'Chapecoense', data: '2025-03-26', hora: '19:30', local: 'Chapecó', competicao: 'Campeonato Catarinense' },
  { id: 3, adversario: 'Criciúma', data: '2025-03-30', hora: '16:00', local: 'Florianópolis', competicao: 'Série B' },
  { id: 4, adversario: 'Brusque', data: '2025-04-05', hora: '18:00', local: 'Brusque', competicao: 'Série B' },
  { id: 5, adversario: 'Joinville', data: '2025-04-12', hora: '16:00', local: 'Florianópolis', competicao: 'Série B' },
  { id: 6, adversario: 'São José', data: '2025-04-19', hora: '19:00', local: 'São José', competicao: 'Campeonato Catarinense' },
  { id: 7, adversario: 'Londrina', data: '2025-04-26', hora: '16:00', local: 'Florianópolis', competicao: 'Série B' },
  { id: 8, adversario: 'CRB', data: '2025-05-03', hora: '18:00', local: 'Maceió', competicao: 'Série B' },
];

// Eventos beneficentes
export const eventosBeneficentes = [
  { id: 1, titulo: 'Jogo solidário - Campanha do agasalho', data: '2025-03-28', hora: '15:00', local: 'Estádio FFC', descricao: 'Arrecadação de roupas para famílias carentes' },
  { id: 2, titulo: 'Clinica de futebol para crianças', data: '2025-04-05', hora: '09:00', local: 'CT FFC', descricao: 'Ação social com crianças da comunidade' },
  { id: 3, titulo: 'Feijoada Beneficente', data: '2025-04-12', hora: '12:00', local: 'Sede social', descricao: 'Revertido para instituição de caridade' },
  { id: 4, titulo: 'Doação de sangue - Torcida Verde', data: '2025-04-20', hora: '08:00', local: 'Hemosc', descricao: 'Campanha de doação em parceria com Hemosc' },
  { id: 5, titulo: 'Leilão de camisas autografadas', data: '2025-05-01', hora: '19:00', local: 'Online', descricao: 'Recursos para projeto social' },
];

// Eventos internos do clube (treinos, reuniões, etc)
export const events = [
  { id: 1, titulo: 'Treino tático', data: '2025-03-17', tipo: 'Treino', local: 'CT FFC' },
  { id: 2, titulo: 'Treino físico', data: '2025-03-18', tipo: 'Treino', local: 'CT FFC' },
  { id: 3, titulo: 'Reunião comissão', data: '2025-03-18', tipo: 'Reunião', local: 'Sede' },
  { id: 4, titulo: 'Coletiva de imprensa', data: '2025-03-19', tipo: 'Imprensa', local: 'Centro de Mídia' },
  { id: 5, titulo: 'Treino', data: '2025-03-19', tipo: 'Treino', local: 'CT FFC' },
  { id: 6, titulo: 'Treino leve', data: '2025-03-20', tipo: 'Treino', local: 'CT FFC' },
  { id: 7, titulo: 'Jogo - Avaí', data: '2025-03-22', tipo: 'Jogo', local: 'Florianópolis' },
  { id: 8, titulo: 'Folga', data: '2025-03-23', tipo: 'Outro', local: '-' },
  { id: 9, titulo: 'Treino recuperação', data: '2025-03-24', tipo: 'Treino', local: 'CT FFC' },
  { id: 10, titulo: 'Assembléia geral', data: '2025-03-25', tipo: 'Reunião', local: 'Sede' },
];
