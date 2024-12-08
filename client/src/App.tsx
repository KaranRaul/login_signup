import { useState } from 'react';
import LoginForm from './components/LoginForm';
import SignUpForm from './components/SignUpForm';

function App() {
  const [activeTab, setActiveTab] = useState<'login' | 'signup'>('login');


  return (
    <>

      <div className="min-h-screen bg-gray-100 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-lg shadow-lg">
          <div>
            <h1 className="text-center text-3xl font-extrabold text-gray-900">
              Welcome
            </h1>
            <div className="mt-6 flex border-b border-gray-200">
              <button
                className={`flex-1 py-2 px-4 text-center ${activeTab === 'login'
                  ? 'border-b-2 border-blue-500 text-blue-600'
                  : 'text-gray-500 hover:text-gray-700'
                  }`}
                onClick={() => setActiveTab('login')}
              >
                Login
              </button>
              <button
                className={`flex-1 py-2 px-4 text-center ${activeTab === 'signup'
                  ? 'border-b-2 border-blue-500 text-blue-600'
                  : 'text-gray-500 hover:text-gray-700'
                  }`}
                onClick={() => setActiveTab('signup')}
              >
                Sign Up
              </button>
            </div>
          </div>

          <div className="mt-8">
            {activeTab === 'login' ? <LoginForm /> : <SignUpForm />}
          </div>
        </div>
      </div>
    </>
  )
}

export default App
