import Navbar from 'src/components/Navbar/Navbar'
import Sidebar from 'src/components/Sidebar/Sidebar'

const DashboardLayout = ({ children }) => {
  return (
    <div className="bg-indigo-800">
      <Navbar />
      <div className="flex">
        <Sidebar />
        <main className="flex-grow">{children}</main>
      </div>
    </div>
  )
}

export default DashboardLayout
