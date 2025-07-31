import React from 'react'
import style from "./Layout.module.css"
import { Outlet } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
export default function layout() {
  return <>
  <Navbar/>
  <div className='container my-5 py-5'>
    <Outlet/>
  </div>
  <Footer/>
  </>
}
