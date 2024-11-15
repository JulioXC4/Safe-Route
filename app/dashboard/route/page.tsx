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

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

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
        } else {
          console.error("Error getting directions", status);
        }
      }
    );
  };

  return (
    <div className="flex">
      <Sidebar userName="Usuario" />
      <div className="h-screen flex-1 route-container p-6">
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
                onChange={(e) => setOrigin(e.target.value)}
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
                onChange={(e) => setDestination(e.target.value)}
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
            {/* Renderiza la ruta si existe */}
            {directions && <DirectionsRenderer directions={directions} />}

            {/* Marcador de origen */}
            {originCoords && <Marker position={originCoords} label="A" />}

            {/* Marcador de destino */}
            {destinationCoords && (
              <Marker position={destinationCoords} label="B" />
            )}
          </GoogleMap>
        </LoadScript>

        {/* Simulación de Criminalidad y Consejos */}
        <div className="security-tips mt-6 p-4 bg-gray-800 rounded">
          <h2 className="text-xl text-white font-semibold mb-4">
            Consejos de Seguridad
          </h2>
          <div className="text-white">
            <p>
              <strong>Niveles de Criminalidad:</strong> La ruta tiene un nivel
              de criminalidad moderado en algunas áreas. Te recomendamos estar
              atento en las zonas con mayor afluencia de personas.
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
