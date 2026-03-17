import { Outlet } from 'react-router-dom';
import { useState, useMemo } from 'react';
import { matches, events, eventosBeneficentes } from '../data/mockData';
import { MapPin, Trophy, Clock, Heart, Building2, LayoutDashboard } from 'lucide-react';

// Normaliza todos os eventos para formato unificado (para Dashboard)
function getTodosEventos() {
  const lista = [];
  matches.forEach((m) => {
    lista.push({ tipo: 'Jogo', titulo: `FFC x ${m.adversario}`, data: m.data, hora: m.hora, local: m.local, extra: m.competicao });
  });
  eventosBeneficentes.forEach((e) => {
    lista.push({ tipo: 'Beneficente', titulo: e.titulo, data: e.data, hora: e.hora, local: e.local, extra: e.descricao });
  });
  events.forEach((e) => {
    lista.push({ tipo: 'Interno', titulo: e.titulo, data: e.data, hora: '-', local: e.local, extra: e.tipo });
  });
  return lista.sort((a, b) => new Date(a.data + 'T' + (a.hora || '00:00')) - new Date(b.data + 'T' + (b.hora || '00:00')));
}

const TIPOS_EVENTO = {
  Treino: 'bg-ffc-green/20 text-ffc-green border-ffc-green/30',
  Jogo: 'bg-ffc-orange/20 text-ffc-orange border-ffc-orange/30',
  Reunião: 'bg-blue-100 text-blue-700 border-blue-200',
  Imprensa: 'bg-purple-100 text-purple-700 border-purple-200',
  Outro: 'bg-gray-100 text-gray-600 border-gray-200',
};

function formatarData(d) {
  return new Date(d).toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  });
}

function formatarDataCurta(d) {
  return new Date(d).toLocaleDateString('pt-BR', { day: '2-digit', month: '2-digit' });
}

export function AgendaLayout() {
  return <Outlet />;
}

const TIPO_BADGE = {
  Jogo: 'bg-ffc-orange/20 text-ffc-orange border-ffc-orange/30',
  Beneficente: 'bg-red-100 text-red-700 border-red-200',
  Interno: 'bg-ffc-green/20 text-ffc-green border-ffc-green/30',
};

