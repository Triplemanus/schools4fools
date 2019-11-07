import React from 'react';
import './SchoolCard.scss';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getSchoolDetails } from '../apiCalls/apiCalls';

export const SchoolCard = ({
  school_id,
  school_name,
  phone,
  address,
  distance
}, schoolID) => {

  const getSchoolDetails = (e) => {
    schoolID = school_id;
    console.log('e.target', e.target, school_id, schoolID);
  }
  return (
    <div className="Card" key={schoolID}>
      <h2>Name: {school_name}</h2>
      <h3>Address: {address.street}</h3>
      <h3>Phone: {phone}</h3>
      <h3>Distance: TBD{distance}</h3>
      <h5>School_ID: {school_id} </h5>
      <Link to={`/schools/${school_id}`}>
        <button className="detail-button" onClick={e => getSchoolDetails(e)}>School Details</button>
      </Link>
    </div>
  )
}

export const mapStateToProps = (state, schoolID) => ({
  schools: state.schools,
  schoolID
});

export default connect(mapStateToProps)(SchoolCard);

SchoolCard.propTypes = {
  school_id: PropTypes.string,
  school_name: PropTypes.string,
  phone: PropTypes.string,
  distance: PropTypes.number,
  low_Grade: PropTypes.string,
  high_Grade: PropTypes.string,
  level: PropTypes.string
}