import React, { Component } from "react";
import myGifhome from '../../../assets/poke2.gif'


class Home extends Component {
  render() {
    return (
      <div style={{ backgroundImage: `url("https://wallpapercave.com/wp/jWfYZxV.jpg")` }}>
        <img id="gifhome" src={myGifhome} alt="gif" />
        <h1>POKEMON</h1>
        <a href="/pokemons">
        <button id="dbutton">VER POKEMONS</button>
        <p id="letras">"PULSA PARA VER POKEMONS"</p>
      </a>
      </div>
    )
  }

}

export default Home
