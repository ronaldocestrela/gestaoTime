import { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { LogIn, Lock, User } from 'lucide-react';

export default function Login() {
  const { login } = useAuth();
  const [usuario, setUsuario] = useState('');
  const [senha, setSenha] = useState('');
  const [erro, setErro] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    setErro('');

    if (!usuario.trim() || !senha.trim()) {
      setErro('Preencha usuário e senha para continuar.');
      return;
    }

    // Demo: qualquer usuário/senha preenchidos permite acesso
    login();
  }

  return (
    <div className="min-h-screen flex">
      {/* Lado esquerdo - Branding com logo */}
      <div className="hidden lg:flex lg:w-1/2 bg-ffc-green flex-col items-center justify-center p-12">
        <div className="max-w-sm w-full text-center">
          <img
            src="/logoBranca.png"
            alt="FFC - Logo"
            className="w-48 h-auto mx-auto mb-8"
          />
          <h1 className="text-white text-2xl font-bold mb-2">Sistema de gestão do clube</h1>
          <p className="text-white/80 text-sm">
            Demonstração
          </p>
        </div>
      </div>

      {/* Lado direito - Formulário */}
      <div className="w-full lg:w-1/2 flex flex-col items-center justify-center p-6 bg-ffc-gray">
        {/* Logo mobile */}
        <div className="lg:hidden mb-8">
          <img
            src="/logoVerde.png"
            alt="FFC"
            className="w-24 h-auto"
          />
        </div>

        <div className="w-full max-w-sm">
          <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-8">
            <div className="text-center mb-8">
              <div className="w-14 h-14 rounded-full bg-ffc-green/10 flex items-center justify-center mx-auto mb-4">
                <LogIn size={28} className="text-ffc-green" />
              </div>
              <h2 className="text-xl font-bold text-gray-900">Entrar</h2>
              <p className="text-sm text-gray-500 mt-1">
                Use suas credenciais para acessar o painel
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              {erro && (
                <div className="p-3 rounded-lg bg-red-50 border border-red-100 text-red-700 text-sm">
                  {erro}
                </div>
              )}

              <div>
                <label htmlFor="usuario" className="block text-sm font-medium text-gray-700 mb-1.5">
                  Usuário
                </label>
                <div className="relative">
                  <User
                    size={18}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                  />
                  <input
                    id="usuario"
                    type="text"
                    value={usuario}
                    onChange={(e) => setUsuario(e.target.value)}
                    placeholder="Ex: marcus.rios"
                    className="w-full pl-11 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-ffc-green/30 focus:border-ffc-green outline-none transition-colors"
                    autoComplete="username"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="senha" className="block text-sm font-medium text-gray-700 mb-1.5">
                  Senha
                </label>
                <div className="relative">
                  <Lock
                    size={18}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                  />
                  <input
                    id="senha"
                    type="password"
                    value={senha}
                    onChange={(e) => setSenha(e.target.value)}
                    placeholder="••••••••"
                    className="w-full pl-11 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-ffc-green/30 focus:border-ffc-green outline-none transition-colors"
                    autoComplete="current-password"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-3 px-4 bg-ffc-green text-white font-semibold rounded-lg hover:bg-ffc-green/90 transition-colors flex items-center justify-center gap-2"
              >
                <LogIn size={18} />
                Entrar
              </button>
            </form>

            <p className="mt-6 text-center text-xs text-gray-400">
              Demonstração: preencha qualquer usuário e senha para acessar
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
