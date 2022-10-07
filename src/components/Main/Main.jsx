import React, { Component } from "react";
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import NotFound from '../NotFound'
import Pokemons from './Pokemons'
import Altapokemon from "./Pokemons/Altapokemon/Altapokemon";



export class Main extends Component {
  render() {
    return (
    <main>
      <Routes>
        <Route element={<Home />} path={"/"} />
        <Route element={<NotFound />} path={"/*"} />
        <Route element={<Pokemons />} path={"/pokemons"} />
        <Route element={<Altapokemon />} path={"/altapokemons"} />
      </Routes>
    </main>
    )
  }
}


export default Main;
