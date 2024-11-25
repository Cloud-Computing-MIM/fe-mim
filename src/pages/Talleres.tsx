import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../components/navigation/tab";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../components/layout/card";
import { Button } from "../components/navigation/button";
import { Input } from "../components/forms/input";
import { Label } from "../components/forms/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/forms/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../components/layout/table";
import { IoHome } from "react-icons/io5"; // Para el ícono de casa
import { FcSearch } from "react-icons/fc"; // Para el ícono de búsqueda
// Mock data
const workshops = [
  {
    id: 1,
    name: "Basquetbol Femenil",
    type: "Sports",
    schedule: "Martes y Viernes, 14:00 - 16:00 pm",
    credits: "4",
    horas: "96",
  },
  {
    id: 2,
    name: "Basquetbol Varonil",
    type: "Sports",
    schedule: "Martes y Jueves, 14:00 - 16:00 pm y Sabados, 10:00 - 12:00 pm",
    credits: "4",
    horas: "96",
  },
  {
    id: 3,
    name: "Futbol Femenil",
    type: "Sports",
    schedule: "Lunes, Miércoles y Jueves, 14:00 - 16:00 pm",
    credits: "4",
    horas: "96",
  },
  {
    id: 4,
    name: "Futbol Varonil",
    type: "Sports",
    schedule: "Lunes, Martes y Miércoles, 14:00 - 16:00 pm",
    credits: "4",
    horas: "96",
  },
  {
    id: 5,
    name: "Gimnasio",
    type: "Sports",
    schedule: "Lunes a Viernes, 13:00 - 20:00 pm",
    credits: "2",
    horas: "32",
  },
  {
    id: 6,
    name: "Karate",
    type: "Sports",
    schedule: "Martes y Jueves, 14:00 - 16:00 pm",
    credits: "3",
    horas: "64",
  },
  {
    id: 7,
    name: "Tae-kwon-do",
    type: "Sports",
    schedule: "Miércoles y Viernes, 14:00 - 16:00 pm",
    credits: "3",
    horas: "64",
  },
  {
    id: 8,
    name: "Tochito",
    type: "Sports",
    schedule: "Martes y Jueves, 14:00 - 16:00 pm",
    credits: "2",
    horas: "32",
  },

  {
    id: 9,
    name: " Volleyball Femenil",
    type: "Sports",
    schedule: "Lunes y Jueves, 14:00 - 16:00 pm y Sábados, 12:00 - 14:00 pm",
    credits: "4",
    horas: "96",
  },
  {
    id: 10,
    name: "Volleyball Varonil",
    type: "Sports",
    schedule: "Lunes, Martes y Miércoles, 14:00 - 16:00 pm ",
    credits: "4",
    horas: "96",
  },
  {
    id: 11,
    name: "Ajedrez",
    type: "Cultural",
    schedule: "Martes, 14:00 - 16:00 pm",
    credits: "2",
    horas: "32",
  },
  {
    id: 12,
    name: "Ballet Clásico",
    type: "Cultural",
    schedule: "Martes y Miércoles, 14:00 - 16:00 pm",
    credits: "3",
    horas: "64",
  },
  {
    id: 13,
    name: "Baile Folklorico",
    type: "Cultural",
    schedule: "Lunes y Miércoles, 14:00 - 16:00 pm",
    credits: "3",
    horas: "64",
  },
  {
    id: 14,
    name: "Danza Aerea",
    type: "Cultural",
    schedule: "Martes y Jueves, 14:00 - 16:00 pm",
    credits: "3",
    horas: "64",
  },
  {
    id: 15,
    name: "Debate",
    type: "Cultural",
    schedule: "Martes y Jueves, 14:00 - 16:00 pm",
    credits: "3",
    horas: "64",
  },
  {
    id: 16,
    name: "Fotografía y Video",
    type: "Cultural",
    schedule: "Lunes y Miércoles 14:10 - 16:00 pm",
    credits: "3",
    horas: "64",
  },
  {
    id: 17,
    name: "Guitarra",
    type: "Cultural",
    schedule: "Lunes y Miércoles, 14:10 - 16:00 pm",
    credits: "3",
    horas: "64",
  },
  {
    id: 18,
    name: "Hip-Hop",
    type: "Cultural",
    schedule: "Viernes  14:00 - 16:00 pm y Sabados 9:00 - 11:00 am",
    credits: "3",
    horas: "64",
  },
  {
    id: 19,
    name: "Jazz",
    type: "Cultural",
    schedule: "Lunes, 14:00 - 16:00 pm",
    credits: "3",
    horas: "64",
  },
  {
    id: 20,
    name: "K-Pop",
    type: "Cultural",
    schedule: "Martes y Jueves, 14:00 - 16:00 pm",
    credits: "3",
    horas: "64",
  },
  {
    id: 21,
    name: "Liderazgo y Emprendimiento",
    type: "Cultural",
    schedule: "Miércoles y Viernes, 14:00 - 15:30 pm",
    credits: "3",
    horas: "64",
  },
  {
    id: 22,
    name: "Máscaras y Piñatas",
    type: "Cultural",
    schedule: "Miércoles y Viernes, 14:00 - 15:30 pm",
    credits: "3",
    horas: "64",
  },
  {
    id: 23,
    name: "Pintura",
    type: "Cultural",
    schedule: "Jueves, 14:00 - 16:00 pm",
    credits: "2",
    horas: "32",
  },
  {
    id: 24,
    name: "Ritmos Latinos",
    type: "Cultural",
    schedule: "Martes y Jueves, 14:00 - 16:00 pm",
    credits: "3",
    horas: "64",
  },
];

