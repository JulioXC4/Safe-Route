"use client";
import React, { useState } from "react";
import {
  GoogleMap,
  LoadScript,
  DirectionsRenderer,
  Marker,
} from "@react-google-maps/api";
import { Sidebar } from "../Sidebar";

const Route = () => {
  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");
  const [directions, setDirections] =
    useState<google.maps.DirectionsResult | null>(null);
  const [originCoords, setOriginCoords] =
    useState<google.maps.LatLngLiteral | null>(null);
  const [destinationCoords, setDestinationCoords] =
    useState<google.maps.LatLngLiteral | null>(null);
  const [crimeIndex, setCrimeIndex] = useState("Moderado"); // Mock del índice de criminalidad
  const [showCrimeIndex, setShowCrimeIndex] = useState(false); // Mock del índice de criminalidad
  const handleGeocode = (address: string, isOrigin: boolean) => {
    const geocoder = new window.google.maps.Geocoder();
    geocoder.geocode({ address: address }, (results, status) => {
      if (status === "OK" && results && results[0]) {
        const location = results[0].geometry.location.toJSON();
        if (isOrigin) {
          setOriginCoords(location);
        } else {
          setDestinationCoords(location);
        }
      } else {
        console.error("Error al obtener coordenadas", status);
      }
    });
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setShowCrimeIndex(true);
    const directionsService = new window.google.maps.DirectionsService();
    directionsService.route(
      {
        origin: origin,
        destination: destination,
        travelMode: window.google.maps.TravelMode.DRIVING,
      },
      (result, status) => {
        if (status === "OK" && result) {
          setDirections(result);
          setOriginCoords(result.routes[0].legs[0].start_location.toJSON());
          setDestinationCoords(result.routes[0].legs[0].end_location.toJSON());

          // Simulación de índice de criminalidad basado en la ruta
          setCrimeIndex("Alto"); // Puedes cambiar la lógica de asignación según la ubicación
        } else {
          console.error("Error al obtener las direcciones", status);
        }
      }
    );
  };

  return (
    <div className="flex">
      <Sidebar userName="Usuario" />
      <div className="max-h-screen overflow-y-auto flex-1 route-container p-6">
        <h1 className="text-2xl font-semibold mb-4">Planea tu Ruta</h1>

        {/* Formulario de Origen y Destino */}
        <form onSubmit={handleSubmit} className="mb-4">
          <div className="flex space-x-4">
            <div className="flex-1">
              <label
                htmlFor="origin"
                className="block mb-2 text-sm font-medium"
              >
                Origen
              </label>
              <input
                type="text"
                id="origin"
                value={origin}
                onChange={(e) => {
                  setOrigin(e.target.value);
                  handleGeocode(e.target.value, true);
                }}
                className="w-full p-2 rounded border"
                placeholder="Ingresa el origen"
              />
            </div>
            <div className="flex-1">
              <label
                htmlFor="destination"
                className="block mb-2 text-sm font-medium"
              >
                Destino
              </label>
              <input
                type="text"
                id="destination"
                value={destination}
                onChange={(e) => {
                  setDestination(e.target.value);
                  handleGeocode(e.target.value, false);
                }}
                className="w-full p-2 rounded border"
                placeholder="Ingresa el destino"
              />
            </div>
          </div>
          <button
            type="submit"
            className="mt-4 px-6 py-2 bg-blue-500 text-white rounded"
          >
            Ver Ruta
          </button>
        </form>

        {/* Índice de Criminalidad Simulado */}
        {showCrimeIndex && (
          <div className="mb-4">
            <h2 className="text-lg font-semibold">Índice de Criminalidad</h2>
            <div
              className={`crime-index-bar ${crimeIndex?.toLowerCase()} p-4 rounded bg-yellow-500 text-black`}
            >
              <p>
                El nivel de inseguridad desde <strong>{origin}</strong> hasta{" "}
                <strong>{destination}</strong> es <strong>{crimeIndex}</strong>.
              </p>
              <div className="mt-4">
                <h3 className="font-semibold">
                  Detalles del índice de criminalidad:
                </h3>
                <ul className="list-disc ml-6 mt-2">
                  <li>
                    <strong>Estadísticas generales:</strong> Se han reportado
                    incidentes en un 35% de las áreas cercanas a esta ruta.
                  </li>
                  <li>
                    <strong>Áreas de alto riesgo:</strong> Se identificaron
                    zonas críticas en <strong>Calle 5</strong> y{" "}
                    <strong>Avenida Principal</strong>.
                  </li>
                  <li>
                    <strong>Horarios críticos:</strong> Mayor actividad
                    delictiva registrada entre las 7 PM y las 11 PM.
                  </li>
                </ul>
                <p className="mt-2">
                  Recuerda seguir las <strong>rutas principales</strong> y
                  evitar detenerte en lugares desolados.
                </p>
              </div>
            </div>
          </div>
        )}
        {/* Google Maps */}
        <LoadScript
          googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || ""}
        >
          <GoogleMap
            id="google-map"
            mapContainerStyle={{ width: "100%", height: "400px" }}
            center={{ lat: -12.0464, lng: -77.0428 }}
            zoom={12}
          >
            {directions && <DirectionsRenderer directions={directions} />}
            {originCoords && <Marker position={originCoords} label="A" />}
            {destinationCoords && (
              <Marker position={destinationCoords} label="B" />
            )}
          </GoogleMap>
        </LoadScript>

        {/* Consejos de Seguridad */}
        <div className="security-tips mt-6 p-4 bg-gray-800 rounded">
          <h2 className="text-xl text-white font-semibold mb-4">
            Consejos de Seguridad
          </h2>
          <div className="text-white">
            <p>
              <strong>Niveles de Criminalidad:</strong> La ruta tiene un nivel
              de criminalidad {crimeIndex.toLowerCase()} en algunas áreas.
            </p>
            <ul className="mt-2 space-y-2">
              <li>Evita detenerte en áreas deshabitadas o poco iluminadas.</li>
              <li>Sigue siempre las rutas más transitadas y conocidas.</li>
              <li>
                Si sientes que algo no está bien, contacta con la policía local
                o cambia tu ruta.
              </li>
              <li>
                Mantén tus pertenencias siempre a la vista y evita mostrar
                objetos de valor.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Route;
