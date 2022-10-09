import React, { useState, useEffect } from 'react';
import axios from 'axios';

function AltaNeas() {

  const [values, setValues] = useState({
    designation: '',
    discovery_date: '',
    h_mag: '',
    moid_au: '',
    q_au_1: '',
    q_au_2: '',
    period_yr: '',
    i_deg: '',
    pha: '',
    orbit_class: ''
  });

  const [dataNeas, setDataNeas] = useState([])

  useEffect(() => {
    async function loadDataNeas() {
      let res = await axios.get("https://nasaapinacholopez.herokuapp.com/api/astronomy/neas?to=2022")
      let data = res.data
      setDataNeas(data)
    }
    loadDataNeas()

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

      alert(`Nea Publicada: ${res.data._id}`)
    })
  }

  return (
    <section className="pokem">
      <h1>AltaNeas</h1>
      <h3>Datos del Nea:</h3>
      <form id="pokem" onSubmit={handleSubmit}>
        <label htmlFor="designation">Designation</label>
        <input name="designation" type="text" onChange={handleChange}></input>
        <label htmlFor="discovery_date">discovery_date</label>
        <input name="discovery_date" type="text" onChange={handleChange}></input>
        <label htmlFor="h_mag">h_mag</label>
        <input name="h_mag" type="text" onChange={handleChange}></input>
        <label htmlFor="moid_au">moid_au</label>
        <input name="moid_au" type="text" onChange={handleChange}></input>
        <label htmlFor="q_au_1">q_au_1</label>
        <input name="q_au_1" type="text" onChange={handleChange}></input>
        <label htmlFor="q_au_2">q_au_2</label>
        <input name="q_au_2" type="text" onChange={handleChange}></input>
        <label htmlFor="period_yr">period_yr</label>
        <input name="period_yr" type="text" onChange={handleChange}></input>
        <label htmlFor="i_deg">i_deg</label>
        <input name="i_deg" type="text" onChange={handleChange}></input>
        <label htmlFor="pha">pha</label>
        <input name="pha" type="text" onChange={handleChange}></input>
        <label htmlFor="orbit_class">orbit_class</label>
        <input name="orbit_class" type="text" onChange={handleChange}></input>




        <button type="submit" id="dbutton">ALTA NEA</button>
      </form>

      <ul>
        {
          dataNeas.map(nea => (

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

export default AltaNeas