export function AgendaDashboard() {
  const hoje = new Date();
  const [mesAno, setMesAno] = useState(() => ({ ano: hoje.getFullYear(), mes: hoje.getMonth() }));
  const [dataSelecionada, setDataSelecionada] = useState(null); // null = mostrar todos os eventos

  const diasDoMes = useMemo(() => {
    const { ano, mes } = mesAno;
    const primeiro = new Date(ano, mes, 1);
    const ultimo = new Date(ano, mes + 1, 0);
    const dias = [];
    const inicio = primeiro.getDay();
    const ajuste = inicio === 0 ? 6 : inicio - 1;
    for (let i = 0; i < ajuste; i++) dias.push(null);
    for (let d = 1; d <= ultimo.getDate(); d++) dias.push(new Date(ano, mes, d));
    return dias;
  }, [mesAno]);

  const todosEventos = useMemo(() => getTodosEventos(), []);
  const eventosFiltrados = useMemo(
    () => todosEventos.filter((e) => e.data === dataSelecionada),
    [todosEventos, dataSelecionada]
  );

  const mesLabel = new Date(mesAno.ano, mesAno.mes).toLocaleDateString('pt-BR', {
    month: 'long',
    year: 'numeric',
  });

  function handleSelecionarData(dia) {
    const key = `${dia.getFullYear()}-${String(dia.getMonth() + 1).padStart(2, '0')}-${String(dia.getDate()).padStart(2, '0')}`;
    setDataSelecionada(key);
  }

  const temEventoNaData = useMemo(() => {
    const set = new Set(todosEventos.map((e) => e.data));
    return set;
  }, [todosEventos]);

  return (
    <div className="space-y-6">
      <h1 className="text-xl sm:text-2xl font-bold text-gray-900">Dashboard de eventos</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Calendário para filtro por data */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-4">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Filtrar por data</h2>
            <div className="flex items-center justify-between mb-4">
              <span className="font-medium text-gray-700 capitalize">{mesLabel}</span>
              <div className="flex gap-1">
                <button
                  onClick={() =>
                    setMesAno((p) =>
                      p.mes === 0 ? { ano: p.ano - 1, mes: 11 } : { ...p, mes: p.mes - 1 }
                    )
                  }
                  className="p-2 rounded-lg border border-gray-200 hover:bg-gray-50 text-gray-600"
                >
                  ‹
                </button>
                <button
                  onClick={() =>
                    setMesAno((p) =>
                      p.mes === 11 ? { ano: p.ano + 1, mes: 0 } : { ...p, mes: p.mes + 1 }
                    )
                  }
                  className="p-2 rounded-lg border border-gray-200 hover:bg-gray-50 text-gray-600"
                >
                  ›
                </button>
              </div>
            </div>
            <div className="grid grid-cols-7 gap-1 text-center text-xs">
              {['D', 'S', 'T', 'Q', 'Q', 'S', 'S'].map((d) => (
                <div key={d} className="font-semibold text-gray-500 py-1">
                  {d}
                </div>
              ))}
              {diasDoMes.map((dia, i) => {
                if (!dia) return <div key={`e-${i}`} />;
                const key = `${dia.getFullYear()}-${String(dia.getMonth() + 1).padStart(2, '0')}-${String(dia.getDate()).padStart(2, '0')}`;
                const selecionado = key === dataSelecionada;
                const temEvento = temEventoNaData.has(key);
                return (
                  <button
                    key={key}
                    type="button"
                    onClick={() => handleSelecionarData(dia)}
                    className={`py-2 rounded-lg text-sm font-medium transition-colors ${
                      selecionado
                        ? 'bg-ffc-green text-white'
                        : temEvento
                          ? 'bg-ffc-green/15 text-ffc-green hover:bg-ffc-green/25'
                          : 'text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    {dia.getDate()}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Eventos do dia selecionado */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-4">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">
              Eventos em {formatarData(dataSelecionada)}
            </h2>
            <div className="space-y-3 max-h-96 overflow-y-auto">
              {eventosFiltrados.length === 0 ? (
                <p className="text-gray-500 text-center py-8">Nenhum evento nesta data.</p>
              ) : (
                eventosFiltrados.map((ev, i) => (
                  <div
                    key={`${ev.data}-${ev.titulo}-${i}`}
                    className="flex items-start gap-3 p-3 rounded-lg border border-gray-100 hover:bg-gray-50"
                  >
                    <div className="shrink-0 mt-0.5">
                      {ev.tipo === 'Jogo' && <Trophy size={20} className="text-ffc-green" />}
                      {ev.tipo === 'Beneficente' && <Heart size={20} className="text-red-500" />}
                      {ev.tipo === 'Interno' && <Building2 size={20} className="text-ffc-green" />}
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="font-semibold text-gray-900">{ev.titulo}</div>
                      <div className="flex items-center gap-2 mt-1 text-sm text-gray-600">
                        <Clock size={14} />
                        {ev.hora}
                      </div>
                      <div className="flex items-center gap-2 mt-0.5 text-sm text-gray-500">
                        <MapPin size={14} />
                        {ev.local}
                      </div>
                      {ev.extra && (
                        <span
                          className={`inline-block mt-2 px-2 py-0.5 rounded text-xs font-medium border ${TIPO_BADGE[ev.tipo] || ''}`}
                        >
                          {ev.extra}
                        </span>
                      )}
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function AgendaJogos() {
  return (
    <div className="space-y-6">
      <h1 className="text-xl sm:text-2xl font-bold text-gray-900">Jogos</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {matches.map((jogo) => (
          <div
            key={jogo.id}
            className="bg-white rounded-lg shadow-sm border border-gray-100 p-4 hover:shadow-md transition-shadow"
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-medium text-gray-500 uppercase">{jogo.competicao}</span>
              <Trophy size={14} className="text-ffc-green" />
            </div>
            <div className="font-bold text-gray-900 text-lg">FFC x {jogo.adversario}</div>
            <div className="flex items-center gap-2 mt-2 text-sm text-gray-600">
              <Clock size={14} />
              {formatarData(jogo.data)} · {jogo.hora}
            </div>
            <div className="flex items-center gap-2 mt-1 text-sm text-gray-500">
              <MapPin size={14} />
              {jogo.local}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function AgendaEventosBeneficentes() {
  return (
    <div className="space-y-6">
      <h1 className="text-xl sm:text-2xl font-bold text-gray-900">Eventos beneficentes</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {eventosBeneficentes.map((ev) => (
          <div
            key={ev.id}
            className="bg-white rounded-lg shadow-sm border border-gray-100 p-4 hover:shadow-md transition-shadow"
          >
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center shrink-0">
                <Heart size={20} className="text-red-500" />
              </div>
              <div className="min-w-0 flex-1">
                <div className="font-semibold text-gray-900">{ev.titulo}</div>
                <div className="flex items-center gap-2 mt-1 text-sm text-gray-600">
                  <Clock size={14} />
                  {formatarData(ev.data)} · {ev.hora}
                </div>
                <div className="flex items-center gap-2 mt-0.5 text-sm text-gray-500">
                  <MapPin size={14} />
                  {ev.local}
                </div>
                <p className="mt-2 text-sm text-gray-600">{ev.descricao}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function AgendaEventosInternos() {
  const [mesAno, setMesAno] = useState(() => {
    const d = new Date(2025, 2, 1);
    return { ano: d.getFullYear(), mes: d.getMonth() };
  });

  const diasDoMes = useMemo(() => {
    const { ano, mes } = mesAno;
    const primeiro = new Date(ano, mes, 1);
    const ultimo = new Date(ano, mes + 1, 0);
    const dias = [];
    const inicio = primeiro.getDay();
    const ajuste = inicio === 0 ? 6 : inicio - 1;
    for (let i = 0; i < ajuste; i++) dias.push(null);
    for (let d = 1; d <= ultimo.getDate(); d++) dias.push(new Date(ano, mes, d));
    return dias;
  }, [mesAno]);

  const eventosPorData = useMemo(() => {
    const map = {};
    events.forEach((e) => {
      const key = e.data;
      if (!map[key]) map[key] = [];
      map[key].push(e);
    });
    return map;
  }, []);

  const mesLabel = new Date(mesAno.ano, mesAno.mes).toLocaleDateString('pt-BR', {
    month: 'long',
    year: 'numeric',
  });

  return (
    <div className="space-y-6">
      <h1 className="text-xl sm:text-2xl font-bold text-gray-900">Eventos internos do clube</h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-4">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-gray-900 capitalize">{mesLabel}</h2>
            <div className="flex gap-2">
              <button
                onClick={() =>
                  setMesAno((p) =>
                    p.mes === 0 ? { ano: p.ano - 1, mes: 11 } : { ...p, mes: p.mes - 1 }
                  )
                }
                className="p-2 rounded-lg border border-gray-200 hover:bg-gray-50"
              >
                ‹
              </button>
              <button
                onClick={() =>
                  setMesAno((p) =>
                    p.mes === 11 ? { ano: p.ano + 1, mes: 0 } : { ...p, mes: p.mes + 1 }
                  )
                }
                className="p-2 rounded-lg border border-gray-200 hover:bg-gray-50"
              >
                ›
              </button>
            </div>
          </div>
          <div className="grid grid-cols-7 gap-1 text-center text-xs">
            {['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb', 'Dom'].map((d) => (
              <div key={d} className="font-semibold text-gray-500 py-1">
                {d}
              </div>
            ))}
            {diasDoMes.map((dia, i) => {
              if (!dia) return <div key={`empty-${i}`} />;
              const key = `${dia.getFullYear()}-${String(dia.getMonth() + 1).padStart(2, '0')}-${String(dia.getDate()).padStart(2, '0')}`;
              const temEvento = eventosPorData[key]?.length > 0;
              return (
                <div
                  key={key}
                  className={`py-2 rounded-lg ${
                    temEvento ? 'bg-ffc-green/10 text-ffc-green font-medium' : 'text-gray-700'
                  }`}
                >
                  {dia.getDate()}
                </div>
              );
            })}
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-4">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Eventos</h2>
          <div className="space-y-3 max-h-80 overflow-y-auto">
            {events.map((ev) => (
              <div
                key={ev.id}
                className="flex items-start gap-3 p-3 rounded-lg border border-gray-100 hover:bg-gray-50"
              >
                <div className="text-center shrink-0">
                  <div className="text-xs text-gray-500">
                    {new Date(ev.data).toLocaleDateString('pt-BR', { weekday: 'short' })}
                  </div>
                  <div className="font-bold text-gray-900">{formatarDataCurta(ev.data)}</div>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-medium text-gray-900">{ev.titulo}</div>
                  <div className="text-sm text-gray-500">{ev.local}</div>
                  <span
                    className={`inline-block mt-1 px-2 py-0.5 rounded text-xs font-medium border ${TIPOS_EVENTO[ev.tipo] || TIPOS_EVENTO.Outro}`}
                  >
                    {ev.tipo}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