export default function Talleres() {
  const [selectedWorkshop, setSelectedWorkshop] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleInscription = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Workshop inscription:", {
      workshop: selectedWorkshop,
      name,
      email,
    });
    alert("Inscription submitted successfully!");
    setSelectedWorkshop("");
    setName("");
    setEmail("");
  };

  //navgeacion a Main Page
  const returnMainPage = () => {
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
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
          onClick={returnMainPage}
          className="inline-block bg-blue-500 text-white p-2 rounded-full text-xl hover:bg-blue-600 shadow-lg transition"
        >
          <IoHome className="text-xl" />
        </button>
      </header>

      {/* Card que contiene todo el contenido de la página */}
      <Card className="mt-6">
        <CardHeader>
          <CardTitle className="text-3xl font-thin mb-6">
            Actividades Extracurriculares y Talleres
          </CardTitle>
        </CardHeader>

        <CardContent>
          {/* Tabs para mostrar los talleres */}
          <Tabs defaultValue="all">
            <TabsList className="grid w-full grid-cols-3 ">
              <TabsTrigger value="all" className="font-thin ">
                All Workshops
              </TabsTrigger>
              <TabsTrigger value="cultural" className="font-thin">
                Cultural
              </TabsTrigger>
              <TabsTrigger value="sports" className="font-thin">
                Sports
              </TabsTrigger>
            </TabsList>

            <TabsContent value="all">
              <WorkshopTable workshops={workshops} />
            </TabsContent>

            <TabsContent value="cultural">
              <WorkshopTable
                workshops={workshops.filter(
                  (workshop) => workshop.type === "Cultural",
                )}
              />
            </TabsContent>

            <TabsContent value="sports">
              <WorkshopTable
                workshops={workshops.filter(
                  (workshop) => workshop.type === "Sports",
                )}
              />
            </TabsContent>
          </Tabs>

          {/* Formulario de inscripción */}
          <Card className="mt-6">
            <CardHeader>
              <CardTitle className="font-thin">Inscripcion</CardTitle>
              <CardDescription className="font-thin">
                Registrarte a Taller
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleInscription} className="space-y-4">
                <div className="space-y-2 font-semibold">
                  <Label htmlFor="workshop">Inscripcion a taller</Label>
                  <Select
                    onValueChange={setSelectedWorkshop}
                    value={selectedWorkshop}
                  >
                    <SelectTrigger id="workshop">
                      <SelectValue placeholder="Select a workshop" />
                    </SelectTrigger>
                    <SelectContent>
                      {workshops.map((workshop) => (
                        <SelectItem
                          key={workshop.id}
                          value={workshop.id.toString()}
                        >
                          {workshop.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2 font-semibold">
                  <Label htmlFor="name">Nombre Completo</Label>
                  <Input
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>
                <div className="space-y-2 font-semibold">
                  <Label htmlFor="email">Correo Institucional</Label>
                  <Input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>

                <Button className="bg-blue-500 text-white" type="submit">
                  Submit Inscription
                </Button>
              </form>
            </CardContent>
          </Card>
        </CardContent>
      </Card>
    </div>
  );
}

// Componente para mostrar la tabla de talleres
function WorkshopTable({
  workshops,
}: {
  workshops: {
    id: number;
    name: string;
    type: string;
    schedule: string;
    credits: string;
    horas: string;
  }[];
}) {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Workshop Name</TableHead>
          <TableHead>Type</TableHead>
          <TableHead>Schedule</TableHead>
          <TableHead>Credits</TableHead>
          <TableHead>Hours</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {workshops.map((workshop) => (
          <TableRow key={workshop.id}>
            <TableCell>{workshop.name}</TableCell>
            <TableCell>{workshop.type}</TableCell>
            <TableCell>{workshop.schedule}</TableCell>
            <TableCell>{workshop.credits}</TableCell>
            <TableCell>{workshop.horas}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
