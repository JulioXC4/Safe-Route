import React from "react";
import { Sidebar } from "../Sidebar";

const discussions = [
  {
    title: "Cómo evitar robos en transporte público",
    author: "Juan Pérez",
    content:
      "El transporte público es uno de los lugares más comunes para robos en Lima. ¿Cuáles son sus consejos para protegerse?",
    comments: 12,
  },
  {
    title: "Mejores prácticas para caminar de noche en zonas inseguras",
    author: "Ana Gutiérrez",
    content:
      "Siempre trato de evitar caminar sola de noche, pero a veces es inevitable. ¿Qué recomendaciones pueden compartir?",
    comments: 8,
  },
  {
    title: "Aplicaciones de seguridad para alertar a familiares",
    author: "Carlos Ramos",
    content:
      "Estoy buscando apps para alertar a mis familiares en caso de emergencia. ¿Alguien recomienda alguna?",
    comments: 15,
  },
  {
    title: "Rutas seguras para ciclistas en Lima",
    author: "Marta López",
    content:
      "¿Qué rutas son seguras para los ciclistas en Lima? Me preocupa la falta de ciclovías y la inseguridad en algunas zonas.",
    comments: 7,
  },
  {
    title: "Qué hacer si eres víctima de un robo",
    author: "Luis Castro",
    content:
      "¿Cuáles son los pasos a seguir después de un robo? Estoy pensando en cómo actuar de manera más segura.",
    comments: 10,
  },
  {
    title: "Consejos para evitar el fraude electrónico",
    author: "Sofía Quispe",
    content:
      "Recientemente he oído de varios casos de fraude en Perú. ¿Qué consejos pueden dar para protegerse?",
    comments: 18,
  },
  {
    title: "Inseguridad en zonas comerciales de Lima",
    author: "Roberto Torres",
    content:
      "Las zonas comerciales suelen ser de riesgo. ¿Qué precauciones deben tomarse al visitar centros comerciales?",
    comments: 6,
  },
  {
    title: "Evitar el robo de vehículos en áreas concurridas",
    author: "Daniela Ríos",
    content:
      "Los robos de autos son muy comunes en ciertas zonas. ¿Algún consejo sobre cómo proteger mi vehículo?",
    comments: 13,
  },
];

const Forum = () => {
  return (
    <div className="flex">
      <Sidebar userName="Usuario" />
      <div className="max-h-screen overflow-y-auto flex-1 p-6 bg-gray-100 rounded">
        <h1 className="text-3xl font-semibold mb-6">
          Foro de Seguridad - Safe Route
        </h1>
        <p className="text-gray-700 mb-4">
          Explora temas sobre seguridad en Perú y comparte tus experiencias y
          consejos para mantenerse seguro.
        </p>
        <div className="space-y-4">
          {discussions.map((discussion, index) => (
            <div key={index} className="p-4 bg-white rounded shadow-md">
              <h2 className="text-xl font-semibold text-blue-700 mb-2">
                {discussion.title}
              </h2>
              <p className="text-sm text-gray-600 mb-2">
                Publicado por {discussion.author}
              </p>
              <p className="text-gray-800 mb-4">{discussion.content}</p>
              <p className="text-sm text-gray-500">
                {discussion.comments} comentarios
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Forum;
