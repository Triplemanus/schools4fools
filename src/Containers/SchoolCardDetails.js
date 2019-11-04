import React from 'react';
import { Link } from 'react-router-dom';
import './SchoolCardDetails.scss';
import PropTypes from 'prop-types'

const SchoolCardDetails = ({  school_name, address, phone, distance, returnRoute }) => {
  return (
    <section className="CardDetails">
      <Link to={`${returnRoute}`} className='back-btn'>◀ back</Link>
      <article id="cardDetails-container">
      <h1 id="school-name">{school_name}</h1>
      <h2 id="address">{address}</h2>
      <p className='card-phone'>{phone}</p>
      <p className='card-distance'>{distance}</p>
      </article>
    </section>
  )
}

export default SchoolCardDetails;

SchoolCardDetails.propTypes = {
  school_name: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  distance: PropTypes.number,
  returnRoute: PropTypes.string.isRequired
}