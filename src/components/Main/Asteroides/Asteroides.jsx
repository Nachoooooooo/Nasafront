import React, { useState, useEffect } from 'react';
import ReactPaginate from 'react-paginate';
import axios from 'axios';
import AsteroidesCard from './AsteroidesCard/AsteroidesCard';

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
    console.log(dataAsteroids);
  }

  function Items({ currentItems }) {
    return (
      <>
        {currentItems &&
          currentItems.map((item, i) => (
            <AsteroidesCard key={i} item={item} loadDataAsteroids={loadDataAsteroids} deleteAsteroide={deleteAsteroide} index={i}/>
          ))}
      </>
    );
  }



  useEffect(() => {
    loadDataAsteroids()
    // eslint-disable-next-line
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

  const deleteAsteroide = (i) => {

    setCurrentItems(currentItems.filter((asteroide, j) => i !== j))
    alert(`Elemento ${i} borrado`)

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

      <ReactPaginate className='paginacion'
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