import React from "react";
import axios from "axios";


const NeasCard = (props) => {
  return (

    <article className="asteroides-card">
      <h1 className="asteroides-card__title">{props.item.designation}</h1>
      <div className="asteroides-card__databox">
        <p>DESIGNATION: {props.item.designation}</p>
        <p>DISCOVERY DATE: {props.item.discovery_date}</p>
        <p>h_mag: {props.item.h_mag}</p>
        <p>moid_au: {props.item.moid_au}</p>
        <p>q_au_1: {props.item.q_au_1}</p>
        <p>q_au_2: {props.item.q_au_2}</p>
        <p>period_yr: {props.item.period_yr}</p>
        <p>i_deg: {props.item.i_deg}</p>
        <p>pha: {props.item.pha}</p>
        <p>orbit_class: {props.item.orbit_class}</p>
        </div>

        <button className="borrar-button" onClick={() => {
          axios.delete(`https://nasaapinacholopez.herokuapp.com/api/astronomy/neas/delete/${props.item.designation}`)
            .then(() => {
              props.loadDataNeas()
              alert(`Nea Deleted: ${props.item._id}`)


            })

        }}>DELETE</button>

     
    </article>

  )
};

export default NeasCard;
