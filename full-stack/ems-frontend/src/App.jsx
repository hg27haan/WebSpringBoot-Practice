// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import FooterCompoment from './components/FooterCompoment'
import HeaderCompoment from './components/HeaderCompoment'
import ListEmployeeComponent from './components/ListEmployeeComponent'

function App() {
  return (
    <>
    <HeaderCompoment />
    <ListEmployeeComponent />
    <FooterCompoment />
    </>
  )
}

export default App
