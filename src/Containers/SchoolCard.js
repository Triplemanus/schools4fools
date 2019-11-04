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
console.log('SchoolCard has been summoned!');
  return (
    <div className="Card">
      <h2>Name: {school_name}</h2>
      <h3>Phone: {phone}</h3>
      <h3>Address: {address}</h3>
      <h3>Distance: {distance}</h3>
      <h3>Level: {level}</h3>
      <h3>Lowest Grade: {low_Grade}</h3>
      <h3>Highest Grade: {high_Grade}</h3>
      <h3>Charter: {is_Charter}</h3>
      <h3>Magnet: {is_Magnet}</h3>
      <h3>Private: {is_Private}</h3>
    </div>
  )
}

export const mapStateToProps = state => ({
  ...state
});

export default connect(mapStateToProps)(SchoolCard);
