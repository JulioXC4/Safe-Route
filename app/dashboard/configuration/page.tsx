"use client";
import React, { useState } from "react";
import { Sidebar } from "../Sidebar";

const Configuration = () => {
  // Estado de las configuraciones
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [riskThreshold, setRiskThreshold] = useState(50); // Nivel de riesgo en porcentaje
  const [darkMode, setDarkMode] = useState(false);
  const [safeZonesEnabled, setSafeZonesEnabled] = useState(true);
  const [realTimeUpdates, setRealTimeUpdates] = useState(true);

  return (
    <div className="flex">
      <Sidebar userName="Usuario" />
      <div className="max-h-screen overflow-y-auto flex-1 p-6 bg-gray-100 rounded">
        <h1 className="text-3xl font-semibold mb-6">
          Configuración de Safe Route
        </h1>
        <p className="text-gray-700 mb-8">
          Personaliza la aplicación según tus preferencias y necesidades de
          seguridad.
        </p>

        {/* Configuración de Notificaciones */}
        <div className="config-section mb-6 p-4 bg-white rounded shadow-md">
          <h2 className="text-2xl font-semibold text-blue-700 mb-2">
            Notificaciones
          </h2>
          <div className="flex items-center space-x-4 mb-4">
            <input
              type="checkbox"
              checked={notificationsEnabled}
              onChange={() => setNotificationsEnabled(!notificationsEnabled)}
              className="h-5 w-5 text-blue-600"
            />
            <label className="text-gray-700">Activar Notificaciones</label>
          </div>
          <p className="text-gray-500 text-sm">
            Recibe alertas de seguridad, cambios en el nivel de riesgo y
            actualizaciones de tus rutas.
          </p>
        </div>

        {/* Configuración de Nivel de Riesgo */}
        <div className="config-section mb-6 p-4 bg-white rounded shadow-md">
          <h2 className="text-2xl font-semibold text-blue-700 mb-2">
            Nivel de Riesgo
          </h2>
          <label htmlFor="riskThreshold" className="block text-gray-700 mb-2">
            Umbral de Riesgo (%)
          </label>
          <input
            type="range"
            id="riskThreshold"
            value={riskThreshold}
            onChange={(e) => setRiskThreshold(Number(e.target.value))}
            min="0"
            max="100"
            className="w-full mb-2"
          />
          <p className="text-gray-500 text-sm">
            Nivel de riesgo mínimo para recibir alertas: {riskThreshold}%
          </p>
        </div>

        {/* Configuración de Modo Oscuro */}
        <div className="config-section mb-6 p-4 bg-white rounded shadow-md">
          <h2 className="text-2xl font-semibold text-blue-700 mb-2">
            Modo Oscuro
          </h2>
          <div className="flex items-center space-x-4 mb-4">
            <input
              type="checkbox"
              checked={darkMode}
              onChange={() => setDarkMode(!darkMode)}
              className="h-5 w-5 text-blue-600"
            />
            <label className="text-gray-700">Activar Modo Oscuro</label>
          </div>
          <p className="text-gray-500 text-sm">
            Cambia la apariencia de la aplicación para reducir el cansancio
            visual en entornos oscuros.
          </p>
        </div>

        {/* Configuración de Zonas Seguras */}
        <div className="config-section mb-6 p-4 bg-white rounded shadow-md">
          <h2 className="text-2xl font-semibold text-blue-700 mb-2">
            Zonas Seguras
          </h2>
          <div className="flex items-center space-x-4 mb-4">
            <input
              type="checkbox"
              checked={safeZonesEnabled}
              onChange={() => setSafeZonesEnabled(!safeZonesEnabled)}
              className="h-5 w-5 text-blue-600"
            />
            <label className="text-gray-700">Habilitar Zonas Seguras</label>
          </div>
          <p className="text-gray-500 text-sm">
            Visualiza zonas seguras en el mapa para planificar rutas más
            protegidas.
          </p>
        </div>

        {/* Configuración de Actualizaciones en Tiempo Real */}
        <div className="config-section mb-6 p-4 bg-white rounded shadow-md">
          <h2 className="text-2xl font-semibold text-blue-700 mb-2">
            Actualizaciones en Tiempo Real
          </h2>
          <div className="flex items-center space-x-4 mb-4">
            <input
              type="checkbox"
              checked={realTimeUpdates}
              onChange={() => setRealTimeUpdates(!realTimeUpdates)}
              className="h-5 w-5 text-blue-600"
            />
            <label className="text-gray-700">
              Activar Actualizaciones en Tiempo Real
            </label>
          </div>
          <p className="text-gray-500 text-sm">
            Recibe información de seguridad en tiempo real para evitar rutas
            riesgosas.
          </p>
        </div>

        {/* Configuración de Privacidad */}
        <div className="config-section mb-6 p-4 bg-white rounded shadow-md">
          <h2 className="text-2xl font-semibold text-blue-700 mb-2">
            Privacidad
          </h2>
          <div className="flex flex-col space-y-2">
            <label className="flex items-center">
              <input type="checkbox" className="h-5 w-5 text-blue-600" />
              <span className="ml-2 text-gray-700">
                Habilitar seguimiento de ubicación para rutas
              </span>
            </label>
            <label className="flex items-center">
              <input type="checkbox" className="h-5 w-5 text-blue-600" />
              <span className="ml-2 text-gray-700">
                Compartir rutas seguras con contactos de confianza
              </span>
            </label>
          </div>
          <p className="text-gray-500 text-sm mt-2">
            Controla el acceso a tu ubicación y decide cómo compartir rutas con
            personas de confianza.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Configuration;
