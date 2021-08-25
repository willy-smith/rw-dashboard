import { Link, routes } from '@redwoodjs/router'

const Navbar = () => {
  return (
    <div className="py-14">
      <nav className="bg-indigo-800 bg-opacity-100 h-28 top-0 fixed inset-x-0">
        <div className="mx-auto px-8">
          <div className="flex justify-between">
            <div className="flex space-x-4 items-center">
              <div>
                <Link
                  to={routes.home()}
                  className="flex items-center py-6 px-2 text-gray-300"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 mr-4 text-green-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                    />
                  </svg>
                  <span className="hover:text-gray-100 font-semibold">
                    Genus
                  </span>
                </Link>
              </div>
              <div className="flex items-center space-x-4">
                <div className="py-6 px-2 text-gray-300 hover:text-gray-100">
                  Features
                </div>
                <div className="py-6 px-2 text-gray-300 hover:text-gray-100">
                  Pricing
                </div>
              </div>
            </div>

            <div className="items-center space-x-4 py-6 px-2 text-gray-200">
              <button className="bg-indigo-800 text-gray-100 p-4 rounded-md border border-gray-100 hover:bg-gray-100 hover:text-indigo-800 hover:font-semibold">
                Log Out
              </button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
