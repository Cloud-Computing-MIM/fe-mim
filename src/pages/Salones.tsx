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
import { Calendar } from "../components/layout/calendar";

// Importación de los íconos necesarios
import { FcSearch } from "react-icons/fc";
import { IoHome } from "react-icons/io5";

// Mock data
const rooms = [
  { id: 1, name: "Room 101", type: "Degree", capacity: 30 },
  { id: 2, name: "Room 102", type: "Degree", capacity: 25 },
  { id: 3, name: "English Lab", type: "Language", capacity: 20 },
  { id: 4, name: "French Lab", type: "Language", capacity: 15 },
  { id: 5, name: "German Lab", type: "Language", capacity: 15 },
];

export default function RoomsPage() {
  const [selectedRoom, setSelectedRoom] = useState<string | null>(null);
  const [reservationDate, setReservationDate] = useState(new Date());
  const [searchTerm, setSearchTerm] = useState(""); // Estado para la búsqueda
  const navigate = useNavigate();

  const handleReservation = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Room reserved:", selectedRoom, "for date:", reservationDate);
    alert("Room reserved successfully!");
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
      {/* Contenido principal de la página */}
      <div className="container mx-auto p-4">
        <Card className="mt-6">
          <CardHeader>
            <CardTitle className="font-thin text-3xl">
              Organización de Salones
            </CardTitle>
            <CardDescription>Manage rooms in the system</CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="all">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="all">All Rooms</TabsTrigger>
                <TabsTrigger value="degree">Degree Rooms</TabsTrigger>
                <TabsTrigger value="language">Language Rooms</TabsTrigger>
              </TabsList>

              <TabsContent value="all">
                <RoomTable rooms={rooms} />
              </TabsContent>

              <TabsContent value="degree">
                <RoomTable
                  rooms={rooms.filter((room) => room.type === "Degree")}
                />
              </TabsContent>

              <TabsContent value="language">
                <RoomTable
                  rooms={rooms.filter((room) => room.type === "Language")}
                />
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>

        {/* Reserve a Room Section */}
        <Card className="mt-6">
          <CardHeader>
            <CardTitle>Reserve a Room</CardTitle>
            <CardDescription>
              Select a room and date to make a reservation
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleReservation} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="room">Select Room</Label>
                <Select onValueChange={(value) => setSelectedRoom(value)}>
                  <SelectTrigger id="room">
                    <SelectValue placeholder="Select a room" />
                  </SelectTrigger>
                  <SelectContent>
                    {rooms.map((room) => (
                      <SelectItem key={room.id} value={room.id.toString()}>
                        {room.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label>Select Date</Label>
                <Calendar
                  mode="single"
                  required={true}
                  selected={reservationDate}
                  onSelect={(date) => setReservationDate(date)}
                  className="rounded-md border"
                />
              </div>
              <Button type="submit">Reserve Room</Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

function RoomTable({
  rooms,
}: {
  rooms: { id: number; name: string; type: string; capacity: number }[];
}) {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Room Name</TableHead>
          <TableHead>Type</TableHead>
          <TableHead>Capacity</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {rooms.map((room) => (
          <TableRow key={room.id}>
            <TableCell>{room.name}</TableCell>
            <TableCell>{room.type}</TableCell>
            <TableCell>{room.capacity}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
