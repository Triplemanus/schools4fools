import React from 'react';
import './SchoolCard.scss';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

export const SchoolCard = ({
  school_id,
  school_name,
  phone,
  address,
  distance,
  low_Grade,
  high_Grade,
  level,
  is_Charter,
  is_Magnet,
  is_Private
}) => {
// console.log('SchoolCard has been summoned!', school_name, phone, is_Charter, address);
  return (
    <div className="Card">
      <h2>Name: {school_name}</h2>
      <h3>Phone: {phone}</h3>
      <h3>Distance: TBD{distance}</h3>
  
      <Link to={`/schools/${school_id}`}>
        <button className="detail-button" type="button">School Details</button>
      </Link>
    </div>
  )
}

export const mapStateToProps = state => ({
  ...state
});

export default connect(mapStateToProps)(SchoolCard);

SchoolCard.propTypes = {
  school_id: PropTypes.string,
  school_name: PropTypes.string,
  phone: PropTypes.string,
  address: PropTypes.object,
  distance: PropTypes.number,
  low_Grade: PropTypes.string,
  high_Grade: PropTypes.string,
  level: PropTypes.string
}