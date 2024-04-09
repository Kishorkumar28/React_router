import React from "react"
import {Routes, Route, Link} from "react-router-dom"
import FSD from "./Pages/FSD"
import ALL from "./Pages/Home"
import DS from "./Pages/DS"
import Cyber from "./Pages/cyber"
import Career from "./Pages/Career"
import './App.css'

function App() {
  

  return (
    <div >

      <div className="navbar">
        <Link className="links" to={"/"}>All</Link>
        <Link className="links" to={"/fsd"}>FULL STACK DEVELOPMENT</Link>
        <Link className="links" to={"/ds"}>DATA SCIENCE</Link>
        <Link className="links" to={"/cyber"}>CYBER SECURITY</Link>
        <Link className="links" to={"/career"}>CAREER</Link>
      </div>

      <Routes>
        <Route Component={ALL} path="/"/>
        <Route Component={FSD} path="/fsd"/>
        <Route Component={DS} path="/ds"/>
        <Route Component={Cyber} path="/cyber"/>
        <Route Component={Career} path="/career"/>
      </Routes>

    </div>
  )
}

export default App
