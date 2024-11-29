import { FiGlobe, FiMenu, FiUser } from 'react-icons/fi'

export default function Navbar() {
  return (
    <nav className="fixed w-full bg-white shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <img className="h-8 w-auto" src="/airbnb.svg" alt="Airbnb" />
          </div>
          
          <div className="flex items-center">
            <button className="inline-flex items-center px-3 py-2 border border-transparent text-sm font-medium rounded-full hover:bg-gray-50">
              Become a Host
            </button>
            <button className="ml-4 inline-flex items-center">
              <FiGlobe className="h-5 w-5" />
            </button>
            <div className="ml-4 flex items-center border rounded-full p-2 hover:shadow-md">
              <FiMenu className="h-5 w-5" />
              <FiUser className="ml-2 h-5 w-5" />
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
