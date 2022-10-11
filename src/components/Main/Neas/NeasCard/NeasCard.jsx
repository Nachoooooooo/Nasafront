import React from "react";
import axios from "axios";


const NeasCard = (props) => {
  return (
    <div id="po">
      <h1>Tarjeta Neas</h1>

      <br />
      DESIGNATION: {props.item.designation}
      <br />
      DISCOVERY DATE: {props.item.discovery_date}
      <br />
      h_mag: {props.item.h_mag}
      <br />
      moid_au: {props.item.moid_au}
      <br />
      q_au_1: {props.item.q_au_1}
      <br />
      q_au_2: {props.item.q_au_2}
      <br />
      period_yr: {props.item.period_yr}
      <br />
      i_deg: {props.item.i_deg}
      <br />
      pha: {props.item.pha}
      <br />
      orbit_class: {props.item.orbit_class}
      <div id="po">
        <button id="borrar-button" onClick={() => {
          axios.delete(`https://nasaapinacholopez.herokuapp.com/api/astronomy/neas/delete/${props.item.designation}`)
            .then(() => {
                props.loadDataNeas()
                alert(`Nea Deleted: ${props.item._id}`)
        

            })

        }}>DELETE</button>
      </div>



    </div>
  )
};

export default NeasCard;
