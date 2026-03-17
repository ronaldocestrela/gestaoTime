import { useState, useMemo } from 'react';
import { Outlet } from 'react-router-dom';
import { players, comissaoTecnica } from '../data/mockData';

const POSITION_FILTERS = [
  { value: 'todos', label: 'Todos' },
  { value: 'Goleiro', label: 'Goleiros' },
  { value: 'Defensores', label: 'Defensores' },
  { value: 'Meias', label: 'Meias' },
  { value: 'Atacantes', label: 'Atacantes' },
];

const DEFENSORES_POSICOES = ['Zagueiro', 'Lateral Direito', 'Lateral Esquerdo'];
const MEIAS_POSICOES = ['Meia', 'Volante', 'Ponta'];

function getPositionGroup(posicao) {
  if (posicao === 'Goleiro') return 'Goleiro';
  if (DEFENSORES_POSICOES.includes(posicao)) return 'Defensores';
  if (MEIAS_POSICOES.includes(posicao)) return 'Meias';
  if (posicao === 'Atacante') return 'Atacantes';
  return 'Outros';
}

export function ElencoLayout() {
  return <Outlet />;
}

export function ElencoJogadores() {
  const [filter, setFilter] = useState('todos');

  const filteredPlayers = useMemo(() => {
    if (filter === 'todos') return players;
    return players.filter((p) => getPositionGroup(p.posicao) === filter);
  }, [filter]);

  return (
    <div className="space-y-6">
      <h1 className="text-xl sm:text-2xl font-bold text-gray-900">Jogadores</h1>

      {/* Filtro */}
      <div className="flex flex-wrap gap-2">
        {POSITION_FILTERS.map((f) => (
          <button
            key={f.value}
            onClick={() => setFilter(f.value)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              filter === f.value
                ? 'bg-ffc-green text-white'
                : 'bg-white text-gray-700 border border-gray-200 hover:bg-gray-50'
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>

      {/* Grid de jogadores */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {filteredPlayers.map((p) => (
          <div
            key={p.id}
            className="bg-white rounded-lg shadow-sm border border-gray-100 p-4 hover:shadow-md transition-shadow"
          >
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 rounded-full bg-ffc-gray flex items-center justify-center shrink-0 text-ffc-green font-bold text-lg">
                {p.numero}
              </div>
              <div className="min-w-0 flex-1">
                <div className="font-semibold text-gray-900 truncate">{p.nome}</div>
                <div className="text-xs text-gray-500">{p.posicao}</div>
                <div className="text-xs text-gray-400 mt-1">
                  {p.idade} anos · {p.nacionalidade}
                </div>
                <div className="flex gap-3 mt-2 text-xs text-gray-600">
                  <span>{p.jogos} jogos</span>
                  <span>{p.gols} gols</span>
                  <span>{p.assistencias} ast.</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredPlayers.length === 0 && (
        <div className="text-center py-12 text-gray-500">Nenhum jogador encontrado.</div>
      )}
    </div>
  );
}

export function ElencoComissaoTecnica() {
  return (
    <div className="space-y-6">
      <h1 className="text-xl sm:text-2xl font-bold text-gray-900">Comissão Técnica</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {comissaoTecnica.map((membro) => (
          <div
            key={membro.id}
            className="bg-white rounded-lg shadow-sm border border-gray-100 p-4 hover:shadow-md transition-shadow"
          >
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 rounded-full bg-ffc-green/20 flex items-center justify-center shrink-0 text-ffc-green font-bold text-lg">
                {membro.iniciais}
              </div>
              <div className="min-w-0 flex-1">
                <div className="font-semibold text-gray-900 truncate">{membro.nome}</div>
                <div className="text-xs text-ffc-green font-medium">{membro.cargo}</div>
                <div className="text-xs text-gray-400 mt-1">
                  Desde {new Date(membro.desde).getFullYear()}
                </div>
                {membro.especialidade && (
                  <div className="text-xs text-gray-500 mt-1">{membro.especialidade}</div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ElencoJogadores;
