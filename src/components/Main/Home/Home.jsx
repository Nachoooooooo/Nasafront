import React, { useEffect, useState } from 'react';
import myGifhome from '../../../assets/nasa.gif'
import axios from "axios";


 const Home =()=> {
  const [url, setUrl] = useState("");  
  useEffect(() => {
    async function fetchData() {
      
        const res = await axios.get(`https://api.nasa.gov/planetary/apod?api_key=BnOM4iL8zsVf6Yir7TcxSoMkwD73uYQLeSQ0YCoj`);
        setUrl(res.data.url);
      
     
    }

    fetchData();
  }, []); // componentDidUpdate
  




    return (
      <div id="backgro"style={{ backgroundImage: `url("${url}")` }}>
        <img id="gifhome" src={myGifhome} alt="gif" />
        <h1>NASA APP</h1>
        <a href="/asteroides">
        <button id="hbutton">ASTEROIDES</button>
        <p id="letras">"PULSA PARA VER ASTEROIDES"</p>
      </a>
      </div>
    )
  }


  export default Home;

