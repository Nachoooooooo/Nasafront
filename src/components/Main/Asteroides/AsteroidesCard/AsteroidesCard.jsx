import React from "react";
import axios from "axios";

const AsteroidesCard = (props) => {
  return (
    <>
    <h1>Asteroides Card</h1>
          <div >
              <br />
              name: {props.item.name}
              <br />
              id: {props.item.id}
              <br />
              nametype: {props.item.nametype}
              <br />
              recclass: {props.item.recclass}
              <br />
              mass: {props.item.mass}
              <br />
              fall: {props.item.fall}
              <br />
              year: {props.item.year}
              <br />
              reclat: {props.item.reclat}
              <br />
              reclong: {props.item.reclong}
              <br />
              geolocation: latitude {props.item.geolocation.latitude}, longitude {props.item.geolocation.longitude}
              <br />
              <button id="borrar-button" onClick={() => {
                axios.delete(`https://nasaapinacholopez.herokuapp.com/api/astronomy/neas/delete/${props.item._id}`)
                  .then(() => {
                    props.loadDataAsteroids()
                    alert(`Asteroid Deleted: ${props.item._id}`)

                  })

              }}>DELETE</button>

          </div>
        
    </>
  );
};

export default AsteroidesCard;
