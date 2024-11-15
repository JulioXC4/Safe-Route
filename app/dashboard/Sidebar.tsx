import Link from "next/link";
import {
  FiSettings,
  FiLogOut,
  FiHome,
  FiMapPin,
  FiEdit3,
  FiMessageSquare,
  FiBarChart,
} from "react-icons/fi";

export const Sidebar = ({ userName }: { userName: string }) => {
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
        <Link
          href={"/dashboard"}
          className="flex items-center space-x-3 py-2 px-4 hover:bg-gray-800 rounded transition"
        >
          <FiHome className="text-xl" />
          <span>Resumen</span>
        </Link>
        <Link
          href={"/dashboard/routes"}
          className="flex items-center space-x-3 py-2 px-4 hover:bg-gray-800 rounded transition"
        >
          <FiMapPin className="text-xl" />
          <span>Tus rutas</span>
        </Link>
        <Link
          href={"/dashboard/route"}
          className="flex items-center space-x-3 py-2 px-4 hover:bg-gray-800 rounded transition"
        >
          <FiEdit3 className="text-xl" />
          <span>Crear ruta</span>
        </Link>
        <Link
          href={"/dashboard/forum"}
          className="flex items-center space-x-3 py-2 px-4 hover:bg-gray-800 rounded transition"
        >
          <FiMessageSquare className="text-xl" />
          <span>Foro</span>
        </Link>
        {/* Nueva sección de Estadísticas */}
        <Link
          href={"/dashboard/statistics"}
          className="flex items-center space-x-3 py-2 px-4 hover:bg-gray-800 rounded transition"
        >
          <FiBarChart className="text-xl" />
          <span>Estadísticas</span>
        </Link>
      </div>

      {/* Botones de Configuración y Salir */}
      <div className="flex flex-col space-y-4 mt-8 border-t border-gray-700 pt-6">
        <Link
          href={"/dashboard/configuration"}
          className="flex items-center space-x-3 py-2 px-4 hover:bg-gray-800 rounded transition"
        >
          <FiSettings className="text-xl" />
          <span>Configuración</span>
        </Link>
        <Link
          href={"/"}
          className="flex items-center space-x-3 py-2 px-4 hover:bg-gray-800 rounded transition text-red-400"
        >
          <FiLogOut className="text-xl" />
          <span>Salir</span>
        </Link>
      </div>
    </div>
  );
};
