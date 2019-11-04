import React from 'react';
import './App.scss';
import { Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import SearchForm from '../Forms/SearchForm';
import SchoolCardContainer from '../Containers/SchoolCardContainer';
import { getAllSchools, isLoading, hasErrored } from '../actions';
import { fetchAllSchools } from '../apiCalls/apiCalls';

export class App extends React.Component {
  componentDidMount = async () => {
    try {
      const schools = await fetchAllSchools();
      console.log('fetched schools is: ', schools);
      getAllSchools(schools);
      isLoading(false);
    } catch ({ message }){
      isLoading(false);
      hasErrored(message);
    }
    }
    
    render() {
      return (
        <section className='App'>
        <Link to={"/"} className="header-link">
        <div className="headerContents">
              <h1>Schoolhouses Rock!</h1>
            </div>
          </Link> 
        <Route path="/" render={() => <SearchForm />} />
        <Link to={"/schools"}>
          <section>
            <p>All Matching Schools</p>
          </section>
        </Link>
        <Route path="/schools" render={() => <SchoolCardContainer />} />
      </section>
    )
  }
};

export const mapStateToProps = (state) => ({
  schools: state.schools,
  error: state.error
});

export const mapDispatchToProps = dispatch => ({
  isLoading: () => dispatch(isLoading()),
  getAllSchools: () => dispatch(getAllSchools()),
  hasErrored: () => dispatch(hasErrored())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);