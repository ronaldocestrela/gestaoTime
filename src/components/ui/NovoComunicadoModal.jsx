import { useState } from 'react';
import { X, Megaphone } from 'lucide-react';

export default function NovoComunicadoModal({ isOpen, onClose }) {
  const [titulo, setTitulo] = useState('');
  const [mensagem, setMensagem] = useState('');
  const [dataPublicacao, setDataPublicacao] = useState(() => {
    const d = new Date();
    return d.toISOString().slice(0, 10);
  });
  const [publicoAlvo, setPublicoAlvo] = useState('todos');
  const [enviado, setEnviado] = useState(false);

  if (!isOpen) return null;

  function handleSubmit(e) {
    e.preventDefault();
    setEnviado(true);
    setTimeout(() => {
      setEnviado(false);
      setTitulo('');
      setMensagem('');
      onClose();
    }, 1200);
  }

  function handleFechar() {
    if (!enviado) {
      setTitulo('');
      setMensagem('');
      onClose();
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4">
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/50"
        onClick={handleFechar}
        aria-hidden="true"
      />

      {/* Modal */}
      <div
        className="relative w-full max-w-md max-h-[90vh] sm:max-h-none bg-white rounded-t-xl sm:rounded-xl shadow-xl flex flex-col overflow-hidden"
        role="dialog"
        aria-labelledby="modal-titulo"
        aria-modal="true"
      >
        <div className="flex items-center justify-between p-5 border-b border-gray-100">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-ffc-green/10 flex items-center justify-center">
              <Megaphone size={20} className="text-ffc-green" />
            </div>
            <h2 id="modal-titulo" className="text-lg font-semibold text-gray-900">
              Novo Comunicado
            </h2>
          </div>
          <button
            onClick={handleFechar}
            disabled={enviado}
            className="p-2 rounded-lg text-gray-500 hover:bg-gray-100 hover:text-gray-700 transition-colors disabled:opacity-50"
            aria-label="Fechar"
          >
            <X size={20} />
          </button>
        </div>

        <form id="novo-comunicado-form" onSubmit={handleSubmit} className="flex-1 min-h-0 overflow-y-auto p-5 space-y-4">
          {enviado ? (
            <div className="py-8 text-center">
              <div className="w-12 h-12 rounded-full bg-ffc-green/20 flex items-center justify-center mx-auto mb-3">
                <Megaphone size={24} className="text-ffc-green" />
              </div>
              <p className="text-ffc-green font-medium">Comunicado enviado com sucesso!</p>
            </div>
          ) : (
            <>
              <div>
                <label htmlFor="titulo" className="block text-sm font-medium text-gray-700 mb-1">
                  Título
                </label>
                <input
                  id="titulo"
                  type="text"
                  value={titulo}
                  onChange={(e) => setTitulo(e.target.value)}
                  placeholder="Ex: Reunião de sócios"
                  className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-ffc-green/30 focus:border-ffc-green outline-none transition-colors"
                  required
                />
              </div>

              <div>
                <label htmlFor="mensagem" className="block text-sm font-medium text-gray-700 mb-1">
                  Mensagem
                </label>
                <textarea
                  id="mensagem"
                  value={mensagem}
                  onChange={(e) => setMensagem(e.target.value)}
                  placeholder="Digite o conteúdo do comunicado..."
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-ffc-green/30 focus:border-ffc-green outline-none transition-colors resize-none"
                  required
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="data" className="block text-sm font-medium text-gray-700 mb-1">
                    Data de publicação
                  </label>
                  <input
                    id="data"
                    type="date"
                    value={dataPublicacao}
                    onChange={(e) => setDataPublicacao(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-ffc-green/30 focus:border-ffc-green outline-none transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="publico" className="block text-sm font-medium text-gray-700 mb-1">
                    Público-alvo
                  </label>
                  <select
                    id="publico"
                    value={publicoAlvo}
                    onChange={(e) => setPublicoAlvo(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-ffc-green/30 focus:border-ffc-green outline-none transition-colors bg-white"
                  >
                    <option value="todos">Todos</option>
                    <option value="socios">Sócios</option>
                    <option value="elenco">Elenco</option>
                    <option value="comissao">Comissão técnica</option>
                    <option value="imprensa">Imprensa</option>
                  </select>
                </div>
              </div>
            </>
          )}
        </form>

        {!enviado && (
          <div className="flex gap-3 p-5 border-t border-gray-100 bg-gray-50/50 rounded-b-xl">
            <button
              type="button"
              onClick={handleFechar}
              className="flex-1 px-4 py-2.5 rounded-lg border border-gray-200 text-gray-700 font-medium hover:bg-gray-100 transition-colors"
            >
              Cancelar
            </button>
            <button
              type="submit"
              form="novo-comunicado-form"
              onClick={(e) => {
                e.preventDefault();
                const form = document.getElementById('novo-comunicado-form');
                if (form && form.checkValidity()) {
                  handleSubmit(e);
                } else {
                  form?.reportValidity();
                }
              }}
              className="flex-1 px-4 py-2.5 rounded-lg bg-ffc-green text-white font-medium hover:bg-ffc-green/90 transition-colors"
            >
              Publicar
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
