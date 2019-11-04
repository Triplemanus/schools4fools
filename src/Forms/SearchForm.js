import React from 'react';
import { connect } from 'react-redux';
import { addSchools } from '../actions/index';
import { fetchAllSchools } from '../apiCalls/apiCalls';

export class SearchForm extends React.Component {
  constructor() {
    super();
    this.state = {
      locState: '',
      level: '',
      latLocation: '',
      longLocation: '',
      maxDistance: '',
      errorMsg: ''
    }
  };

  updateForm = e => {
    this.setState({ [e.target.name]: [e.target.value] });
    console.log('updateForm state, locState is:', this.state, this.state.locState);
  };

  clearInputs = () => {
    this.setState({ 
      locState: '',
      level: '',
      latLocation: '',
      longLocation: '',
      maxDistance: '',
      error: ''
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const querySchools = {
      state: this.state.locState,
      level: this.state.level,
      latLocation: parseFloat(this.state.latLocation),
      longLocation:  parseFloat(this.state.longLocation),
      maxDistance: parseInt(this.state.maxDistance)
    };
    console.log('querySchools in submit: ', querySchools);
    this.searchSchools(querySchools);
    this.clearInputs();
  };

  searchSchools = querySchools => {
    console.log('querySchools in searchSchools: ', querySchools);
    fetchAllSchools(querySchools)
    .then(schools => {
      console.log('schools: ', schools);
      this.props.addSchools(schools)})
    .catch(error => this.setState({ error: error }));
  };

  render() {
    const { locState, level, latLocation, longLocation, maxDistance } = this.state;
    console.log('SearchForm state is : ', this.state);
    return (
      <header>
        <h1>Search Form</h1>
        <form id="SearchForm">
          <input
            type="text"
            name="locState"
            value={locState}
            placeholder="State"
            onChange={this.updateForm}        
          />
          <input
            name="level"
            value={level}
            placeholder="Level"
            onChange={this.updateForm}          
          />
          <input
          name="latLocation"
          value={latLocation}
          placeholder="Latitude"
          onChange={this.updateForm}
          />
          <input
          name="longLocation"
          value={longLocation}
          placeholder="Longitude"
          onChange={this.updateForm}
          />
          <input
          name="maxDistance"
          value={maxDistance}
          placeholder="Distance"
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
  ...state
});

export const mapDispatchToProps = dispatch => ({
  addSchools: schools => dispatch(addSchools(schools))
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchForm);