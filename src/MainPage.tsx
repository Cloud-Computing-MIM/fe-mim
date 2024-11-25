import { Link } from "react-router-dom";
import { MessageSquare, Clock, School, Hammer, Calendar } from "lucide-react";
import Zoom from "react-medium-image-zoom";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import "react-medium-image-zoom/dist/styles.css"; // Estilos de zoom

const MainPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 m-1 ">
      <header className="bg-blue-200 text-white w-full flex items-center justify-between">
        <div className="flex flex-col">
          <h1 className="text-8xl font-thin mt-2">MIM </h1>
          <h2 className="text-3xl font-thin">Módulo de Información Marista</h2>
        </div>
        <img src="/public/MIM_2.png" alt="Logo MIM" className="h-40" />
      </header>

      <main className="container mx-auto p-4 flex flex-col sm:flex-row gap-8  relative right-24">
        <div className="flex flex-col items-start  sm:w-1/3 mb-6 sm:mb-0 justify-start mr-130">
          <Link
            to="/calendario"
            className="flex items-center justify-start p-4 bg-white rounded-xl shadow-lg hover:bg-blue-100 transition-colors w-full mb-4"
          >
            <Calendar className="w-7 h-7 mr-2 text-blue-800" />
            <span className="font-thin text-3xl">Calendario</span>
          </Link>

          <Link
            to="/foro"
            className="flex items-center justify-start p-4 bg-white rounded-xl shadow-lg hover:bg-blue-100 transition-colors w-full mb-4"
          >
            <MessageSquare className="w-7 h-7 mr-2 text-blue-800" />
            <span className="font-thin text-3xl">Foro</span>
          </Link>

          <Link
            to="/horarios"
            className="flex items-center justify-start p-4 bg-white rounded-lg shadow-md hover:bg-blue-100 transition-colors w-full mb-4"
          >
            <Clock className="w-7 h-7 mr-2 text-blue-800" />
            <span className="font-thin text-3xl">Horarios</span>
          </Link>

          <Link
            to="/salones"
            className="flex items-center justify-start p-4 bg-white rounded-lg shadow-md hover:bg-blue-100 transition-colors w-full mb-4"
          >
            <School className="w-7 h-7 mr-2 text-blue-800" />
            <span className="font-thin text-3xl">Salones</span>
          </Link>

          <Link
            to="/talleres"
            className="flex items-center justify-start p-4 bg-white rounded-lg shadow-md hover:bg-blue-100 transition-colors w-full"
          >
            <Hammer className="w-7 h-7 mr-2 text-blue-800" />
            <span className="font-thin text-3xl">Talleres</span>
          </Link>
          <div className="mt-6 flex justify-center">
            <img
              src="/public/logo-universidad-marista.png"
              alt="Logo UMG"
              className="h-48 w-auto relative left-20"
            />
          </div>
        </div>

        <div className="w-full sm:w-full ml-10 justify-end">
          <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <h2 className="text-5xl font-thin mb-4">Mapa Interactivo UMG</h2>
            <div className="relative aspect-video bg-gray-200 rounded-lg overflow-hidden">
              <TransformWrapper
                defaultScale={1}
                minScale={0.5}
                maxScale={5}
                wheel={{ step: 0.1 }} // Controla el zoom con la rueda
              >
                {({ zoomIn, zoomOut, resetTransform }) => (
                  <>
                    <div className="absolute top-0 right-0 p-4 space-x-2 z-10"></div>
                    <TransformComponent>
                      <img
                        src="/public/maps.png" // Ruta a tu imagen
                        alt="Mapa de la universidad"
                        className="w-full h-full object-cover cursor-pointer"
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
      <section className="bg-white p-6 mt-8 rounded-lg shadow-md">
        <h2 className="text-xl font-arial-narrow mb-4">Acerca del Proyecto:</h2>
        <p className="text-md text-gray-700">
          Este proyecto, <strong>Módulo de Información Marista (MIM)</strong>,
          está diseñado para ofrecer información útil y accesible para la
          comunidad de la Universidad Marista. A través de esta plataforma, los
          usuarios pueden acceder a recursos como mapas interactivos, horarios
          de clases, foros de discusión, y más. Nuestro objetivo es mejorar la
          experiencia universitaria mediante una interfaz sencilla y
          herramientas fáciles de usar.
        </p>
        <img
          src="/public/MIM_2.png"
          alt="Logo MIM"
          className="w-auto h-auto h-48"
        />
      </section>
    </div>
  );
};

export default MainPage;
