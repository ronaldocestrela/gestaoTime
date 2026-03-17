import { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import {
  LayoutDashboard,
  Users,
  DollarSign,
  Calendar,
  ChevronDown,
  ChevronRight,
  Megaphone,
  LogOut,
  ArrowDownCircle,
  ArrowUpCircle,
  UserCog,
  Trophy,
  Heart,
  Building2,
} from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';

const menuItems = [
  { path: '/', label: 'PAINEL', icon: LayoutDashboard },
  { path: '/elenco', label: 'ELENCO', icon: Users, hasDropdown: true },
  { path: '/agenda', label: 'AGENDA', icon: Calendar, hasDropdown: true },
];

const financeiroSubItems = [
  { path: '/financeiro/contas-receber', label: 'Contas a receber', icon: ArrowDownCircle },
  { path: '/financeiro/contas-pagar', label: 'Contas a pagar', icon: ArrowUpCircle },
  { path: '/financeiro/dashboard', label: 'Dashboard', icon: LayoutDashboard },
];

const elencoSubItems = [
  { path: '/elenco/jogadores', label: 'Jogadores', icon: Users },
  { path: '/elenco/comissao-tecnica', label: 'Comissão técnica', icon: UserCog },
];

const agendaSubItems = [
  { path: '/agenda/dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { path: '/agenda/jogos', label: 'Jogos', icon: Trophy },
  { path: '/agenda/eventos-beneficentes', label: 'Eventos beneficentes', icon: Heart },
  { path: '/agenda/eventos-internos', label: 'Eventos internos', icon: Building2 },
];

export default function Sidebar({ onNovoComunicado }) {
  const { logout } = useAuth();
  const location = useLocation();
  const isFinanceiro = location.pathname.startsWith('/financeiro');
  const isElenco = location.pathname.startsWith('/elenco');
  const isAgenda = location.pathname.startsWith('/agenda');
  const [financeiroOpen, setFinanceiroOpen] = useState(isFinanceiro);
  const [elencoOpen, setElencoOpen] = useState(isElenco);
  const [agendaOpen, setAgendaOpen] = useState(isAgenda);

  useEffect(() => {
    if (isFinanceiro) setFinanceiroOpen(true);
  }, [isFinanceiro]);

  useEffect(() => {
    if (isElenco) setElencoOpen(true);
  }, [isElenco]);

  useEffect(() => {
    if (isAgenda) setAgendaOpen(true);
  }, [isAgenda]);

  const handleNovoComunicado = () => {
    onNovoComunicado?.() ?? alert('Novo Comunicado - funcionalidade em desenvolvimento.');
  };

  return (
    <aside className="w-64 min-h-screen bg-ffc-green flex flex-col shrink-0">
      {/* Logo FFC */}
      <div className="p-6">
        <div className="text-white font-bold text-2xl tracking-widest">FFC</div>
      </div>

      {/* Perfil */}
      <div className="px-4 pb-4 flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shrink-0">
          <span className="text-ffc-green font-bold text-sm">MR</span>
        </div>
        <div>
          <div className="text-white font-semibold text-sm">MARCUS RIOS</div>
          <div className="text-white/80 text-xs">PRESIDENTE</div>
        </div>
      </div>

      {/* Menu */}
      <nav className="flex-1 px-3 space-y-1">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `flex items-center justify-between w-full px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
              isActive ? 'bg-white text-ffc-green' : 'text-white hover:bg-white/10'
            }`
          }
        >
          {({ isActive }) => (
            <>
              <div className="flex items-center gap-3">
                <LayoutDashboard size={18} />
                <span>PAINEL</span>
              </div>
            </>
          )}
        </NavLink>

        {/* FINANCEIRO - Acordeão */}
        <div className="space-y-1">
          <button
            onClick={() => setFinanceiroOpen((o) => !o)}
            className={`flex items-center justify-between w-full px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
              isFinanceiro ? 'bg-white text-ffc-green' : 'text-white hover:bg-white/10'
            }`}
          >
            <div className="flex items-center gap-3">
              {financeiroOpen ? (
                <ChevronDown size={16} className="shrink-0" />
              ) : (
                <ChevronRight size={16} className="shrink-0" />
              )}
              <DollarSign size={18} />
              <span>FINANCEIRO</span>
            </div>
          </button>
          {financeiroOpen && (
            <div className="ml-4 pl-2 border-l-2 border-white/30 space-y-1">
              {financeiroSubItems.map((sub) => {
                const SubIcon = sub.icon;
                return (
                  <NavLink
                    key={sub.path}
                    to={sub.path}
                    className={({ isActive }) =>
                      `flex items-center gap-2 px-3 py-2 rounded text-xs font-medium transition-colors ${
                        isActive ? 'bg-white text-ffc-green' : 'text-white/90 hover:bg-white/10'
                      }`
                    }
                  >
                    <SubIcon size={14} />
                    <span>{sub.label}</span>
                  </NavLink>
                );
              })}
            </div>
          )}
        </div>

        {/* ELENCO - Acordeão */}
        <div className="space-y-1">
          <button
            onClick={() => setElencoOpen((o) => !o)}
            className={`flex items-center justify-between w-full px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
              isElenco ? 'bg-white text-ffc-green' : 'text-white hover:bg-white/10'
            }`}
          >
            <div className="flex items-center gap-3">
              {elencoOpen ? (
                <ChevronDown size={16} className="shrink-0" />
              ) : (
                <ChevronRight size={16} className="shrink-0" />
              )}
              <Users size={18} />
              <span>ELENCO</span>
            </div>
          </button>
          {elencoOpen && (
            <div className="ml-4 pl-2 border-l-2 border-white/30 space-y-1">
              {elencoSubItems.map((sub) => {
                const SubIcon = sub.icon;
                return (
                  <NavLink
                    key={sub.path}
                    to={sub.path}
                    className={({ isActive }) =>
                      `flex items-center gap-2 px-3 py-2 rounded text-xs font-medium transition-colors ${
                        isActive ? 'bg-white text-ffc-green' : 'text-white/90 hover:bg-white/10'
                      }`
                    }
                  >
                    <SubIcon size={14} />
                    <span>{sub.label}</span>
                  </NavLink>
                );
              })}
            </div>
          )}
        </div>

        {/* AGENDA - Acordeão */}
        <div className="space-y-1">
          <button
            onClick={() => setAgendaOpen((o) => !o)}
            className={`flex items-center justify-between w-full px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
              isAgenda ? 'bg-white text-ffc-green' : 'text-white hover:bg-white/10'
            }`}
          >
            <div className="flex items-center gap-3">
              {agendaOpen ? (
                <ChevronDown size={16} className="shrink-0" />
              ) : (
                <ChevronRight size={16} className="shrink-0" />
              )}
              <Calendar size={18} />
              <span>AGENDA</span>
            </div>
          </button>
          {agendaOpen && (
            <div className="ml-4 pl-2 border-l-2 border-white/30 space-y-1">
              {agendaSubItems.map((sub) => {
                const SubIcon = sub.icon;
                return (
                  <NavLink
                    key={sub.path}
                    to={sub.path}
                    className={({ isActive }) =>
                      `flex items-center gap-2 px-3 py-2 rounded text-xs font-medium transition-colors ${
                        isActive ? 'bg-white text-ffc-green' : 'text-white/90 hover:bg-white/10'
                      }`
                    }
                  >
                    <SubIcon size={14} />
                    <span>{sub.label}</span>
                  </NavLink>
                );
              })}
            </div>
          )}
        </div>
      </nav>

      {/* Botões */}
      <div className="p-4 space-y-2">
        <button
          onClick={handleNovoComunicado}
          className="flex items-center justify-center gap-2 w-full py-3 px-4 bg-white text-ffc-green rounded-lg font-semibold text-sm hover:bg-gray-100 transition-colors"
        >
          <Megaphone size={18} />
          NOVO COMUNICADO
        </button>
        <button
          onClick={logout}
          className="flex items-center justify-center gap-2 w-full py-2 px-4 text-white/90 hover:bg-white/10 rounded-lg text-sm font-medium transition-colors"
        >
          <LogOut size={16} />
          Sair
        </button>
      </div>
    </aside>
  );
}
