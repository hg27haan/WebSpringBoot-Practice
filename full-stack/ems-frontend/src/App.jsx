// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import EmployeeComponent from './components/EmployeeComponent'
import FooterCompoment from './components/FooterCompoment'
import HeaderCompoment from './components/HeaderCompoment'
import ListEmployeeComponent from './components/ListEmployeeComponent'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <>
      <BrowserRouter>
        <HeaderCompoment />
        <Routes>
          {/* // http://localhost:3000 */}
          <Route path='/' element = { <ListEmployeeComponent />}></Route>
          {/* // http://localhost:3000/employees */}
          <Route path='/employees' element = { <ListEmployeeComponent />}></Route>
          {/* // http://localhost:3000/add-employee */}
          <Route path='/add-employee' element = { <EmployeeComponent /> }></Route>
          {/* // http://localhost:3000/edit-employee/1 */}
          <Route path='/edit-employee/:id' element = { <EmployeeComponent />}></Route>
        </Routes>
        <FooterCompoment />
      </BrowserRouter>
    </>
  )
}

export default App
