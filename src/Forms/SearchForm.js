import React from 'react';
import { connect } from 'react-redux';
import { addSchools, isLoading, hasErrored } from '../actions/index';
import { fetchAllSchools } from '../apiCalls/apiCalls';
import { Redirect } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import './SearchForm.scss';

export class SearchForm extends React.Component {
  constructor() {
    super();
    this.state = {
      locState: '',
      level: '',
      latLocation: '',
      longLocation: '',
      maxDistance: '',
      errorMsg: '',
      render: false
    }
  };

  updateForm = e => {
    this.setState({ [e.target.name]: [e.target.value] });
  };

  clearInputs = () => {
    this.setState({ 
      locState: '',
      level: '',
      latLocation: '',
      longLocation: '',
      maxDistance: '',
      error: '',
      render: false
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const querySchools = {
      state: this.state.locState,
      level: this.state.level,
      latLocation: parseFloat(this.state.latLocation),
      longLocation: parseFloat(this.state.longLocation),
      maxDistance: parseInt(this.state.maxDistance)
    };
    this.searchSchools(querySchools);
    this.clearInputs();
  };


  searchSchools = async (querySchools) => {
    // const { addSchools, isLoading, hasErrored } = this.props;
    try {
    isLoading(true);
    let schools = await fetchAllSchools(querySchools)
     // this.props.addSchools(schools)
    this.props.addSchools(schools);
    this.setState({ render: true })
      isLoading(false);  
    } catch ({ message }) {
    this.setState({ render: false })
    isLoading(false);
    hasErrored(message);
  }
}


  
  // searchSchools = querySchools => {
  //   isLoading(true);
  //   fetchAllSchools(querySchools)
  //   .then(schools => {
  //     this.props.addSchools(schools)})
  //     .catch(error => this.setState({ error: error }))
  //     .then(this.setState({ render: true }))
  //   isLoading(false);  
  // };

  render() {
    const { locState, level, latLocation, longLocation, maxDistance } = this.state;
      if (this.state.render) {
        return  <Redirect to="/schools" />
      }
    return (
      <header>
        <h1>School Search </h1>
        <form id="search-form">
          <input
            type="text"
            name="locState"
            value={locState}
            placeholder="State - CO"
            onChange={this.updateForm}        
          />
          <input
            name="level"
            value={level}
            placeholder="High, Middle"
            onChange={this.updateForm}          
          />
          <input
          name="latLocation"
          value={latLocation}
          placeholder="Latitude -39.750949"
          onChange={this.updateForm}
          />
          <input
          label="Longitude"
          name="longLocation"
          value={longLocation}
          placeholder="Longitude -104.996605"
          onChange={this.updateForm}
          />
          <input
          name="maxDistance"
          value={maxDistance}
          placeholder="Distance in Miles"
          onChange={this.updateForm}
          />
          <button onClick={event => this.handleSubmit(event)}>
            Search Schools   
          </button>
        </form>
      </header>
    )
  }
};

export const mapStateToProps = state => ({
  schools: state.schools
});

export const mapDispatchToProps = dispatch => (
  bindActionCreators({
    addSchools,
    isLoading,
    hasErrored
  }, dispatch)


  // addSchools: schools => dispatch(addSchools(schools)),
  // isLoading: 
  // hasErrored
);


export default connect(mapStateToProps, mapDispatchToProps)(SearchForm);