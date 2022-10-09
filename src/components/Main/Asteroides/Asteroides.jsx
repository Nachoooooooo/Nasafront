import React, { useState, useEffect } from 'react';
import axios from 'axios';

function AltaAsteroide() {

  const [values, setValues] = useState({
    name: '',
    id: '',
    nametype: '',
    recclass: '',
    mass: '',
    fall: '',
    year: '',
    reclat: '',
    reclong: '',
    geolocation: { "latitude": "50.775", "longitude": "6.08333" }
      
  });

  const [dataAsteroides, setDataAsteroides] = useState([])

  useEffect(() => {
    async function loadDataAsteroides() {
      let res = await axios.get("https://nasaapinacholopez.herokuapp.com/api/astronomy/neas?to=2022")
      let data = res.data
      setDataAsteroides(data)
    }
    loadDataAsteroides()

  }, [])



  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
   

    axios.post("https://nasaapinacholopez.herokuapp.com/api/astronomy/neas/create", values).then((res) => {

      alert(`Asteroide Publicado: ${res.data._id}`)
    })
  }

  return (
    <section className="pokem">
      <h1>AltaAsteroide</h1>
      <h3>Datos del Asteroide:</h3>
      <form id="pokem" onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input name="name" type="text" onChange={handleChange}></input>
        <label htmlFor="id">id</label>
        <input name="id" type="text" onChange={handleChange}></input>
        <label htmlFor="nametype">nametype</label>
        <input name="nametype" type="text" onChange={handleChange}></input>
        <label htmlFor="recclass">recclass</label>
        <input name="recclass" type="text" onChange={handleChange}></input>
        <label htmlFor="mass">mass</label>
        <input name="mass" type="text" onChange={handleChange}></input>
        <label htmlFor="fall">fall</label>
        <input name="fall" type="text" onChange={handleChange}></input>
        <label htmlFor="year">year</label>
        <input name="year" type="text" onChange={handleChange}></input>
        <label htmlFor="reclat">reclat</label>
        <input name="reclat" type="text" onChange={handleChange}></input>
        <label htmlFor="reclong">reclong</label>
        <input name="reclong" type="text" onChange={handleChange}></input>
        <label htmlFor="geolocation">geolocation</label>
        <input name="geolocation" type="text" onChange={handleChange}></input>
        
        <button type="submit" id="dbutton">ALTA ASTEROIDA</button>
      </form>

      <ul>
        {
          dataAsteroides.map(nea => (

            <li>

              <br />
              DESIGNATION: {nea.designation}
              <br />
              DISCOVERY DATE: {nea.discovery_date}h_mag
              <br />
              h_mag: {nea.h_mag}
              <br />
              moid_au: {nea.moid_au}
              <br />
              q_au_1: {nea.q_au_1}
              <br />
              q_au_2: {nea.q_au_2}
              <br />
              period_yr: {nea.period_yr}
              <br />
              i_deg: {nea.i_deg}
              <br />
              pha: {nea.pha}
              <br />
              orbit_class: {nea.orbit_class}
             
            </li>
          ))
        }


      </ul>



    </section>
  )
}

export default AltaAsteroide