import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { IoHome } from "react-icons/io5";
import { FcSearch } from "react-icons/fc";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/forms/select";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../components/layout/card";
import { LuFileClock } from "react-icons/lu";
import { MdCategory } from "react-icons/md";
import { AiOutlineSchedule } from "react-icons/ai";
import { FaGraduationCap } from "react-icons/fa6";

export default function HorariosPage() {
  const [searchTerm, setSearchTerm] = useState(""); // Estado para la búsqueda
  const [selectedCategory, setSelectedCategory] = useState(""); // Estado para la categoría seleccionada
  const [selectedCareer, setSelectedCareer] = useState(""); // Estado para la carrera seleccionada
  const navigate = useNavigate();

  const categories = [
    { id: "ingenierias", name: "Ingenierías" },
    { id: "licenciaturas", name: "Licenciaturas" },
  ];

  const careers = {
    ingenierias: [
      { id: 1, name: "Aeroespacial", semesters: 10 },
      { id: 2, name: "Automotriz", semesters: 9 },
      { id: 3, name: "Cibernética", semesters: 10 },
      { id: 4, name: "Inteligencia Artificial (IA)", semesters: 9 },
      { id: 5, name: "Industrial", semesters: 8 },
    ],
    licenciaturas: [
      { id: 1, name: "Animación Digital", semesters: 8 },
      { id: 2, name: "Arquitectura", semesters: 8 },
      { id: 3, name: "Comercio", semesters: 8 },
      { id: 4, name: "Derecho", semesters: 9 },
      { id: 5, name: "Diseño", semesters: 8 },
      { id: 6, name: "Educación", semesters: 8 },
      { id: 7, name: "Mercadotecnia", semesters: 8 },
      { id: 8, name: "Nutrición y Gastronomía", semesters: 9 },
    ],
  };

  const returnToMainPage = () => {
    navigate("/");
  };

  // Maneja la selección de categoría
  const handleCategoryChange = (value) => {
    setSelectedCategory(value); // Actualiza la categoría seleccionada
    setSelectedCareer(""); // Reinicia la carrera seleccionada al cambiar la categoría
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header azul */}
      <header className="bg-blue-200 text-white p-4 w-full flex items-center justify-between">
        <div className="flex items-center space-x-4">
          {/* Logo de MIM */}
          <img src="/public/MIM_2.png" alt="Logo MIM" className="h-20 w-20" />
          <h1 className="text-5xl mt-2 font-thin">MIM</h1>
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

      {/* Card para seleccionar opciones */}
      <Card className="max-w-4xl mx-auto mb-6 mt-8">
        {/* Encabezado de Horarios */}
        <CardHeader>
          <div className="flex items-center justify-center">
            <h1 className="text-3xl font-thin text-5xl text-blue-900 flex items-center justify-center pt-4">
              <span className="mr-2">Horarios</span>
              <LuFileClock className="ml-2 text-5xl" />
            </h1>
          </div>
        </CardHeader>
        {/* Contenido de la Card */}
        <CardContent>
          {/* Card para seleccionar categoría */}
          <Card className="mb-6">
            <CardHeader>
              <CardTitle className="font-thin">
                Selecciona la categoría
              </CardTitle>
              <MdCategory className="ml-2 text-3xl text-blue-400" />
            </CardHeader>
            <CardContent>
              <Select
                value={selectedCategory}
                onValueChange={handleCategoryChange}
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Category.." />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((category) => (
                    <SelectItem key={category.id} value={category.id}>
                      {category.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </CardContent>
          </Card>

          {/* Card para seleccionar carrera */}
          <Card className="mb-6">
            <CardHeader>
              <CardTitle className="font-thin">Selecciona tu carrera</CardTitle>
              <AiOutlineSchedule className="ml-2 text-3xl text-blue-400" />
            </CardHeader>
            <CardContent>
              <Select value={selectedCareer} onValueChange={setSelectedCareer}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Career.." />
                </SelectTrigger>
                <SelectContent>
                  {selectedCategory &&
                    careers[selectedCategory]?.map((career) => (
                      <SelectItem key={career.id} value={career.name}>
                        {career.name}
                      </SelectItem>
                    ))}
                </SelectContent>
              </Select>
            </CardContent>
          </Card>

          {/* Card para seleccionar semestre */}
          <Card className="mb-6">
            <CardHeader>
              <CardTitle className="font-thin">
                Selecciona tu semestre
              </CardTitle>
              <FaGraduationCap className="ml-2 text-3xl text-blue-400" />
            </CardHeader>
            <CardContent>
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Semester..." />
                </SelectTrigger>
                <SelectContent>
                  {[...Array(10).keys()].map((semestre) => (
                    <SelectItem key={semestre + 1} value={semestre + 1}>
                      Semestre {semestre + 1}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </CardContent>
          </Card>
        </CardContent>
      </Card>

      {/* Mostrar las opciones seleccionadas */}
      <div className="text-center mt-4">
        <h2 className="text-xl font-semibold">
          {/* Aquí iría el resumen de la categoría, carrera y semestre seleccionados */}
        </h2>
      </div>
    </div>
  );
}
