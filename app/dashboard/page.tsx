import React from "react";
import { Sidebar } from "./Sidebar";
import General from "./General";

const Dashboard = () => {
  return (
    <div className="flex">
      {/* Barra Lateral */}
      <Sidebar userName="Nombre del Usuario" />

      {/* Contenido del Dashboard */}
      <div className="flex-1 p-6 bg-gray-100">
        <General />
      </div>
    </div>
  );
};

export default Dashboard;
