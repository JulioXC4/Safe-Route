"use client";

"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
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

// Interfaces de artículos de noticias
interface Article {
  source: {
    id: string | null;
    name: string;
  };
  author: string | null;
  title: string;
  description: string | null;
  url: string;
  urlToImage: string | null;
  publishedAt: string;
  content: string | null;
}

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

const General: React.FC = () => {
  const [news, setNews] = useState<Article[]>([]);
  const [visibleNewsCount, setVisibleNewsCount] = useState(5);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get<{ articles: Article[] }>(
          `https://newsapi.org/v2/everything?q=robo%20Peru%20OR%20"zonas%20peligrosas"&apiKey=4614d5e63ba54f2aa6e2c52eabc059b3&language=es`
        );
        setNews(response.data.articles);
      } catch (error) {
        console.error("Error fetching news:", error);
      }
    };

    fetchNews();
  }, []);

  const handleShowMore = () => {
    setVisibleNewsCount((prevCount) => prevCount + 5);
  };

  return (
    <div className="p-6 bg-gray-100 max-h-screen overflow-y-auto">
      <h1 className="text-2xl font-semibold mb-6">
        Sección General - Safe Route
      </h1>

      {/* Noticias sobre criminalidad y zonas peligrosas */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Noticias Recientes</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {news.slice(0, visibleNewsCount).map((article, index) => (
            <div
              key={index}
              className="bg-white shadow-md p-4 rounded-lg overflow-hidden"
            >
              <img
                src={article.urlToImage || "https://via.placeholder.com/150"}
                alt="Noticia"
                className="w-full h-40 object-cover mb-3 rounded"
              />
              <h3 className="text-lg font-semibold">{article.title}</h3>
              <p className="text-sm text-gray-600 my-2">
                {article.description || "Sin descripción disponible."}
              </p>
              <a
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                Leer más
              </a>
            </div>
          ))}
        </div>
        {visibleNewsCount < news.length && (
          <button
            onClick={handleShowMore}
            className="mt-4 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg"
          >
            Ver más noticias
          </button>
        )}
      </div>

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
    </div>
  );
};

export default General;
