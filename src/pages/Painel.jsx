import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import { kpiData, revenueData, expensesData, activeMembersData, topProducts } from '../data/mockData';
import KpiCard from '../components/ui/KpiCard';
import ChartCard from '../components/ui/ChartCard';
import DataTable from '../components/ui/DataTable';

const chartConfig = {
  stroke: '#FF6B6B',
  fill: 'rgba(255, 107, 107, 0.3)',
};

export default function Painel() {
  const productColumns = [
    { key: 'nome', label: 'Produto' },
    { key: 'quantidade', label: 'Qtd. Vendida' },
    {
      key: 'receita',
      label: 'Receita',
      render: (v) => `R$ ${v.toLocaleString('pt-BR')}`,
    },
  ];

  return (
    <div className="space-y-6">
      {/* KPIs */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <KpiCard label={kpiData.bilheteria.label} value={kpiData.bilheteria.value} />
        <KpiCard label={kpiData.sociosTorcedores.label} value={kpiData.sociosTorcedores.value} />
        <KpiCard label={kpiData.atletas.label} value={kpiData.atletas.value} />
        <KpiCard label={kpiData.comissaoTecnica.label} value={kpiData.comissaoTecnica.value} />
      </div>

      {/* Gráficos */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <ChartCard title="Receita">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={revenueData}>
              <defs>
                <linearGradient id="colorReceita" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor={chartConfig.stroke} stopOpacity={0.4} />
                  <stop offset="95%" stopColor={chartConfig.stroke} stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#eee" />
              <XAxis dataKey="mes" tick={{ fontSize: 10 }} />
              <YAxis tick={{ fontSize: 10 }} tickFormatter={(v) => `${v / 1000}K`} />
              <Tooltip formatter={(v) => [`R$ ${v.toLocaleString('pt-BR')}`, 'Receita']} />
              <Area
                type="monotone"
                dataKey="valor"
                stroke={chartConfig.stroke}
                fill="url(#colorReceita)"
                strokeWidth={2}
              />
            </AreaChart>
          </ResponsiveContainer>
        </ChartCard>
        <ChartCard title="Despesas">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={expensesData}>
              <defs>
                <linearGradient id="colorDespesas" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor={chartConfig.stroke} stopOpacity={0.4} />
                  <stop offset="95%" stopColor={chartConfig.stroke} stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#eee" />
              <XAxis dataKey="mes" tick={{ fontSize: 10 }} />
              <YAxis tick={{ fontSize: 10 }} tickFormatter={(v) => `${v / 1000}K`} />
              <Tooltip formatter={(v) => [`R$ ${v.toLocaleString('pt-BR')}`, 'Despesa']} />
              <Area
                type="monotone"
                dataKey="valor"
                stroke={chartConfig.stroke}
                fill="url(#colorDespesas)"
                strokeWidth={2}
              />
            </AreaChart>
          </ResponsiveContainer>
        </ChartCard>
        <ChartCard title="Sócios Ativos">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={activeMembersData}>
              <defs>
                <linearGradient id="colorSocios" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor={chartConfig.stroke} stopOpacity={0.4} />
                  <stop offset="95%" stopColor={chartConfig.stroke} stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#eee" />
              <XAxis dataKey="mes" tick={{ fontSize: 10 }} />
              <YAxis tick={{ fontSize: 10 }} />
              <Tooltip />
              <Area
                type="monotone"
                dataKey="valor"
                stroke={chartConfig.stroke}
                fill="url(#colorSocios)"
                strokeWidth={2}
              />
            </AreaChart>
          </ResponsiveContainer>
        </ChartCard>
      </div>

      {/* Produtos Mais Vendidos */}
      <DataTable
        title="Produtos Mais Vendidos"
        columns={productColumns}
        data={topProducts}
      />
    </div>
  );
}
