import React from "react";
import axios from "axios";


const AsteroidesCard = (props) => {
  return (
    <article className= "asteroides-card">
      <h1 className="asteroides-card__title">{props.item.name}</h1>
      <div className="asteroides-card__databox">
        <p>id: {props.item.id}</p>
        <p>nametype: {props.item.nametype}</p>
        <p>recclass: {props.item.recclass}</p>
        <p>mass: {props.item.mass}</p>
        <p>fall: {props.item.fall}</p>
        <p>year: {props.item.year}</p>
        <p>reclat: {props.item.reclat}</p>
        <p>reclong: {props.item.reclong}</p>
        <p>geolocation: latitude {props.item.geolocation.latitude}, longitude {props.item.geolocation.longitude}</p>
        <button className="borrar-button" onClick={() => {

          axios.delete(`https://nasaapinacholopez.herokuapp.com/api/astronomy/landings/delete/${props.item.id}`)
            .then(() => {
              props.loadDataAsteroids()
              alert(`Asteroid Deleted: ${props.item.id}`)

            })
          props.deleteAsteroide(props.index)
        }}>DELETE</button>

      </div>

    </article>
  );
};

export default AsteroidesCard;
