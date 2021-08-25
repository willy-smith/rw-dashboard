import { Link, routes } from '@redwoodjs/router'

const Sidebar = () => {
  return (
    <div className="bg-indigo-800 text-gray-300">
      <Link to={routes.students()}>Students</Link>
    </div>
  )
}

export default Sidebar
