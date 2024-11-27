import React, {useState} from'react'
import { useAuth } from './context/AuthContext'
import { useNavigate } from 'react-router-dom'
import { FaUserAlt ,FaTheaterMasks} from 'react-icons/fa'
import { RiQuestionnaireLine, RiCalendarScheduleLine } from "react-icons/ri";
import { FaFileAlt } from 'react-icons/fa'; 
import { IoCalendarOutline } from "react-icons/io5";
import { MdOutlineForum, MdOutlineSportsVolleyball } from "react-icons/md";
import { SiGoogleclassroom } from "react-icons/si";
import { BsFillPinMapFill } from "react-icons/bs";
import { IoHome } from "react-icons/io5";

const AdminDashboard: React.FC = () => {
  const { user, logout } = useAuth()
  const navigate = useNavigate()
   {/* Estado para calendario */}
    const [selectedSection, setSelectedSection] = useState('calendario');
    const [selectedSubSection, setSelectedSubSection] = useState('foro');
    const [selectedCalendario, setSelectedCalendario] = useState('');
    const [selectedYear, setSelectedYear] = useState('');
    const [selectedCalendar, setSelectedCalendar] = useState('');
  const handleLogout = () => {
    logout()
    navigate('/login')
  }
  
  const handleSelectCalendario = (calendario: string) => {
    setSelectedCalendario(calendario);
  };
  const handleYearSelect = (year, calendar) => {
    setSelectedYear(year);
    setSelectedCalendar(calendar);
  };

  const handleSaveChanges = () => {
    alert(`Cambios guardados: ${selectedYear} - ${selectedCalendar}`);
  };
  const handleSelectSection = (section: string) => {
    setSelectedSection(section)
  }
  
  const returnToMainPage = () => {
    navigate("/")
  }

  return (
    <div className="min-h-screen bg-gray-100">
            {/* Header */}
            <header className="bg-blue-900 text-white w-full flex items-center justify-between p-4 border-8 border-blue-900 ">
          <div className="flex flex-col">
            <h1 className="text-8xl font-thin mt-2 ml-1">MIM</h1>
              <h2 className="text-3xl font-thin ml-2">Modulo de Información Marista</h2>
              <h3 className="text-2xl font-thin italic ml-2">Admin Panel</h3>
              <FaUserAlt className="text-white-600 text-3xl ml-2" />
          </div>
          <img src="/public/MIM_2.png" alt="Logo MIM" className="h-40 justify-end" />
          <button
          onClick={returnToMainPage}
          className="inline-block bg-blue-500 text-white p-2 rounded-full text-xl hover:bg-blue-600 shadow-lg transition"
        >
          <IoHome className="text-xl" />
        </button>
          </header>
          <header className="bg-blue-200 text-white  p-4 border-8 border-blue-900">
          <nav className="bg-white shadow-sm w-full p-6 border-2 border-gray-900">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-9">
    <div className="flex justify-between items-center space-x-6">
      
      {/* Primera parte: Foto de la persona */}
      <div className="flex items-center">
        <img 
          src="./public/Mikey.jpeg" // Sustituye con la URL de la foto de la persona
          alt="Foto de Usuario"
          className="w-24 h-24 rounded-full object-cover border-2 border-purple-800 mr-14" 
        />
      </div>

      {/* Segunda parte: Información del usuario */}
      <div className="flex flex-col justify-center space-y-4 pr-80">
  {/* Nombre del usuario */}
  <span className="font-semibold text-xl">{user?.name || 'Nombre del Usuario'}</span>

  {/* Información del usuario en formato de lista */}
  <div className="flex flex-col space-y-4 ">
    <div className="flex">
      <span className="text-gray-700 font-bold  w-24">User:</span>
      <span className="text-gray-700 italic">{user?.username || 'Miguel A. Contreras M.'}</span>
    </div>

    <div className="flex">
      <span className="text-gray-700 font-bold w-24">Area:</span>
      <span className="text-gray-700 italic">{user?.area || 'Ingenierias'}</span>
    </div>

    <div className="flex">
      <span className="text-gray-700 font-bold w-24">Turn:</span>
      <span className="text-gray-700 italic">{user?.shift || 'Vespertino'}</span>
    </div>

    <div className="flex">
      <span className="text-gray-700 font-bold w-24">Category:</span>
      <span className="text-gray-700 italic">{user?.category || 'Cibernética'}</span>
    </div>

    <div className="flex">
      <span className="text-gray-700 font-bold w-24">Apt:</span>
      <span className="text-gray-700 italic">{user?.department || 'Cloud Computing'}</span>
    </div>
  </div>
</div>


      {/* Botón de Cerrar sesión */}
      <div className="flex flex-col items-center mt-6">
  {/* Botón de Cerrar sesión */}
  <button
    onClick={handleLogout}  // Asegúrate de que handleLogout esté definido
    className="bg-blue-900 hover:bg-purple-900 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline h-18 mt-24"
  >
    Cerrar Sesión
  </button>
  {/* Apartado de "¿Necesitas ayuda?" */}
  <div className="mt-4">
    <p className="text-gray-700 text-sm">
    <RiQuestionnaireLine className="text-white-600 text-xl ml-2"/>
      ¿Necesitas ayuda?{" "}
      <a 
        href="https://www.google.com" 
        target="_blank" 
        rel="noopener noreferrer"
        className="text-blue-500 hover:text-blue-700"
      >
        Haz clic aquí
      </a>
    </p>
  </div>
</div>
    </div>
  </div>
</nav>

</header>

{/*Apartado de reporte*/}
<nav className="bg-white shadow-sm w-full p-2 border-4 border-blue-900 ">
  <div className="flex justify-start"> {/* Alinea el botón a la derecha */}
    <button
      className="bg-white border border-gray-300 hover:bg-gray-100 text-gray-900 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline flex items-center space-x-2"
    >
      <FaFileAlt className="text-xl" /> {/* Ícono de reporte */}
      <span>Reporte</span>
    </button>
  </div>
</nav>
<nav className="bg-blue-200 shadow-sm w-full p-2 border-4 border-blue-900 " >
      <ul className="flex space-x-16">
        <li>
          <button
            onClick={() => handleSelectSection('calendario')}
            className={`flex items-center text-lg p-2 rounded font-thin 
              ${selectedSection === 'calendario' ? 'bg-blue-900 text-white' : 'hover:bg-blue-900 hover:text-white'}
            `}
          >
                Calendario
          <IoCalendarOutline className="text-white-600 text-xl ml-2" />
        </button>
      </li>
      <li>
          <button
            onClick={() => handleSelectSection('foro')}
            className={`flex items-center text-lg p-2 rounded font-thin 
              ${selectedSection === 'foro' ? 'bg-blue-900 text-white' : 'hover:bg-blue-900 hover:text-white'}
            `}
          >
                Foro
            <MdOutlineForum className="text-white-600 text-xl ml-2" />
        </button>
      </li>
      <li>
          <button
            onClick={() => handleSelectSection('horarios')}
            className={`flex items-center text-lg p-2 rounded font-thin 
              ${selectedSection === 'horarios' ? 'bg-blue-900 text-white' : 'hover:bg-blue-900 hover:text-white'}
            `}
          >
                Horarios
            <RiCalendarScheduleLine  className="text-white-600 text-xl ml-2" />
        </button>
      </li>
      <li>
          <button
            onClick={() => handleSelectSection('salones')}
            className={`flex items-center text-lg p-2 rounded font-thin 
              ${selectedSection === 'salones' ? 'bg-blue-900 text-white' : 'hover:bg-blue-900 hover:text-white'}
            `}
          >
                Salones
            <SiGoogleclassroom  className="text-white-600 text-xl ml-2" />
        </button>
      </li>
      <li>
          <button
            onClick={() => handleSelectSection('talleres')}
            className={`flex items-center text-lg p-2 rounded font-thin 
              ${selectedSection === 'talleres' ? 'bg-blue-900 text-white' : 'hover:bg-blue-900 hover:text-white'}
            `}
          >
                Talleres
          <MdOutlineSportsVolleyball className="text-white-600 text-lg ml-2" />
          <FaTheaterMasks className="text-white-600 text-xl ml-2" />
        </button>
      </li>
      <li>
          <button
            onClick={() => handleSelectSection('mapa')}
            className={`flex items-center text-lg p-2 rounded font-thin 
              ${selectedSection === 'mapa' ? 'bg-blue-900 text-white' : 'hover:bg-blue-900 hover:text-white'}
            `}
          >
                Mapa
       <BsFillPinMapFill className="text-white-600 text-lg ml-2" />
        </button>
      </li>
</ul>
</nav>

<h2 className="text-2xl font-bold mb-4">
  {/* Título de la sección */}

  {selectedSection === 'horarios' && 'Horarios'}
  {selectedSection === 'salones' && 'Salones'}
  {selectedSection === 'talleres' && 'Talleres'}
  {selectedSection === 'mapa' && 'Mapa'}

</h2>

{/* Contenido dinámico según la selección */}
<div>
  {selectedSection === 'calendario' && (
    <div className="mt-6">
      <h2 className="text-xl font-semibold">Seleccione el Calendario</h2>

      {/* Contenedor con scroll para seleccionar el calendario */}
      <div className="mt-4 space-y-4">
        <div className="flex space-x-4">
          <button
            onClick={() => handleSelectCalendario('2024-A')}
            className={`px-4 py-2 rounded-md ${selectedCalendario === '2024-A' ? 'bg-purple-500 text-white' : 'bg-gray-200'}`}
          >
            Calendario A
          </button>
          <button
            onClick={() => handleSelectCalendario('2024-B')}
            className={`px-4 py-2 rounded-md ${selectedCalendario === '2024-B' ? 'bg-purple-500 text-white' : 'bg-gray-200'}`}
          >
            Calendario B
          </button>
        </div>

        {/* Estado del calendario seleccionado */}
        <div className="mt-4">
          {selectedCalendario ? (
            <p className="text-blue-500">Calendario seleccionado: {selectedCalendario}</p>
          ) : (
            <p className="text-red-500">Inactivo</p>
          )}
        </div>
      </div>

      {/* Sección para elegir el año y calendario (A/B) con scroll */}
      {selectedCalendario && (
        <div className="mt-6 overflow-y-auto max-h-60">
          <h3 className="text-lg font-semibold italic">Selecciona el año y calendario:</h3>
          <div className="space-y-4 mt-4">
            {/* Lista de años del 2022 al 2031 */}
            {[...Array(10).keys()].map((index) => {
              const year = 2022 + index;
              return (
                <div key={year} className="flex space-x-4">
                  <button
                    onClick={() => handleYearSelect(year, 'A')}
                    className={`px-4 py-2 rounded-md ${selectedYear === year && selectedCalendar === 'A' ? 'bg-blue-200 text-white' : 'bg-gray-200'}`}
                  >
                    {year} - Calendario A
                  </button>
                  <button
                    onClick={() => handleYearSelect(year, 'B')}
                    className={`px-4 py-2 rounded-md ${selectedYear === year && selectedCalendar === 'B' ? 'bg-blue-200 text-white' : 'bg-gray-200'}`}
                  >
                    {year} - Calendario B
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Botón para guardar cambios */}
      {selectedYear && selectedCalendar && (
        <div className="mt-6">
          <button
            onClick={handleSaveChanges}
            className="px-6 py-2 bg-purple-900 text-white rounded-md"
          >
            Guardar Cambios
          </button>
        </div>
      )}
    </div>
  )}

  {/* Otras secciones  FORO*/}
  {selectedSection === 'foro' && (
  <div className="mt-10">
    <h2 className="text-xl font-semibold">Seleccione una sección</h2>

    {/* Contenedor de las secciones del foro, ahora en disposición vertical */}
    <div className="mt-4 space-y-4">
      <div className="flex flex-col space-y-4"> {/* Flex-col para disposición vertical con espacio más pequeño */}
        <button
          onClick={() => setSelectedSubSection('novedades')}
          className={`px-3 py-1.5 text-sm  w-auto text-left w-16  ${selectedSubSection === 'novedades' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
        >
          Novedades
        </button>
        <button
          onClick={() => setSelectedSubSection('preguntas')}
          className={`px-3 py-1.5 text-sm rounded-md w-full text-left ${selectedSubSection === 'preguntas' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
        >
          Preguntas Frecuentes
        </button>
        <button
          onClick={() => setSelectedSubSection('contactanos')}
          className={`px-3 py-1.5 text-sm rounded-md w-full text-left ${selectedSubSection === 'contactanos' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
        >
          Contáctanos
        </button>
        <button
          onClick={() => setSelectedSubSection('mural')}
          className={`px-3 py-1.5 text-sm rounded-md w-full text-left ${selectedSubSection === 'mural' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
        >
          Mural Marista
        </button>
        <button
          onClick={() => setSelectedSubSection('formularios')}
          className={`px-3 py-1.5 text-sm rounded-md w-full text-left ${selectedSubSection === 'formularios' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
        >
          Formularios
        </button>
      </div>
      
      {/* Mostrar contenido de la sección seleccionada */}
      <div className="mt-4">
        {selectedSubSection === 'novedades' && (
          <p>Aquí se visualizarán las novedades del foro.</p>
        )}
        {selectedSubSection === 'preguntas' && (
          <p>Aquí se visualizarán las preguntas frecuentes.</p>
        )}
        {selectedSubSection === 'contactanos' && (
          <p>Aquí se visualizarán las formas de contacto.</p>
        )}
        {selectedSubSection === 'mural' && (
          <p>Aquí se visualizará el mural Marista.</p>
        )}
        {selectedSubSection === 'formularios' && (
          <p>Aquí se visualizarán los formularios disponibles.</p>
        )}
      </div>
    </div>
  </div>
)}


  {selectedSection === 'horarios' && <p>Aquí se visualizarán los horarios.</p>}
  {selectedSection === 'salones' && <p>Aquí se visualizarán los salones.</p>}
  {selectedSection === 'talleres' && <p>Aquí se visualizarán los talleres.</p>}
  {selectedSection === 'mapa' && <p>Aquí se visualizará el mapa.</p>}
</div>
</div>


  )
}


export default AdminDashboard;