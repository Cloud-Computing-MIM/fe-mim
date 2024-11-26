import React, { useState } from 'react'
import { useAuth } from './context/AuthContext'
import { useNavigate } from 'react-router-dom'
import { FaUserAlt } from 'react-icons/fa' // Importamos el ícono

const Login: React.FC = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const { login } = useAuth()
  const navigate = useNavigate()

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    try {
      await login(email, password)
      navigate('/admin')
    } catch (error) {
      setError('Invalid email or password')
    }
  }

  return (
    <div className="min-h-screen bg-gray-200 ">
      {/* Header */}
        <header className="bg-blue-900 text-white w-full flex items-center justify-between p-4">
          <div className="flex flex-col">
            <h1 className="text-8xl font-thin mt-2">MIM</h1>
              <h2 className="text-3xl font-thin">Modulo de Información Marista</h2>
              <h3 className="text-2xl font-thin italic">Admin Panel</h3>
              <FaUserAlt className="text-white-600 text-3xl" />
          </div>
          <img src="/public/MIM_2.png" alt="Logo MIM" className="h-40" />
          </header>

      {/* Main content area */}
      <main className="flex items-top  justify-center min-h-screen bg-gray-400 py-14 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          {/* Card with Login form */}
          <div className="bg-white shadow-xl rounded-lg p-10">
            <div className="flex justify-center items-center space-x-2 mb-6">
              <FaUserAlt className="text-purple-600 text-3xl" />
              <h2 className="text-3xl font-thin text-gray-900 items-center">Sign in 
              <h3 className="text-sm font-semibold  text-gray-900">With your Instititucional E-mail </h3>
              </h2>
            </div>
            
            <form className="space-y-6" onSubmit={handleLogin}>
              <div className="rounded-md shadow-sm -space-y-px p-2" >
                <div>
                  <label htmlFor="email-address" className="sr-only">Email address</label>
                  <input
                    id="email-address"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-900 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-purple-500 focus:z-10 sm:text-sm"
                    placeholder="Institucional Address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div>
                  <label htmlFor="password" className="sr-only">Password</label>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-900 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-purple-500 focus:z-10 sm:text-sm"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
              </div>

              {error && <div className="text-red-500 text-sm">{error}</div>}

              <div>
                <button
                  type="submit"
                  className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-900 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Sign in
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Login
