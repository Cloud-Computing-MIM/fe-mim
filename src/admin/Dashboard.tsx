import React from 'react'
import { useAuth } from './context/AuthContext'
import { useNavigate } from 'react-router-dom'
import { FaUserAlt } from 'react-icons/fa'
import { RiQuestionnaireLine } from "react-icons/ri";
import { FaFileAlt } from 'react-icons/fa'; 

const AdminDashboard: React.FC = () => {
  const { user, logout } = useAuth()
  const navigate = useNavigate()

  const handleLogout = () => {
    logout()
    navigate('/login')
  }

  return (
    <div className="min-h-screen bg-gray-100">
            {/* Header */}
            <header className="bg-blue-900 text-white w-full flex items-center justify-between p-4">
          <div className="flex flex-col">
            <h1 className="text-8xl font-thin mt-2 ml-1">MIM</h1>
              <h2 className="text-3xl font-thin ml-2">Modulo de Información Marista</h2>
              <h3 className="text-2xl font-thin italic ml-2">Admin Panel</h3>
              <FaUserAlt className="text-white-600 text-3xl ml-2" />
          </div>
          <img src="/public/MIM_2.png" alt="Logo MIM" className="h-40" />
          </header>
          <header className="bg-blue-200 text-white  p-4">
          <nav className="bg-white shadow-sm w-full p-6">
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
      <span className="text-gray-700 font-bold w-24">User:</span>
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
<nav className="bg-white shadow-sm w-full p-2">
  <div className="flex justify-start"> {/* Alinea el botón a la derecha */}
    <button
      className="bg-white border border-gray-300 hover:bg-gray-100 text-gray-900 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline flex items-center space-x-2"
    >
      <FaFileAlt className="text-xl" /> {/* Ícono de reporte */}
      <span>Reporte</span>
    </button>
  </div>
</nav>

      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <div className="border-4 border-dashed border-gray-200 rounded-lg h-96 p-4">
            <h2 className="text-2xl font-bold mb-4">Admin Panel Content</h2>
            <p>This is where you can add your admin panel content, such as user management, settings, etc.</p>
          </div>
        </div>
      </main>
    </div>
  )
}


export default AdminDashboard;