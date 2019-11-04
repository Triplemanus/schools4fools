import React from 'react';
import './SchoolCard.scss';

import { connect } from 'react-redux';

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
console.log('SchoolCard has been summoned!', school_name, phone, is_Charter, address);
  return (
    <div className="Card">
      <h2>Name: {school_name}</h2>
      <p>Phone: {phone}</p>
      <p>Distance: {distance}</p>
      <p>Level: {level}</p>
      <p>Lowest Grade: {low_Grade}</p>
      <p>Highest Grade: {high_Grade}</p>
      <p>Charter: {is_Charter}   Magnet: {is_Magnet}   Private: {is_Private}</p>
    </div>
  )
}

export const mapStateToProps = state => ({
  ...state
});

export default connect(mapStateToProps)(SchoolCard);
