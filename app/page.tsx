"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const [open, setOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isRegistering, setIsRegistering] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => {
    setIsOpen(false);
    setIsRegistering(false);
  };

  const switchToRegister = () => setIsRegistering(true);
  const switchToLogin = () => setIsRegistering(false);
  return (
    <div className="bg-gray-50 min-h-screen">
      <header className="bg-[#2B3D49] text-white sticky top-0 z-50">
        <nav className="container mx-auto flex justify-between items-center p-6">
          <div className="flex items-center">
            <Image
              src="/assets/images/logo.svg"
              alt="SafeRoute Logo"
              width={50}
              height={50}
            />
            <span className="text-2xl font-bold ml-2">SafeRoute</span>
          </div>
          {/* Menú de navegación para pantallas medianas y grandes */}
          <ul className="hidden md:flex space-x-6">
            <li>
              <a href="#inicio" className="hover:text-gray-300">
                Inicio
              </a>
            </li>
            <li>
              <a href="#quienes-somos" className="hover:text-gray-300">
                ¿Quiénes somos?
              </a>
            </li>
            <li>
              <a href="#testimonios" className="hover:text-gray-300">
                Testimonios
              </a>
            </li>
            <li>
              <a href="#descargas" className="hover:text-gray-300">
                Descargas
              </a>
            </li>
            <li>
              <a href="#contact-form" className="hover:text-gray-300">
                Contacto
              </a>
            </li>
          </ul>

          {/* Botón de inicio de sesión para pantallas medianas y grandes */}
          <div className="hidden md:block">
            <button
              onClick={openModal}
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg"
            >
              Iniciar Sesión
            </button>
          </div>

          {/* Botón hamburguesa para menú móvil */}
          <div className="md:hidden">
            <button
              className="text-white focus:outline-none"
              onClick={() => setOpen(!open)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>
        </nav>

        {/* Menú desplegable para pantallas pequeñas */}
        <div className={`md:hidden ${open ? "block" : "hidden"} bg-[#2B3D49]`}>
          <ul className="flex flex-col space-y-2 p-4">
            <li>
              <a href="#inicio" className="hover:text-gray-300">
                Inicio
              </a>
            </li>
            <li>
              <a href="#quienes-somos" className="hover:text-gray-300">
                ¿Quiénes somos?
              </a>
            </li>
            <li>
              <a href="#testimonios" className="hover:text-gray-300">
                Testimonios
              </a>
            </li>
            <li>
              <a href="#descargas" className="hover:text-gray-300">
                Descargas
              </a>
            </li>
            <li>
              <a href="#contact-form" className="hover:text-gray-300">
                Contacto
              </a>
            </li>
            {/* Botón de inicio de sesión para pantallas pequeñas */}
            <li>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg w-full">
                Iniciar Sesión
              </button>
            </li>
          </ul>
        </div>
      </header>

      <section
        id="inicio"
        className="relative flex items-center justify-center h-[90vh] bg-gray-100"
      >
        <div className="absolute inset-0 bg-cover bg-bottom bg-hero-pattern" />
        <div className="absolute inset-0 bg-black opacity-40" />

        <div className="flex flex-col justify-center items-center relative text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 p-6 w-full max-w-2xl">
            Navega Seguro por Lima con SafeRoute
          </h1>
          <p className="text-lg md:text-xl p-6 mb-8 w-full max-w-2xl">
            Planifica rutas seguras y evita zonas peligrosas en Lima con alertas
            en tiempo real, todo desde nuestra app gratuita y fácil de usar.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl px-4">
            {/* Tarjeta 1 */}
            <div className="hidden md:flex bg-[#404d55] text-white p-6 rounded-lg shadow-lg flex-col items-center">
              <div className="bg-blue-100 p-4 rounded-full mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-16 w-16 text-blue-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 4v16m8-8H4"
                  />
                </svg>
              </div>
              <h3 className="font-bold text-xl mb-2">Rutas Seguras</h3>
              <p className="text-center">
                Explora rutas seguras a lo largo de la ciudad con datos
                actualizados en tiempo real.
              </p>
            </div>

            {/* Tarjeta 2 */}
            <div className="hidden md:flex bg-[#404d55] text-white p-6 rounded-lg shadow-lg flex-col items-center">
              <div className="bg-red-100 p-4 rounded-full mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-16 w-16 text-red-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 16h-1v-4H8l4-4m0 0l4 4h-3v4h-1z"
                  />
                </svg>
              </div>
              <h3 className="font-bold text-xl mb-2">Alertas en Tiempo Real</h3>
              <p className="text-center">
                Recibe alertas instantáneas sobre zonas de riesgo para moverte
                con mayor seguridad.
              </p>
            </div>

            {/* Tarjeta 3 */}
            <div className="hidden md:flex bg-[#404d55] text-white p-6 rounded-lg shadow-lg flex-col items-center">
              <div className="bg-green-100 p-4 rounded-full mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-16 w-16 text-green-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <h3 className="font-bold text-xl mb-2">Fácil de Usar</h3>
              <p className="text-center">
                Nuestra app es intuitiva y sencilla, permitiendo a todos moverse
                con confianza.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        id="quienes-somos"
        className="container mx-auto py-2 md:py-16 relative"
      >
        <div className="flex flex-col md:flex-row items-center md:space-x-6 relative text-white ">
          <div className="md:absolute md:w-1/2 md:h-96 bg-[#404d55] md:top-1/3 top-0 right-10 md:right-1/4 z-40 rounded-lg shadow-lg flex flex-col justify-around items-center">
            <h2 className="text-4xl font-bold">¿Quiénes somos?</h2>
            <p className="font-extralight text-md text-balance text-center px-6">
              Somos un equipo de estudiantes de la UPC comprometidos con mejorar
              la seguridad en Lima. A través de SafeRoute, utilizamos tecnología
              innovadora para ayudar a los ciudadanos y turistas a desplazarse
              de manera más segura, ofreciendo información precisa y en tiempo
              real sobre las zonas de mayor riesgo en la ciudad. Nuestro
              objetivo es contribuir a crear un entorno urbano más seguro para
              todos.
            </p>
            <ul className="font-extralight list-none list-inside space-y-4">
              <li>Compromiso con la seguridad</li>
              <li>Información en tiempo real</li>
              <li>Tecnología de geolocalización avanzada</li>
            </ul>
          </div>
          <div className="md:w-1/2 mt-6 md:mt-0 z-30 ">
            <img
              src="/assets/images/bg2.jpg"
              alt="Quienes somos"
              className="rounded-lg shadow-lg w-full"
            />
          </div>
        </div>
      </section>

      <section id="testimonios" className="bg-gray-100 py-12">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Testimonios</h2>
          <p className="text-gray-700 mb-12">
            Escucha lo que nuestros usuarios dicen sobre cómo SafeRoute ha
            mejorado su día a día.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <img
                src="/assets/images/p1.jpg"
                alt="María R."
                className="w-24 h-24 mx-auto rounded-full mb-4"
              />
              <h3 className="text-xl font-bold">Carlos T.</h3>
              <p className="text-gray-600">
                &quot; SafeRoute me ha permitido planificar mis rutas diarias
                con seguridad. Ahora me siento mucho más segura caminando por la
                ciudad. &quot;
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <img
                src="/assets/images/p2.jpg"
                alt="Carlos T."
                className="w-24 h-24 mx-auto rounded-full mb-4"
              />
              <h3 className="text-xl font-bold">María R.</h3>
              <p className="text-gray-600">
                &quot; Como turista, la app fue indispensable para moverme por
                Lima. Las alertas me ayudaron a evitar áreas peligrosas. &quot;
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <img
                src="/assets/images/p3.jpg"
                alt="Ana G."
                className="w-24 h-24 mx-auto rounded-full mb-4"
              />
              <h3 className="text-xl font-bold">Ana G.</h3>
              <p className="text-gray-600">
                &quot; La información que ofrece SafeRoute es precisa y fácil de
                entender. Es genial saber que puedo contar con una herramienta.
                &quot;
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        id="descargas"
        className="bg-[#404d55] py-12 text-white text-center relative"
      >
        <div className="absolute inset-0" />
        <h2 className="text-4xl font-bold mb-6 relative z-10">
          Descarga SafeRoute y Mantente Seguro
        </h2>
        <p className="mb-6 text-lg relative z-10">
          Accede a rutas más seguras y alertas en tiempo real desde tu celular.
          Disponible para iOS y Android.
        </p>
        <div className="flex justify-center space-x-6 relative z-10 flex-wrap">
          <a
            href="https://apps.apple.com/app/idXXXXXXXXX" // Reemplaza con tu enlace de App Store
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            <img
              src="/assets/images/bt1.svg"
              alt="Descargar en App Store"
              className="h-12 w-auto p-2 bg-white rounded-lg"
            />
          </a>
          <a
            href="https://play.google.com/store/apps/details?id=XXXXXXXXX" // Reemplaza con tu enlace de Google Play
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
          >
            <img
              src="/assets/images/bt2.svg"
              alt="Descargar en Google Play"
              className="h-12 w-auto p-2 bg-white rounded-lg"
            />
          </a>
        </div>
      </section>

      <section id="contacto" className="bg-gray-100 py-12">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Contáctanos</h2>
          <p className="text-gray-700 mb-8">
            Estamos para brindarte toda la información y atención que necesites.
          </p>

          {/* Contenedor principal de dos columnas */}
          <div className="flex flex-col md:flex-row md:space-x-6">
            {/* Columna izquierda - Formulario */}
            <div className="md:w-1/2 bg-white p-6 rounded-lg shadow-lg mb-8 md:mb-0">
              <form>
                <div className="mb-4">
                  <label
                    htmlFor="name"
                    className="block text-gray-700 font-bold mb-2"
                  >
                    Nombre:
                  </label>
                  <input
                    type="text"
                    id="name"
                    placeholder="Tu nombre"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="email"
                    className="block text-gray-700 font-bold mb-2"
                  >
                    Correo electrónico:
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="Tu correo electrónico"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="message"
                    className="block text-gray-700 font-bold mb-2"
                  >
                    Mensaje:
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    placeholder="Escribe tu mensaje"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 focus:outline-none"
                >
                  Enviar Mensaje
                </button>
              </form>
            </div>

            {/* Columna derecha - Información de contacto y mapa */}
            <div className="md:w-1/2 space-y-4">
              <div className="text-left">
                <p>
                  <strong>Email:</strong>{" "}
                  <a href="mailto:info@saferoute.com" className="text-blue-600">
                    info@saferoute.com
                  </a>
                </p>
                <p>
                  <strong>Teléfono:</strong> +54 9 123456789
                </p>
                <p>
                  <strong>Dirección:</strong> Av. Principal 468, Lima, Perú
                </p>
              </div>
              <div>
                <iframe
                  className="w-full h-64 rounded-lg"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.4604923706616!2d-77.03449248501124!3d-12.046373091936842!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c8f6aa8455b1%3A0x7402c482dc01e2fa!2sAv.%20Principal%20468%2C%20San%20Isidro%2015073%2C%20Per%C3%BA!5e0!3m2!1sen!2sus!4v1601405425336!5m2!1sen!2sus"
                  aria-hidden="false"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-[#2B3D49] text-white py-12">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-start px-4">
          <div className="mb-6 md:mb-0 md:w-1/3">
            <Image
              src="/assets/images/logo.svg"
              alt="SafeRoute Logo"
              width={60}
              height={60}
            />
            <p className="text-sm mt-4 mb-4">
              Con SafeRoute, navega con confianza y seguridad en cada paso que
              das. Tu bienestar es nuestra prioridad, 24/7.
            </p>
            <p className="text-sm">
              &copy; {new Date().getFullYear()} SafeRoute. Todos los derechos
              reservados.
            </p>
          </div>
          <div className="mb-6 md:mb-0 md:w-1/3">
            <h4 className="text-lg font-semibold mb-2">Enlaces Útiles</h4>
            <div className="space-y-2 flex flex-col">
              <a
                href="#"
                className="hover:text-gray-400 transition duration-200"
              >
                Políticas de Privacidad
              </a>
              <a
                href="#"
                className="hover:text-gray-400 transition duration-200"
              >
                Términos de Servicio
              </a>
              <a
                href="#"
                className="hover:text-gray-400 transition duration-200"
              >
                Soporte
              </a>
              <a
                href="#"
                className="hover:text-gray-400 transition duration-200"
              >
                Contacto
              </a>
            </div>
          </div>
          <div className="md:w-1/3">
            <h4 className="text-lg font-semibold mb-2">Síguenos</h4>
            <div className="flex space-x-4">
              <a
                href="#"
                className="hover:text-gray-400 transition duration-200"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
              <a
                href="#"
                className="hover:text-gray-400 transition duration-200"
              >
                <i className="fab fa-twitter"></i>
              </a>
              <a
                href="#"
                className="hover:text-gray-400 transition duration-200"
              >
                <i className="fab fa-instagram"></i>
              </a>
              <a
                href="#"
                className="hover:text-gray-400 transition duration-200"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
        </div>
      </footer>
      {/* Modal de inicio de sesión / registro */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center z-50"
          onClick={closeModal}
        >
          <div
            className="bg-white p-6 rounded-lg shadow-lg w-full max-w-sm h-[500px] flex flex-col justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            {isRegistering ? (
              // Formulario de registro
              <div>
                <h1 className="text-4xl text-center font-extrabold text-[#2B3D49] pb-4">
                  Safe Route
                </h1>
                <h2 className="text-2xl font-semibold mb-4">Registrarse</h2>

                <form className="space-y-4">
                  <div>
                    <label
                      htmlFor="username"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Usuario
                    </label>
                    <input
                      type="text"
                      id="username"
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Tu usuario"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Correo Electrónico
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Tu correo electrónico"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="password"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Contraseña
                    </label>
                    <input
                      type="password"
                      id="password"
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Tu contraseña"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg"
                  >
                    <Link href={"/dashboard"}>Registrarse</Link>
                  </button>
                </form>

                <button
                  onClick={switchToLogin}
                  className="mt-4 text-blue-500 hover:text-blue-700"
                >
                  ← Atrás a Iniciar Sesión
                </button>
              </div>
            ) : (
              // Formulario de inicio de sesión
              <div>
                <h1 className="text-4xl text-center font-extrabold text-[#2B3D49] pb-4">
                  Safe Route
                </h1>
                <h2 className="text-2xl font-semibold mb-4">Iniciar Sesión</h2>

                <form className="space-y-4">
                  <div>
                    <label
                      htmlFor="username"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Usuario
                    </label>
                    <input
                      type="text"
                      id="username"
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Tu usuario"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="password"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Contraseña
                    </label>
                    <input
                      type="password"
                      id="password"
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Tu contraseña"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg"
                  >
                    <Link href={"/dashboard"}>Iniciar Sesión</Link>
                  </button>
                </form>

                <div className="mt-4">
                  <button className="w-full flex items-center justify-center bg-red-500 hover:bg-red-600 text-white py-2 rounded-lg">
                    <svg
                      className="w-5 h-5 mr-2"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 48 48"
                    >
                      <path
                        fill="#EA4335"
                        d="M24 9.5c3.09 0 5.47 1.19 6.78 2.17l4.97-4.97C32.69 3.84 28.73 2 24 2 15.81 2 9.06 6.59 6.32 13.41l5.91 4.6C13.99 12.62 18.61 9.5 24 9.5z"
                      />
                      <path
                        fill="#34A853"
                        d="M48 24.56c0-1.76-.15-3.52-.45-5.22H24v9.88h13.52c-.62 3.25-2.34 6.08-5 8.01l5.91 4.6C42.69 37.5 48 31.7 48 24.56z"
                      />
                      <path
                        fill="#4A90E2"
                        d="M6.32 13.41c-.54 1.52-.84 3.14-.84 4.86 0 1.72.3 3.34.84 4.86l5.91-4.6c-.38-1.16-.59-2.4-.59-3.74 0-1.33.21-2.57.59-3.74l-5.91-4.6z"
                      />
                      <path
                        fill="#FBBC05"
                        d="M24 48c6.47 0 11.89-2.12 15.88-5.76l-5.91-4.6C31.11 40.32 27.79 41.5 24 41.5c-5.39 0-10.01-3.12-12.68-7.91l-5.91 4.6C9.06 41.41 15.81 46 24 46z"
                      />
                    </svg>
                    <Link href={"/dashboard"}>Iniciar con Google</Link>
                  </button>
                </div>

                <button
                  onClick={switchToRegister}
                  className="mt-4 text-blue-500 hover:text-blue-700"
                >
                  ¿No tienes cuenta? Regístrate
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

/* 
Julio Castro
Responsable de la mayor parte del proyecto, incluyendo la estructuración inicial del código, integración de componentes, manejo de hooks como useState, navegación en pantallas móviles y escritorio, gestión de imágenes, y el despliegue final de la aplicación.
test2
*/

/* 
Sergio Aguirre
Diseño de los colores en la landing pag, navegación en pantallas móviles y escritorio 
*/

/* 
Sebastian arotinco
Diseñó la sección de "Testimonios" con estilos adaptativos, además de implementar los componentes de usuario en formato de tarjeta.
*/

/* 
Jose Castillo
Ajustar estilo CSS para alinear imágenes correctamente
*/

/* 
Alessandra Cury
Se encargó del diseño visual y estilización de las secciones de "Quienes Somos" y "Descargas", asegurando una experiencia de usuario coherente.
*/

/* 
Domenico Casaretto
Contribuyo en la seccion "Resumen" de la pagina web. 

*/

/* 
Sebastian Montañez
d
*/

/* 
Diego Peralta
Implementó la sección de "Rutas Seguras", manejando los componentes de tarjetas informativas con iconos SVG y la adaptación para pantallas grandes y pequeñas.
*/
