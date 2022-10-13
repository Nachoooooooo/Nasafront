import React, { useState, useEffect } from 'react';
import ReactPaginate from 'react-paginate';
import axios from 'axios';
import NeasCard from './NeasCard'


function Neas({ itemsPerPage }) {

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
  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  async function loadDataNeas() {
    let res = await axios.get("https://nasaapinacholopez.herokuapp.com/api/astronomy/neas?to=2022")
    let data = res.data
    setDataNeas(data)
    console.log(dataNeas);
  }

  function Items({ currentItems }) {
    return (
      <>
        {currentItems &&
          currentItems.map((item, i) => (
            <NeasCard key={i} item={item} loadDataNeas={loadDataNeas}/>
          ))}
      </>
    );
  }



  useEffect(() => {

   loadDataNeas()
// eslint-disable-next-line
  }, [])

  useEffect(() => {
    // Fetch items from another resources.
    const endOffset = itemOffset + itemsPerPage;
    console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    setCurrentItems(dataNeas.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(dataNeas.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, dataNeas]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % dataNeas.length;
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

      alert(`Nea Publicada: ${res.data._id}`)
    })
  }

  return (
    <section className="po">
      <h1>AltaNeas</h1>
      <h3>Datos del Nea:</h3>
      <form id="po" onSubmit={handleSubmit}>
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
        <button type="submit" id="dbutton">SUBMIT NEA</button>
      </form>

      <ul id="lista">

        <Items currentItems={currentItems} />


      </ul>

      <ReactPaginate className='paginacion'
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        pageCount={pageCount}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
      />

     


    </section>
  )
}

export default Neas