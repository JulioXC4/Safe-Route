import React from "react";
import Link from "next/link";
import { Sidebar } from "../Sidebar";

const routesData = [
  {
    origin: "Centro Histórico",
    destination: "Miraflores",
    riskLevel: 0.7, // 70% de inseguridad
  },
  {
    origin: "Barranco",
    destination: "San Isidro",
    riskLevel: 0.4, // 40% de inseguridad
  },
  {
    origin: "Lince",
    destination: "La Molina",
    riskLevel: 0.6, // 60% de inseguridad
  },
  {
    origin: "Surquillo",
    destination: "Pueblo Libre",
    riskLevel: 0.8, // 80% de inseguridad
  },
  {
    origin: "San Juan de Lurigancho",
    destination: "Jesús María",
    riskLevel: 0.75, // 75% de inseguridad
  },
  {
    origin: "Villa El Salvador",
    destination: "Magdalena",
    riskLevel: 0.85, // 85% de inseguridad
  },
  {
    origin: "Rímac",
    destination: "San Borja",
    riskLevel: 0.5, // 50% de inseguridad
  },
  {
    origin: "Comas",
    destination: "Surco",
    riskLevel: 0.65, // 65% de inseguridad
  },
];

const Routes = () => {
  return (
    <div className="flex">
      <Sidebar userName="Usuario" />
      <div className="max-h-screen overflow-y-auto flex-1 p-6 bg-gray-100 rounded">
        <h1 className="text-3xl font-semibold mb-6">Rutas - Safe Route</h1>
        <p className="text-gray-700 mb-4">
          Explora rutas en Lima y visualiza su nivel de inseguridad.
        </p>
        <div className="mt-6 flex space-x-4">
          <Link href="/dashboard/statistics">
            <button className="px-4 py-2 bg-blue-500 text-white rounded">
              Ver Estadísticas
            </button>
          </Link>
          <Link href="/dashboard/route">
            <button className="px-4 py-2 bg-green-500 text-white rounded">
              Crear Nueva Ruta
            </button>
          </Link>
        </div>
        <div className="space-y-4">
          {routesData.map((route, index) => (
            <div key={index} className="p-4 bg-white rounded shadow-md">
              <h2 className="text-xl font-semibold text-blue-700 mb-2">
                {route.origin} - {route.destination}
              </h2>
              <p className="text-gray-600">Nivel de inseguridad:</p>
              <div className="w-full bg-gray-300 rounded-full h-4 mb-4">
                <div
                  className="bg-red-500 h-4 rounded-full"
                  style={{ width: `${route.riskLevel * 100}%` }}
                ></div>
              </div>
              <p className="text-sm text-gray-500">
                {Math.round(route.riskLevel * 100)}% inseguro
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Routes;
