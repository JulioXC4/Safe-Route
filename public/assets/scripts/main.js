import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";

function App() {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <header className="bg-[#2B3D49] text-white sticky top-0 z-50">
        <nav className="container mx-auto flex justify-between items-center p-6">
          <div className="flex items-center">
            <img src="/images/logo.svg" alt="SafeRoute Logo" width="50" height="50" />
            <span className="text-2xl font-bold ml-2">SafeRoute</span>
          </div>
          <ul className="hidden md:flex space-x-6">
            <li><a href="#inicio" className="hover:text-gray-300">Inicio</a></li>
            <li><a href="#quienes-somos" className="hover:text-gray-300">¿Quiénes somos?</a></li>
            <li><a href="#testimonios" className="hover:text-gray-300">Testimonios</a></li>
            <li><a href="#descargas" className="hover:text-gray-300">Descargas</a></li>
            <li><a href="#contact-form" className="hover:text-gray-300">Contacto</a></li>
          </ul>
          <button className="hidden md:block bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg">
            Iniciar Sesión
          </button>
          <button className="md:hidden text-white focus:outline-none" onClick={() => setOpen(!open)}>
            <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </nav>
        {open && (
          <div className="md:hidden bg-[#2B3D49]">
            <ul className="flex flex-col space-y-2 p-4">
              <li><a href="#inicio" className="hover:text-gray-300">Inicio</a></li>
              <li><a href="#quienes-somos" className="hover:text-gray-300">¿Quiénes somos?</a></li>
              <li><a href="#testimonios" className="hover:text-gray-300">Testimonios</a></li>
              <li><a href="#descargas" className="hover:text-gray-300">Descargas</a></li>
              <li><a href="#contact-form" className="hover:text-gray-300">Contacto</a></li>
              <li><button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg w-full">Iniciar Sesión</button></li>
            </ul>
          </div>
        )}
      </header>

      <section id="inicio" className="relative flex items-center justify-center h-[90vh] bg-gray-100">
        <div className="absolute inset-0 bg-cover bg-bottom bg-hero-pattern" />
        <div className="absolute inset-0 bg-black opacity-40" />
        <div className="relative text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 p-6">Navega Seguro por Lima con SafeRoute</h1>
          <p className="text-lg md:text-xl p-6 mb-8">Planifica rutas seguras y evita zonas peligrosas en Lima con alertas en tiempo real.</p>
        </div>
      </section>

      <section id="quienes-somos" className="container mx-auto py-2 md:py-16 relative text-white">
        <div className="flex flex-col md:flex-row items-center md:space-x-6 relative">
          <div className="md:absolute md:w-1/2 md:h-96 bg-[#404d55] md:top-1/3 rounded-lg shadow-lg">
            <h2 className="text-4xl font-bold">¿Quiénes somos?</h2>
            <p>Somos un equipo de estudiantes de la UPC comprometidos con la seguridad en Lima.</p>
          </div>
          <div className="md:w-1/2 mt-6 md:mt-0">
            <img src="/images/bg2.jpg" alt="Quienes somos" className="rounded-lg shadow-lg w-full" />
          </div>
        </div>
      </section>

    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
