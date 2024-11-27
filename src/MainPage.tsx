import { Link } from "react-router-dom";
import { MessageSquare, Clock, School, Hammer, Calendar } from "lucide-react";
import { User } from "lucide-react";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import "react-medium-image-zoom/dist/styles.css";
import { BsFillPinMapFill } from "react-icons/bs"; 
const MainPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-100 to-gray-400" >
      <header className="bg-blue-200 text-white w-full flex items-center justify-between p-5 border-4 border-blue-900" >
        <div className="flex flex-col">
          <h1 className="text-8xl font-thin mt-2">MIM </h1>
          <h2 className="text-3xl font-thin">Módulo de Información Marista</h2>
        </div>
        <img src="/public/MIM_2.png" alt="Logo MIM" className="h-40" />
      </header>

      <main className="container mx-auto p-4 flex flex-col sm:flex-row gap-8  relative right-24">
        <div className="flex flex-col items-start  sm:w-1/3 mb-6 sm:mb-0 justify-start mr-130 ">
          <Link
            to="/calendario"
            className="flex items-center justify-start p-4 bg-white rounded-lg shadow-md hover:bg-blue-100 transition-all duration-300 w-full mb-4 
            transform hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 border-2 border-blue-900 rounded-xl"
          >
            <Calendar className="w-7 h-7 mr-2 text-blue-800 transition-all duration-300 transform group-hover:scale-110 group-focus:scale-110" />
            <span className="font-thin text-3xl transition-all duration-300 group-hover:text-blue-600">Calendario</span>
          </Link>

          <Link
            to="/foro"
            className="flex items-center justify-start p-4 bg-white rounded-lg shadow-md hover:bg-blue-100 transition-all duration-300 w-full mb-4 
            transform hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 border-2 border-blue-900 rounded-xl"
          >
            <MessageSquare className="w-7 h-7 mr-2 text-blue-800" />
            <span className="font-thin text-3xl">Foro</span>
          </Link>

          <Link
            to="/horarios"
            className="flex items-center justify-start p-4 bg-white rounded-lg shadow-md hover:bg-blue-100 transition-all duration-300 w-full mb-4 
            transform hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 border-2 border-blue-900 rounded-xl"
          >
            <Clock className="w-7 h-7 mr-2 text-blue-800" />
            <span className="font-thin text-3xl">Horarios</span>
          </Link>
            <Link
               to="/salones"
               className="flex items-center justify-start p-4 bg-white rounded-lg shadow-md hover:bg-blue-100 transition-all duration-300 w-full mb-4 
               transform hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 border-2 border-blue-900 rounded-xl"
              >
              <School className="w-7 h-7 mr-2 text-blue-800 transition-all duration-300 transform group-hover:scale-110 group-focus:scale-110" />
               <span className="font-thin text-3xl transition-all duration-300 group-hover:text-blue-600">
            Salones
              </span>
          </Link>
          <Link
            to="/talleres"
            className="flex items-center justify-start p-4 bg-white rounded-lg shadow-md hover:bg-blue-100 transition-all duration-300 w-full 
            transform hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 border-2 border-blue-900 rounded-xl"
            >
            <Hammer className="w-7 h-7 mr-2 text-blue-800 transition-all duration-300 transform group-hover:scale-110 group-focus:scale-110" />
            <span className="font-thin text-3xl transition-all duration-300 group-hover:text-blue-600">
            Talleres
           </span>
        </Link>
          <div className="mt-6 flex justify-center">
            <img
              src="/public/logo-universidad-marista.png"
              alt="Logo UMG"
              className="h-48 w-auto relative left-20  rounded-2xl shadow-lg hover:shadow-xl transition-all duration-600"
            />
          </div>
        </div>
        <div className="w-full sm:w-full ml-10 justify-end">
          <div className="bg-white rounded-lg shadow-md p-6 mb-6 border-4 border-purple-900">
            
            <h2 className="text-4xl font-thin mb-4">
              Mapa Interactivo UMG
              <BsFillPinMapFill className="w-full h-12  mr-2 text-red-800 " />
              </h2>
            <div className="relative aspect-video bg-gray-200 rounded-lg overflow-hidden border-2 border-purple-900">
              <TransformWrapper
                minScale={0.5}
                maxScale={5}
                wheel={{ step: 0.1 }} // Controla el zoom con la rueda
              >
                {({  }) => (
                  <>
                    <div className="absolute top-0 right-0 p-4 space-x-2 z-10 "></div>
                    <TransformComponent>
                      <img
                        src="/public/maps.png" // Ruta a tu imagen
                        alt="Mapa de la universidad"
                        className="w-full h-full object-cover cursor-pointer border-8 border-gray-800"
                      />
                    </TransformComponent>
                  </>
                )}
              </TransformWrapper>
            </div>
          </div>
          
        </div>
      </main>

      {/* Sección explicativa del proyecto */}
      <section className="bg-white p-6 mt-8 rounded-lg shadow-lg hover:shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 m-5 hover:bg-blue-400 border-4 border-blue-900 bg-gradient-to-r from-gray-100 to-gray-400">
  <div className="max-w-4xl mx-auto p-6 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all border-4 border-blue-800">
    <h2 className="text-3xl font-semibold text-blue-800 mb-4 text-center font-thin italic">Acerca del Proyecto</h2>
    
    {/* Párrafo con hover */}
    <p className="text-lg text-gray-700 leading-relaxed mb-4 transition-colors duration-300 hover:text-blue-900 font-thin text-justify">
      Este proyecto, <strong className="text-blue-600 font-bold">Módulo de Información Marista (MIM)</strong>,
      está diseñado para ofrecer información útil y accesible para la comunidad de la Universidad Marista.
      A través de esta plataforma, los usuarios pueden acceder a recursos como mapas interactivos, horarios de clases,
      foros de discusión, y más. Nuestro objetivo es mejorar la experiencia universitaria mediante una interfaz sencilla y
      herramientas fáciles de usar.
    </p>

    {/* Imagen con hover */}
    <div className="relative mb-6">
      <img
        src="/public/MIM_2.png"
        alt="Logo MIM"
        className="mx-auto w-full max-w-xs rounded-lg shadow-xl transition-transform duration-500 ease-in-out transform hover:scale-130 hover:bg-cyan-100"
      />
      {/* Texto flotante sobre la imagen */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-blue-900 text-white text-sm px-4 py-2 rounded-full shadow-lg opacity-80 hover:opacity-100 transition-opacity italic font-thin">
        "Ser para Servir"
      </div>
    </div>

    {/* Botón Panel de Administración */}
    <div className="flex justify-center mt-8">
      <Link
        to="/login"
        className="flex items-center p-3 bg-blue-800 text-white rounded-xl shadow-lg hover:bg-purple-600 transition-colors w-auto h-12"
      >
        <User className="w-5 h-5 mr-2" />
        <span className="font-thin text-md">Panel de Administración</span>
      </Link>
    </div>
  </div>
</section>

    </div>
  );
};

export default MainPage;
