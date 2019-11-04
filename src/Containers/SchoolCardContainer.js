import React from 'react';
import SchoolCard from './SchoolCard';
import './SchoolCardContainer.scss'
import { connect } from 'react-redux';

export const SchoolCardContainer = ({ schools, error }) => {

  let testSchool = {
    school_id: "080336006756",
    key: "080336006756",
    school_name: "George Washington High School",
    phone: '303.399.4532',
    address: '1234 S Monaco St.',
    distance: 5.8,
    low_Grade: '9',
    high_Grade: '12',
    level: 'High',
    is_Charter: false,
    is_Magnet: false,
    is_Private: false
  }

let schoolCards;
schools ? ( schoolCards = schools.schoolList.map(school => {
  return (
      <SchoolCard
      school_id={school.schoolid}
      key={school.schoolid}
      school_name={school.schoolName}
      phone={school.phone}
      address={school.address}
      distance={school.distance}
      low_Grade={school.lowGrade}
      high_Grade={school.highGrade}
      level={school.level}
      is_Charter={school.isCharterSchool}
      is_Magnet={school.isMagnetSchool}
      is_Private={school.isPrivate}
      />
  );
})) : ( schoolCards = <SchoolCard {...testSchool}/> )
  return (
    <section>
      {schoolCards}
    </section>
  )
};

export const mapStateToProps = state => ({
  ...state
});

export default connect(mapStateToProps)(SchoolCardContainer);