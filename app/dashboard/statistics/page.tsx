"use client";
import { Sidebar } from "../Sidebar";
import React, { useEffect, useState } from "react";
import { Bar, Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

// Mock data para los gráficos de ejemplo
const crimeData = {
  labels: ["Zona 1", "Zona 2", "Zona 3", "Zona 4", "Zona 5"],
  datasets: [
    {
      label: "Incidentes en el último mes",
      data: [12, 19, 7, 15, 10],
      backgroundColor: "rgba(54, 162, 235, 0.7)",
      borderColor: "rgba(54, 162, 235, 1)",
      borderWidth: 1,
    },
  ],
};

const crimeRateData = {
  labels: ["Robos", "Asaltos", "Vandalismo", "Homicidios", "Otros"],
  datasets: [
    {
      label: "Porcentaje de Crímenes",
      data: [30, 20, 15, 10, 25],
      backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0", "#9966FF"],
      hoverOffset: 4,
    },
  ],
};

// Nueva gráfica de seguridad en zonas de Lima
const safetyLevelData = {
  labels: ["Centro de Lima", "San Isidro", "Miraflores", "Callao", "Barranco"],
  datasets: [
    {
      label: "Nivel de Seguridad (Escala 1-10)",
      data: [3, 7, 8, 2, 6], // Datos ficticios del nivel de seguridad en cada zona
      backgroundColor: "rgba(75, 192, 192, 0.6)",
      borderColor: "rgba(75, 192, 192, 1)",
      borderWidth: 1,
    },
  ],
};

const Statistics = () => {
  return (
    <div className="flex">
      {/* Barra Lateral */}
      <Sidebar userName="Usuario" />

      {/* Contenido del Dashboard */}
      <div className="h-screen flex-1 p-6 bg-gray-100">
        {/* Gráfico de barras de incidencia de crímenes */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">
            Incidencia de Crímenes por Zona
          </h2>
          <div className="h-64 p-4 bg-white shadow-md rounded-lg">
            <Bar
              data={crimeData}
              options={{ responsive: true, maintainAspectRatio: false }}
            />
          </div>
        </div>

        {/* Gráfico circular de tipos de crímenes */}
        <div>
          <h2 className="text-xl font-semibold mb-4">
            Distribución de Tipos de Crímenes
          </h2>
          <div className="h-64 p-4 bg-white shadow-md rounded-lg">
            <Pie
              data={crimeRateData}
              options={{ responsive: true, maintainAspectRatio: false }}
            />
          </div>
        </div>

        {/* Gráfico de barras de seguridad en zonas de Lima */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">
            Nivel de Seguridad en Zonas de Lima
          </h2>
          <div className="h-64 p-4 bg-white shadow-md rounded-lg">
            <Bar
              data={safetyLevelData}
              options={{ responsive: true, maintainAspectRatio: false }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
