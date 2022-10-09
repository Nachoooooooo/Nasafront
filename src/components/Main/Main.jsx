import React, { Component } from "react";
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import NotFound from '../NotFound'
import Neas from './Neas'
import Asteroides from "./Asteroides";



export class Main extends Component {
  render() {
    return (
    <main>
      <Routes>
        <Route element={<Home />} path={"/"} />
        <Route element={<NotFound />} path={"/*"} />
        <Route element={<Neas itemsPerPage={10} />} path={"/neas"} />
        <Route element={<Asteroides />} path={"/asteroides"} />
      </Routes>
    </main>
    )
  }
}


export default Main;
