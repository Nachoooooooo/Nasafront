import React, { useState, useEffect } from 'react';
import ReactPaginate from 'react-paginate';
import axios from 'axios';

function Asteroids({ itemsPerPage }) {

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

  const [dataAsteroids, setDataAsteroids] = useState([])
  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  async function loadDataAsteroids() {
    let res = await axios.get("https://nasaapinacholopez.herokuapp.com/api/astronomy/landings?to=2022")
    let data = res.data
    setDataAsteroids(data)
  }

  function Items({ currentItems }) {
    return (
      <>
        {currentItems &&
          currentItems.map((item, i) => (
            <div id="po" key={i}>
              <li>
                <br />
                name: {item.name}
                <br />
                id: {item.id}
                <br />
                nametype: {item.nametype}
                <br />
                recclass: {item.recclass}
                <br />
                mass: {item.mass}
                <br />
                fall: {item.fall}
                <br />
                year: {item.year}
                <br />
                reclat: {item.reclat}
                <br />
                reclong: {item.reclong}
                <br />
                geolocation: latitude {item.geolocation.latitude}, longitude {item.geolocation.longitude}
                <br />
                <button id="borrar-button" onClick={() => {
                  axios.delete(`https://nasaapinacholopez.herokuapp.com/api/astronomy/neas/delete/${item.designation}`)
                    .then(() => {
                      loadDataAsteroids()
                      alert(`Asteroid Deleted: ${item._id}`)

                    })

                }}>DELETE</button>


              </li>
            </div>
          ))}
      </>
    );
  }



  useEffect(() => {

    loadDataAsteroids()

  }, [])

  useEffect(() => {
    // Fetch items from another resources.
    const endOffset = itemOffset + itemsPerPage;
    console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    setCurrentItems(dataAsteroids.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(dataAsteroids.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, dataAsteroids]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % dataAsteroids.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };


  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()


    axios.post("https://nasaapinacholopez.herokuapp.com/api/astronomy/neas/create", values).then((res) => {

      alert(`Asteroid OK: ${res.data._id}`)
    })
  }

  return (
    <section className="po">
      <h1>Asteroids</h1>
      <h3>Datos del Asteroide:</h3>
      <form id="po" onSubmit={handleSubmit}>
        <label htmlFor="name">name</label>
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
        <button type="submit" id="dbutton">SUBMIT ASTEROID</button>
      </form>
      <ul>

        <Items currentItems={currentItems} />


      </ul>

      <ReactPaginate id="paginas"
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
      />




    </section>
  )
}

export default Asteroids