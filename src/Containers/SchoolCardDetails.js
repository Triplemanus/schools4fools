import React from 'react';
import { Link } from 'react-router-dom';
import './SchoolCardDetails.scss';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

export const SchoolCardDetails = ({  school_name, address, phone, distance, returnRoute }) => {
  console.log('S_C_D state is : ', school_name);
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

export const mapStateToProps = state => ({
  ...state
});

export default connect(mapStateToProps)(SchoolCardDetails);

SchoolCardDetails.propTypes = {
  school_name: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  distance: PropTypes.number,
  returnRoute: PropTypes.string.isRequired
}