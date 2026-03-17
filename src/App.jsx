import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useAuth } from './contexts/AuthContext';
import MainLayout from './components/layout/MainLayout';
import Login from './pages/Login';
import Painel from './pages/Painel';
import { ElencoLayout, ElencoJogadores, ElencoComissaoTecnica } from './pages/Elenco';
import { FinanceiroLayout, FinanceiroDashboard, FinanceiroContasReceber, FinanceiroContasPagar } from './pages/Financeiro';
import { AgendaLayout, AgendaDashboard, AgendaJogos, AgendaEventosBeneficentes, AgendaEventosInternos } from './pages/Agenda';

function AppRoutes() {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Login />;
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Painel />} />
          <Route path="elenco" element={<ElencoLayout />}>
            <Route index element={<Navigate to="jogadores" replace />} />
            <Route path="jogadores" element={<ElencoJogadores />} />
            <Route path="comissao-tecnica" element={<ElencoComissaoTecnica />} />
          </Route>
          <Route path="financeiro" element={<FinanceiroLayout />}>
            <Route index element={<Navigate to="dashboard" replace />} />
            <Route path="dashboard" element={<FinanceiroDashboard />} />
            <Route path="contas-receber" element={<FinanceiroContasReceber />} />
            <Route path="contas-pagar" element={<FinanceiroContasPagar />} />
          </Route>
          <Route path="agenda" element={<AgendaLayout />}>
            <Route index element={<Navigate to="dashboard" replace />} />
            <Route path="dashboard" element={<AgendaDashboard />} />
            <Route path="jogos" element={<AgendaJogos />} />
            <Route path="eventos-beneficentes" element={<AgendaEventosBeneficentes />} />
            <Route path="eventos-internos" element={<AgendaEventosInternos />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default function App() {
  return <AppRoutes />;
}
