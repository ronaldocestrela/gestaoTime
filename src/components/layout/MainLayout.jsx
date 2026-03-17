import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import NovoComunicadoModal from '../ui/NovoComunicadoModal';

export default function MainLayout() {
  const [modalAberto, setModalAberto] = useState(false);

  return (
    <div className="flex min-h-screen bg-ffc-gray">
      <Sidebar onNovoComunicado={() => setModalAberto(true)} />
      <main className="flex-1 p-6 overflow-auto">
        <Outlet />
      </main>
      <NovoComunicadoModal
        isOpen={modalAberto}
        onClose={() => setModalAberto(false)}
      />
    </div>
  );
}
