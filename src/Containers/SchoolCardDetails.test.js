import React from 'react'
import { shallow } from 'enzyme'
import SchoolCardDetails from './SchoolCardDetails'

describe('SchoolCardDetails', () => {
  it('should match the snapshot with all data passed in correctly', () => {
    let wrapper = shallow(<SchoolCardDetails 
      school_name= "George Washington High"
      address= "6311 Larchwood Dr., Huntington Beach, CA 92647-2320"
      phone= "(714) 894-7212" 
      distance= {20}
      returnRoute="/"
    />)
    expect(wrapper).toMatchSnapshot()
  })
})