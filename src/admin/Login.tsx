import React, { useState, useEffect } from 'react';
import { createClient, Session } from '@supabase/supabase-js';
import { FaUserAlt } from 'react-icons/fa';
import { IoHome } from 'react-icons/io5' 

const supabase = createClient(
  'https://uxxgdrzwgymksrcqkdcf.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InV4eGdkcnp3Z3lta3NyY3FrZGNmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzAzMjk0NjQsImV4cCI6MjA0NTkwNTQ2NH0.D8g5sogQtKObLCNCgw7gtArAs45SmYh6XlZCx2JFURo'
);

const Login: React.FC = () => {
  const [session, setSession] = useState<Session | null>(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    // Get the current session
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    // Listen for changes in authentication state
    const { data } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    // Cleanup subscription on unmount
    return () => {
      data?.subscription.unsubscribe();
    };
  }, []);

  const handleSignIn = async () => {
    setLoading(true);
    setError('');
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    setLoading(false);

    if (error) {
      setError(error.message);
    } else {
      setSession(data.session);
    }
  };

  const returnToMainPage = () => {
    navigate('/')
  };

  if (!session) {
    return (
      <div className="min-h-screen bg-gray-200">
        {/* Header */}
      <header className="bg-blue-900 text-white w-full flex items-center justify-between p-4">
        <div className="flex flex-col">
          <h1 className="text-8xl font-thin mt-2">MIM</h1>
          <h2 className="text-3xl font-thin">Modulo de Información Marista</h2>
          <h3 className="text-2xl font-thin italic">Admin Panel</h3>
          <FaUserAlt className="text-white-600 text-3xl" />
        </div>
        <img src="/public/MIM_2.png" alt="Logo MIM" className="h-40" />
        <button
          onClick={returnToMainPage}
          className="inline-block bg-blue-500 text-white p-2 rounded-full text-xl hover:bg-blue-600 shadow-lg transition"
        >
          <IoHome className="text-xl" />
        </button>
      </header>
      
      <main className="flex items-center justify-center min-h-screen bg-gray-400 py-14 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full bg-white shadow-xl rounded-lg p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 text-center">
            Welcome to MIM
          </h2>
          {error && (
            <p className="text-sm text-red-600 mb-2 text-center">{error}</p>
          )}
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-1">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 border rounded-md text-gray-900"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-1">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 border rounded-md text-gray-900"
              placeholder="Enter your password"
            />
          </div>
          <div className="flex justify-center">
            <button
              onClick={handleSignIn}
              disabled={loading}
              className="w-1/2 mr-2 py-2 px-4 bg-blue-900 text-white rounded-md hover:bg-purple-700"
            >
              {loading ? 'Signing In...' : 'Sign In'}
            </button>
          </div>
          
        </div>
      </main>
    </div>
  );
}

  return (
    <div className="min-h-screen bg-gray-200">
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

      {/* Main content */}
      <main className="flex items-center justify-center min-h-screen bg-gray-400 py-14 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full bg-white shadow-xl rounded-lg p-10">
          <div className="text-center">
            <FaUserAlt className="text-purple-600 text-3xl mb-4" />
            <h2 className="text-3xl font-thin text-gray-900">Welcome!</h2>
            <p className="text-sm font-semibold text-gray-900 mt-2">
              Logged in as: {session?.user.email}
            </p>
          </div>
          <div className="mt-6">
            <button
              onClick={() => supabase.auth.signOut()}
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-900 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Sign Out
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Login;
