// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Router, Route, Set } from '@redwoodjs/router'
import StudentsLayout from 'src/layouts/StudentsLayout'
import DashboardLayout from './layouts/DashboardLayout/DashboardLayout'

const Routes = () => {
  return (
    <Router>
      <Route path="/" page={HomePage} name="home" />
      <Set wrap={DashboardLayout}>
        <Set wrap={StudentsLayout}>
          <Route path="/students/new" page={StudentNewStudentPage} name="newStudent" />
          <Route path="/students/{id:Int}/edit" page={StudentEditStudentPage} name="editStudent" />
          <Route path="/students/{id:Int}" page={StudentStudentPage} name="student" />
          <Route path="/students" page={StudentStudentsPage} name="students" />
        </Set>
        <Route path="/about" page={AboutPage} name="about" />
      </Set>
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
