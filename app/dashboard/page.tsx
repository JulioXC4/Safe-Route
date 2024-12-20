import React from "react";
import { Sidebar } from "./Sidebar";
import General from "./General";

const Dashboard = () => {
  return (
    <div className="flex">
      {/* Barra Lateral */}
      <Sidebar userName="Usuario" />

      {/* Contenido del Dashboard */}
      <div className="h-screen flex-1 p-6 bg-gray-100">
        <General />
      </div>
    </div>
  );
};

export default Dashboard;
