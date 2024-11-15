"use client";

"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
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


const General: React.FC = () => {
  const [news, setNews] = useState<Article[]>([]);
  const [visibleNewsCount, setVisibleNewsCount] = useState(3);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get<{ articles: Article[] }>(
          `https://newsapi.org/v2/everything?q=robo%20Peru%20OR%20"zonas%20peligrosas"&apiKey=${process.env.NEXT_PUBLIC_NEWS_API}&language=es`
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
    <div className=" p-6 bg-gray-100 max-h-screen overflow-y-auto">
      <h1 className="text-2xl font-semibold mb-6">
        Sección General - Safe Route
      </h1>
      {/* Mensaje de bienvenida para el usuario */}
      <div className="bg-white shadow-md p-6 rounded-lg mb-8">
        <h2 className="text-xl font-semibold mb-4">
          ¡Bienvenido a Safe Route!
        </h2>
        <p className="text-gray-600 mb-4">
          En Safe Route, te ayudamos a conocer los niveles de peligro y
          seguridad al moverte de un lugar a otro.
        </p>
        <p className="text-gray-600 mb-4">
          Consulta las zonas más seguras y peligrosas, y mantente informado con
          nuestras noticias sobre criminalidad.
        </p>
        <a
          href="/mapa" // Cambia la URL si es necesario
          className="text-blue-600 hover:underline font-semibold"
        >
          Explorar el mapa y ver rutas seguras
        </a>
      </div>
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
    </div>
  );
};

export default General;
