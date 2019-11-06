import React from 'react';
import { Link } from 'react-router-dom';
import './SchoolCardDetails.scss';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';

export const SchoolCardDetails = ({ schools, error, returnRoute}) => {


// export const SchoolCardDetails = ({  school_name, address, phone, distance, returnRoute }) => {
  console.log('S_C_D state, schoolId is : ', schools);
  //<Link to={`${returnRoute}`} className='back-btn'>◀ back</Link>
  return (
    <section className="CardDetails">
      <Link to="/schools" className='back-btn'>◀ back</Link>
      <article id="cardDetails-container">
      <h1 id="school-name">School Name:  {schools.schoolList[1].schoolName}</h1>
      <h2 id="school-address">School Address:  {schools.schoolList[1].address.street}</h2>
      <p className='card-phone'>School Phone:  {schools.schoolList[1].phone}</p>
      <p className='card-distance'>Low Grade:  {schools.schoolList[1].lowGrade}</p>
      </article>
    </section>
  )
}

export const mapStateToProps = state => ({
  ...state
});

export default connect(mapStateToProps)(SchoolCardDetails);

// SchoolCardDetails.propTypes = {
//   school_name: PropTypes.string.isRequired,
//   address: PropTypes.string.isRequired,
//   phone: PropTypes.string.isRequired,
//   distance: PropTypes.number,
//   returnRoute: PropTypes.string.isRequired
// }