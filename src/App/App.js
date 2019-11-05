import React from 'react';
import './App.scss';
import { Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import SearchForm from '../Forms/SearchForm';
import SchoolCardContainer from '../Containers/SchoolCardContainer';
import SchoolCardDetails from '../Containers/SchoolCardDetails';

// import { getAllSchools, isLoading, hasErrored } from '../actions';
// import { fetchAllSchools } from '../apiCalls/apiCalls';

export class App extends React.Component {

    render() {
      return (
        <section className='App'>
        <Link to="/" className="header-link">
        <div className="headerContents">
              <h1>Schoolhouses Rock!</h1>
            </div>
          </Link> 
        <Route path="/" render={() => <SearchForm />} />
        <Route exact path="/schools" render={() => <SchoolCardContainer />} />
        <Link to="/schools">
          <section>
            <p>Schools Matching Search</p>
          </section>
        </Link>
        <Route exact path="/schools/:school_id" render={() => <SchoolCardDetails />}/>
      </section>
    )
  }
};

export const mapStateToProps = (state) => ({
  schools: state.schools,
  error: state.error
});

export default connect(mapStateToProps)(App);