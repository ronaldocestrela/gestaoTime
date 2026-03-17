import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Menu } from 'lucide-react';
import Sidebar from './Sidebar';
import NovoComunicadoModal from '../ui/NovoComunicadoModal';

export default function MainLayout() {
  const [modalAberto, setModalAberto] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-ffc-gray">
      <Sidebar
        onNovoComunicado={() => setModalAberto(true)}
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />
      <div className="flex-1 flex flex-col min-w-0">
        {/* Header móvel - hamburger */}
        <header className="lg:hidden sticky top-0 z-30 flex items-center gap-3 px-4 py-3 bg-ffc-green text-white">
          <button
            onClick={() => setSidebarOpen(true)}
            className="p-2 rounded-lg hover:bg-white/10 transition-colors"
            aria-label="Abrir menu"
          >
            <Menu size={24} />
          </button>
          <span className="font-bold text-lg tracking-widest">FFC</span>
        </header>
        <main className="flex-1 p-4 sm:p-6 overflow-auto">
          <Outlet />
        </main>
      </div>
      <NovoComunicadoModal
        isOpen={modalAberto}
        onClose={() => setModalAberto(false)}
      />
    </div>
  );
}
