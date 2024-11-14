import { FiSettings, FiLogOut, FiHome, FiList, FiUser } from "react-icons/fi";
export const Sidebar = ({ userName }: any) => {
  return (
    <div className="w-64 bg-[#2B3D49] text-gray-200 flex flex-col justify-between p-6">
      {/* Sección de Perfil */}
      <div className="flex flex-col items-center border-b border-gray-700 pb-6">
        <img
          src="/images/p1.jpg"
          alt="Perfil"
          className="w-24 h-24 rounded-full mb-4 border-2 border-gray-500"
        />
        <h2 className="text-xl font-semibold">{userName}</h2>   
      </div>

      {/* Secciones de Navegación */}
      <div className="flex flex-col mt-8 space-y-4">
        <button className="flex items-center space-x-3 py-2 px-4 hover:bg-gray-800 rounded transition">
          <FiHome className="text-xl" />
          <span>Sección 1</span>
        </button>
        <button className="flex items-center space-x-3 py-2 px-4 hover:bg-gray-800 rounded transition">
          <FiList className="text-xl" />
          <span>Sección 2</span>
        </button>
        <button className="flex items-center space-x-3 py-2 px-4 hover:bg-gray-800 rounded transition">
          <FiUser className="text-xl" />
          <span>Sección 3</span>
        </button>
      </div>

      {/* Botones de Configuración y Salir */}
      <div className="flex flex-col space-y-4 mt-8 border-t border-gray-700 pt-6">
        <button className="flex items-center space-x-3 py-2 px-4 hover:bg-gray-800 rounded transition">
          <FiSettings className="text-xl" />
          <span>Configuración</span>
        </button>
        <button className="flex items-center space-x-3 py-2 px-4 hover:bg-gray-800 rounded transition text-red-400">
          <FiLogOut className="text-xl" />
          <span>Salir</span>
        </button>
      </div>
    </div>
  );
};
