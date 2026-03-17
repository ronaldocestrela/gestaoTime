import { Outlet } from 'react-router-dom';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Legend,
} from 'recharts';
import KpiCard from '../components/ui/KpiCard';
import ChartCard from '../components/ui/ChartCard';
import DataTable from '../components/ui/DataTable';
import {
  financialKpis,
  financialTransactions,
  revenueBreakdown,
  revenueData,
  expensesData,
  contasReceber,
  contasPagar,
} from '../data/mockData';

const barData = revenueData.map((r, i) => ({
  mes: r.mes,
  Receita: Math.round(r.valor),
  Despesa: Math.round(expensesData[i].valor),
}));

const transacaoColumns = [
  { key: 'data', label: 'Data', render: (v) => new Date(v).toLocaleDateString('pt-BR') },
  { key: 'descricao', label: 'Descrição' },
  { key: 'categoria', label: 'Categoria' },
  {
    key: 'valor',
    label: 'Valor',
    render: (v) => (
      <span className={v >= 0 ? 'text-green-600 font-medium' : 'text-red-600 font-medium'}>
        {v >= 0 ? '+' : ''}R$ {Math.abs(v).toLocaleString('pt-BR')}
      </span>
    ),
  },
  { key: 'status', label: 'Status' },
];

const contasReceberColumns = [
  { key: 'vencimento', label: 'Vencimento', render: (v) => new Date(v).toLocaleDateString('pt-BR') },
  { key: 'descricao', label: 'Descrição' },
  {
    key: 'valor',
    label: 'Valor',
    render: (v) => (
      <span className="text-green-600 font-medium">R$ {v.toLocaleString('pt-BR')}</span>
    ),
  },
  { key: 'status', label: 'Status' },
];

const contasPagarColumns = [
  { key: 'vencimento', label: 'Vencimento', render: (v) => new Date(v).toLocaleDateString('pt-BR') },
  { key: 'descricao', label: 'Descrição' },
  {
    key: 'valor',
    label: 'Valor',
    render: (v) => (
      <span className="text-red-600 font-medium">R$ {Math.abs(v).toLocaleString('pt-BR')}</span>
    ),
  },
  { key: 'status', label: 'Status' },
];

export function FinanceiroLayout() {
  return <Outlet />;
}

export function FinanceiroDashboard() {
  return (
    <div className="space-y-6">
      <h1 className="text-xl sm:text-2xl font-bold text-gray-900">Dashboard / Resumo</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {Object.values(financialKpis).map((kpi) => (
          <KpiCard key={kpi.label} label={kpi.label} value={kpi.value} />
        ))}
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <ChartCard title="Receita vs Despesa (mensal)">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={barData} margin={{ top: 5, right: 5, left: -20, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#eee" />
              <XAxis dataKey="mes" tick={{ fontSize: 11 }} />
              <YAxis tick={{ fontSize: 11 }} tickFormatter={(v) => `R$${v / 1000}K`} />
              <Tooltip formatter={(v) => [`R$ ${v.toLocaleString('pt-BR')}`, undefined]} />
              <Bar dataKey="Receita" fill="#006B3F" radius={[4, 4, 0, 0]} />
              <Bar dataKey="Despesa" fill="#FF6B6B" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </ChartCard>
        <ChartCard title="Distribuição de receitas">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={revenueBreakdown}
                dataKey="valor"
                nameKey="nome"
                cx="50%"
                cy="50%"
                innerRadius={50}
                outerRadius={80}
                paddingAngle={2}
                label={({ nome, percent }) => `${nome} ${(percent * 100).toFixed(0)}%`}
              >
                {revenueBreakdown.map((entry, i) => (
                  <Cell key={i} fill={entry.cor} />
                ))}
              </Pie>
              <Tooltip formatter={(v) => [`R$ ${v.toLocaleString('pt-BR')}`, undefined]} />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </ChartCard>
      </div>
      <DataTable
        title="Transações recentes"
        columns={transacaoColumns}
        data={financialTransactions}
      />
    </div>
  );
}

export function FinanceiroContasReceber() {
  return (
    <div className="space-y-6">
      <h1 className="text-xl sm:text-2xl font-bold text-gray-900">Contas a receber</h1>
      <DataTable
        title="Lançamentos"
        columns={contasReceberColumns}
        data={contasReceber}
      />
    </div>
  );
}

export function FinanceiroContasPagar() {
  return (
    <div className="space-y-6">
      <h1 className="text-xl sm:text-2xl font-bold text-gray-900">Contas a pagar</h1>
      <DataTable
        title="Lançamentos"
        columns={contasPagarColumns}
        data={contasPagar}
      />
    </div>
  );
}
