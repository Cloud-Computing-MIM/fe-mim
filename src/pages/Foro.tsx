import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../components/navigation/tab";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../components/ui/accordion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../components/layout/card";
import { Input } from "../components/forms/input";
import { Textarea } from "../components/forms/textarea";
import { Button } from "../components/navigation/button";
import {
  MdOutlineCastForEducation,
  MdConnectWithoutContact,
  MdOutlineMoveToInbox,
  MdOutlineSportsVolleyball,
} from "react-icons/md";
import { FaNewspaper, FaUniversity } from "react-icons/fa";
import { TiNews } from "react-icons/ti";
import { FaCircleQuestion } from "react-icons/fa6";
import { SiGoogleforms } from "react-icons/si";
import { RiAdminFill } from "react-icons/ri";
import { BiSolidHappyBeaming } from "react-icons/bi";
import { FcAnswers, FcSearch } from "react-icons/fc";
import { GiNewspaper, GiAcousticMegaphone } from "react-icons/gi";
import { IoCalendarOutline, IoHome } from "react-icons/io5";

export default function ForoPage() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Submitted:", { email, message });
    setEmail("");
    setMessage("");
  };
  //navgeacion a Main Page
  const returnMainPage = () => {
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-gray-100  border-blue-900 ">
      {/* empezamos con el screen con un header */}
      <header className="bg-blue-200 text-white p-4 w-full flex items-center justify-between  border-b-2 border-blue-900">
        <div className="flex items-center space-x-4">
          {/*logo de MIM*/}
          <img src="/public/MIM_2.png" alt="Logo MIM" className="h-20 w-20" />
          <h1 className="text-5xl mt-2 font-thin">MIM</h1>
        </div>
        {/*barra de busqueda*/}
        <div className="flex items-center space-x-2">
          <input
            type="text"
            placeholder="Buscar..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="border border-gray-300 p-2 rounded-lg w-80 text-black shadow-lg relative left-80"
          />
          <button className="bg-blue-400 text-white p-2 rounded-lg hover:bg-blue-600 transition relative left-80">
            <FcSearch className="text-3xl" />
          </button>
        </div>
        {/*Navigation boton a MainPage*/}
        <button
          onClick={returnMainPage}
          className="inline-block bg-blue-500 text-white p-2 rounded-full text-xl hover:bg-blue-600 shadow-lg transition "
        >
          <IoHome className="text-xl" />
        </button>
      </header>

      {/*Contenido Principal*/}
      <Card className="  p-6 shadow-lg">
        <h1 className="text-3xl font-thin text-5xl text-center mb-6 flex items-center justify-center text-blue-900 ">
          <span className="mr-2">Foro Universitario</span>
          <MdOutlineCastForEducation className="ml-2 text-5xl" />
        </h1>
        <div className="absolute top-5 left-20 bottom-0 flex items-center "></div>
        <Tabs defaultValue="notices" className="max-w-4xl mx-auto pb-40">
          <TabsList className="flex justify-center space-x-4 p-4 pb-5 pt-8 pr-20">
            <TabsTrigger
              value="notices"
              className="text-md bg-gray-200 text-gray-900 hover:text-blue-600 hover:bg-blue-100 active:bg-blue-100 active:text-blue-900 transition-colors p-4
                                   rounded-lg text-center w-auto h-auto data-[state=active]:bg-blue-200 mb-3 font-thin  text-lg 
                                   border border-black-600  border-blue-900 shadow-xl" 
            >
              <span> Novedades</span>
              <TiNews className="ml-4 text-2xl" />
            </TabsTrigger>
            <TabsTrigger
              value="faq"
              className="text-md bg-gray-200 text-gray-900 hover:text-blue-600 hover:bg-blue-100 active:bg-blue-100 active:text-blue-900 transition-colors p-4 
                              rounded-lg text-center w-auto h-auto data-[state=active]:bg-blue-200 mb-3 font-thin text-lg 
                              border border-black-600  border-blue-900 shadow-xl"
            >
              <span>Preguntas Frecuentes</span>
              <FaCircleQuestion className="ml-4 text-2xl" />
            </TabsTrigger>
            <TabsTrigger
              value="contact"
              className="text-md bg-gray-200 text-gray-900 hover:text-blue-600 hover:bg-blue-100 active:bg-blue-100 active:text-blue-900 transition-colors p-4 
                              rounded-lg text-center w-auto h-auto data-[state=active]:bg-blue-200 mb-3 font-thin text-lg 
                              border border-black-600 border-blue-900 shadow-xl"
            >
              <span>Contáctanos</span>
              <MdConnectWithoutContact className="ml-4 text-2xl" />
            </TabsTrigger>
            <TabsTrigger
              value="forms"
              className="text-md bg-gray-200 text-gray-900 hover:text-blue-600 hover:bg-blue-100 active:bg-blue-100 active:text-blue-900 transition-colors p-4 
                              rounded-lg text-center w-auto h-auto data-[state=active]:bg-blue-200 mb-3 font-thin text-lg 
                              border border-black-600 border-blue-900 shadow-xl"
            >
              <span> Formularios</span>
              <SiGoogleforms className="ml-4 text-2xl" />
            </TabsTrigger>
            <TabsTrigger
              value="mural"
              className="text-md bg-gray-200 text-gray-900 hover:text-blue-600 hover:bg-blue-100 active:bg-blue-100 active:text-blue-900 transition-colors p-4 
                                   rounded-lg text-center w-auto h-auto data-[state=active]:bg-blue-200 mb-3 font-thin text-lg
                                    border border-black-600  border-blue-900 shadow-xl"
            >
              <span> Mural Marista</span>
              <FaNewspaper className="ml-4 text-2xl" />
            </TabsTrigger>
          </TabsList>
          <TabsContent value="notices">
            <div className="grid gap-4 md:grid-cols-2 m">
              <Card className="mt-12 p-6 border border-blue-900 shadow-xl">
                <CardHeader>
                  <RiAdminFill className="ml-4 text-3xl text-blue-600" />
                  <CardTitle className="font-thin">
                    Avisos a Coordinadores
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <h3 className="text-lg font-italic font-thin  text-gray-900 mb-4">
                    Mes: Noviembre 2024
                  </h3>
                  <ul className="list-disc pl-5 space-y-2 font-thin">
                    <li>Reunión de coordinación el próximo lunes</li>
                    <li>Entrega de informes mensuales</li>
                    <li>Actualización de syllabus para el próximo semestre</li>
                  </ul>
                </CardContent>
              </Card>
              <Card className="mt-12 p-6 border border-blue-900 shadow-xl">
                <CardHeader>
                  <FaUniversity className="ml-4 text-3xl text-blue-600" />
                  <CardTitle className="font-thin ">
                    Avisos de la Universidad
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <h4 className="text-lg font-italic font-thin  text-gray-900 mb-4">
                    Mes: Noviembre 2024
                  </h4>
                  <ul className="font-thin list-disc pl-5 space-y-2">
                    <li>Ceremonia de graduación el 15 de julio</li>
                    <li>Mantenimiento de la biblioteca este fin de semana</li>
                    <li>Nuevos cursos de verano disponibles</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
            <div className="flex justify-center mt-6">
              <img src="/public/maristas_3.jpg" className="w-50 h-80" />
            </div>
          </TabsContent>

          <TabsContent value="faq">
            <Card className = "mt-10 border-blue-900  shadow-xl">
              <CardHeader>
                <CardTitle className="font-thin">
                  Preguntas Frecuentes
                </CardTitle>
              </CardHeader>
              <CardContent>
                <BiSolidHappyBeaming className="ml-4 text-6xl text-blue-600" />
                <Accordion type="single" collapsible>
                  <AccordionItem value="item-1">
                    <AccordionTrigger className="font-thin text-gray-900 hover:text-blue-600 focus:text-blue-600 active:text-blue-800 focus:underline">
                      ¿Cómo puedo obtener mi horario?
                    </AccordionTrigger>
                    <AccordionContent className="font-thin">
                      Puedes obtener tu horario accediendo a la sección
                      "Horarios" en el menú principal. Allí podrás seleccionar
                      tu carrera y ver el horario correspondiente.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2">
                    <AccordionTrigger className="font-thin text-gray-900 hover:text-blue-600 focus:text-blue-600 active:text-blue-800 focus:underline">
                      ¿Dónde puedo ver mis calificaciones?
                    </AccordionTrigger>
                    <AccordionContent className="font-thin">
                      Las calificaciones se publican en el portal del
                      estudiante. Accede con tu usuario y contraseña, y en la
                      sección "Académico" encontrarás tus notas.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-3">
                    <AccordionTrigger className="font-thin text-gray-900 hover:text-blue-600 focus:text-blue-600 active:text-blue-800 focus:underline">
                      ¿Cómo solicito una constancia de estudios?
                    </AccordionTrigger>
                    <AccordionContent className="font-thin">
                      Para solicitar una constancia de estudios, debes acudir a
                      la Oficina de Registros Académicos con tu carnet de
                      estudiante. El trámite toma aproximadamente 3 días
                      hábiles.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="contact">
            <Card className = "mt-10 border-blue-900 shadow-xl">
              <CardHeader>
                <CardTitle className="font-thin">Contáctanos</CardTitle>
                <CardDescription className="font-thin">
                  Envíanos tus dudas o comentarios
                </CardDescription>
                <MdOutlineMoveToInbox className="ml-4 text-5xl text-blue-600" />
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label
                      htmlFor="email"
                      className="font-thin block text-sm font-medium text-gray-700"
                    >
                      Correo Electrónico
                    </label>
                    <Input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="font-thin block text-sm font-medium text-gray-700"
                    >
                      Mensaje
                    </label>
                    <Textarea
                      id="message"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      required
                      className="mt-1"
                    />
                  </div>
                  <Button type="submit" className="font-thin">
                    Enviar
                  </Button>
                </form>
              </CardContent>
            </Card >
          </TabsContent>
          <TabsContent value="forms">
            <Card className = "mt-10 border-blue-900 shadow-xl">
              <CardHeader></CardHeader>
              <CardContent>
                <FcAnswers className="ml-4 text-8xl" />
                <Accordion type="single" collapsible>
                  <AccordionItem value="item-1">
                    <AccordionTrigger className="font-thin text-gray-900 hover:text-blue-600 focus:text-blue-600 active:text-blue-800 focus:underline">
                      ¿Dónde puedo completar la solicitud para registrar mi
                      vehículo y poder hacer uso del estacionamiento?
                    </AccordionTrigger>
                    <AccordionContent className="font-thin">
                      Puedes llenar la solicitud para registrar tu vehículo y
                      hacer uso del estacionamiento accediendo a este
                      <a
                        href="https://www.google.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: "#007BFF", fontWeight: "bold" }}
                      >
                        {" "}
                        *enlace*
                      </a>
                      .
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2">
                    <AccordionTrigger className="font-thin text-gray-900 hover:text-blue-600 focus:text-blue-600 active:text-blue-800 focus:underline">
                      ¿Dónde puedo ver los programas de Servicio Social
                      disponibles? ¿Dónde o con quien me puedo inscribir?
                    </AccordionTrigger>
                    <AccordionContent className="font-thin">
                      <p>
                        * Para obtener más información sobre las plazas
                        disponibles para el Servicio Social, puedes consultar el
                        siguiente documento:
                        <a
                          href="https://www.example.com/servicio-social.pdf"
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{ color: "#007BFF", fontWeight: "bold" }}
                        >
                          {" "}
                          Ver plazas disponibles (PDF){" "}
                        </a>
                      </p>
                      <p>
                        * Si deseas inscribirte al Servicio Social, puedes
                        hacerlo a través de este{" "}
                        <a
                          href="https://www.example.com/inscripcion-servicio-social"
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{ color: "#007BFF", fontWeight: "bold" }}
                        >
                          {" "}
                          enlace de inscripción
                        </a>
                        .
                      </p>
                      <p>
                        * Si necesitas ayuda personal, puedes acudir con Sergio
                        Chimal en Servicios Escolares.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="mural">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              <Card className="flex flex-col items-center mt-10 border-blue-900 border-2 shadow-xl">
                <CardHeader className="text-center mb-4">
                  <GiNewspaper className="text-8xl text-blue-800" />
                  <CardTitle className="font-thin">Deportivos</CardTitle>
                  <MdOutlineSportsVolleyball className="ml-4 text-5xl relative left-4 text-blue-400" />
                </CardHeader>
                <CardContent>
                  <p className="font-thin font-bold mb-4 text-blue-500">
                    Consulta los eventos deportivos y más información relevante.
                  </p>
                  <ul className="list-disc pl-5 space-y-2 font-thin">
                    <li>Partido de fútbol el 10 de noviembre</li>
                    <li>Voleibol vs ITESO 16 Noviembre</li>
                    <li>Codemaru 2024 (14-Noviembre-19-Noviembre)</li>
                  </ul>
                  <a
                    className="font-thin"
                    href="https://www.example.com/deportivos"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "#007BFF", fontWeight: "bold" }}
                  >
                    Ver más eventos deportivos
                  </a>
                </CardContent>
              </Card>
              <Card className="flex flex-col items-center mt-10 border-blue-900 border-2 shadow-xl">
                <CardHeader className="text-center mb-4">
                  <GiNewspaper className="text-8xl text-blue-800" />{" "}
                  {/* Ícono de color azul */}
                  <CardTitle className="font-thin">Convocatorias</CardTitle>
                  <GiAcousticMegaphone className="ml-4 text-5xl relative left-6 text-blue-400" />
                </CardHeader>
                <CardContent>
                  <p className="font-thin font-bold mb-4 text-blue-500">
                    Información sobre convocatorias abiertas para diversas
                    actividades.
                  </p>
                  <ul className="list-disc pl-5 space-y-2 font-thin">
                    <li>Convocatoria para becas 2024</li>
                    <li>
                      Convocatoria para el programa de intercambio académico
                    </li>
                    <li>Convocatoria para voluntariado universitario</li>
                  </ul>
                  <a
                    className="font-thin"
                    href="https://www.example.com/convocatorias"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "#007BFF", fontWeight: "bold" }}
                  >
                    Ver todas las convocatorias
                  </a>
                </CardContent>
              </Card>
              <Card className="flex flex-col items-center mt-10 border-blue-900 border-2 shadow-xl">
                <CardHeader className="text-center mb-4">
                  <GiNewspaper className="text-8xl text-blue-800" />
                  <CardTitle className="font-thin">Eventos del Mes</CardTitle>
                  <IoCalendarOutline className="ml-4 text-5xl relative left-6 text-blue-400" />
                </CardHeader>
                <CardContent>
                  <p className="font-thin font-bold mb-4 text-blue-500">
                    Eventos y actividades que se llevarán a cabo este mes en
                    nuestra comunidad.
                  </p>
                  <ul className="list-disc pl-5 space-y-2 font-thin">
                    <li>
                      Conferencia sobre innovación educativa el 12 de noviembre
                    </li>
                    <li>
                      Concierto de la banda universitaria el 20 de noviembre
                    </li>
                    <li>Feria cultural el 25 de noviembre</li>
                  </ul>
                  <a
                    className="font-thin"
                    href="https://www.example.com/eventos"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "#007BFF", fontWeight: "bold" }}
                  >
                    Ver todos los eventos
                  </a>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </Card>
    </div>
  );
}
