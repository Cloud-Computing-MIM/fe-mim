import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaCalendarDay } from "react-icons/fa6";
import { FcSearch } from "react-icons/fc"; // Asegúrate de tener este ícono importado también
import { IoHome } from "react-icons/io5";
import { Card } from "../components/layout/card";

export default function CalendarPage() {
  const [semester, setSemester] = useState("2024-A"); // Para almacenar el semestre seleccionado
  const [searchTerm, setSearchTerm] = useState(""); // Para el campo de búsqueda
  const navigate = useNavigate(); // Hook para la navegación

  const returnToMainPage = () => {
    navigate("/"); // Navegar a la página principal
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Comienza con el encabezado (Header) */}
      <header className="bg-blue-200 text-white p-4 w-full flex items-center justify-between">
        <div className="flex items-center space-x-4">
          {/* Logo de MIM */}
          <img src="/public/MIM_2.png" alt="Logo MIM" className="h-20 w-20" />
          <h1 className="text-5xl mt-2 font-thin">MIM</h1>
          <h2 className="text-2xl font-thin">Modulo de Información Marista</h2>
        </div>

        {/* Barra de búsqueda */}
        <div className="flex items-center space-x-2">
          <input
            type="text"
            placeholder="Buscar..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="border border-gray-300 p-2 rounded-lg w-80 text-black shadow-lg"
          />
          <button className="bg-blue-400 text-white p-2 rounded-lg hover:bg-blue-600 transition">
            <FcSearch className="text-3xl" />
          </button>
        </div>

        {/* Botón de navegación a la página principal */}
        <button
          onClick={returnToMainPage}
          className="inline-block bg-blue-500 text-white p-2 rounded-full text-xl hover:bg-blue-600 shadow-lg transition"
        >
          <IoHome className="text-xl" />
        </button>
      </header>

      {/* Contenido principal de la página */}
      <div className="p-4">
        {/*Hacemos un card para mas bonito */}
        <Card className="p-6 shadow-lg mb-6">
          <h1 className="text-3xl font-thin text-5xl text-center mb-6 flex items-center justify-center text-blue-900 ">
            <FaCalendarDay className="ml-2 text-5xl relative right-5" />
            <span className="mr-2">Calendario Ciclo Escolar 2024-2025</span>
          </h1>

          {/* Botones para seleccionar semestre */}
          <div className="flex justify-center mb-6">
            <button
              onClick={() => setSemester("2024-A")}
              className={`p-2 px-6 rounded-lg mr-4 font-thin ${semester === "2024-A" ? "bg-blue-300 text-white" : "bg-gray-200"}`}
            >
              2024-A
            </button>
            <button
              onClick={() => setSemester("2024-B")}
              className={`p-2 px-6 rounded-lg font-thin ${semester === "2024-B" ? "bg-blue-300 text-white" : "bg-gray-200"}`}
            >
              2024-B
            </button>
          </div>

          {/* Mostrar semestre seleccionado */}
          <div className="text-center mb-6 font-thin">
            <p>
              Semestre Seleccionado: <strong>{semester}</strong>
            </p>
          </div>
        </Card>

        {/* Calendario para el semestre 2024-A */}
        {semester === "2024-A" && (
          <Card className="p-6 shadow-lg mb-6">
            <div className="card-header p-4">
              <h2 className="text-2xl font-thin font-semibold text-blue-400">
                Calendario 2024-A
              </h2>
            </div>
            <div className="card-body p-4">
              <object
                data="/calendario2025-1.pdf" // Ruta al archivo PDF
                type="application/pdf"
                width="100%"
                height="500px"
              >
                <p>
                  Tu navegador no soporta la visualización de PDFs.{" "}
                  <a
                    href="/calendario2024-a.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Descargar PDF
                  </a>
                </p>
              </object>
            </div>
          </Card>
        )}

        {/* Calendario para el semestre 2024-B */}
        {semester === "2024-B" && (
          <Card className="p-6 shadow-lg mb-6">
            <div className="card-header p-4">
              <h2 className="text-2xl font-thin font-semibold text-blue-400">
                Calendario 2024-B
              </h2>
            </div>
            <div className="card-body p-4">
              <object
                data="/calendario2025-1.pdf" // Ruta al archivo PDF
                type="application/pdf"
                width="100%"
                height="500px"
              >
                <p>
                  Tu navegador no soporta la visualización de PDFs.{" "}
                  <a
                    href="/calendario2024-b.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Descargar PDF
                  </a>
                </p>
              </object>
            </div>
          </Card>
        )}
      </div>
    </div>
  );
}
