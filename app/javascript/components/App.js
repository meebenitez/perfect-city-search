import React, { Component } from 'react';
import Aux from './Aux'
import Devise from './auth/Devise'
import CityShow from './CityShow'
import Pagination from './Pagination';
import FilterPopup from '../filters/FilterPopup'
import Test from './Test'
import SearchContainer from '../containers/SearchContainer'
import FilterContainer from '../containers/FilterContainer'
import Header from './Header'
import { connect } from 'react-redux'
import * as authActions from '../redux/authactions'
import * as cityActions from '../redux/cityactions'

import { BrowserRouter as Router } from 'react-router-dom';
import { Route, Link } from 'react-router-dom'



class App extends React.Component {


  componentDidMount(){
    this.props.checkCurrentUser()
    this.props.initialFetch(window.location.hash, location.pathname, this.props.citiesKey)
  }




  render () {
    return (
      <Router>
        <Aux>
          <div className="col-xs-12 zero-padding white-background">
              
                <div className="col-xs-12 white-background fixed bottom-line fixed zero-padding">
                  <div className="header-height">
                    <Header 
                      {...this.props} />   
                  </div>
                  <div className="max-width-container">
                    <FilterContainer {...this.props}/>
                </div>
                </div>
                <div className="col-xs-12">
                  <div>
                      {this.props.showAuthPopup ? 
                        <Devise 
                        updateCurrentUser={this.props.updateCurrentUser} 
                        currentUser={this.props.currentUser} 
                        closePopup={this.props.toggleAuthPopup} 
                        signUp={this.props.signUp} 
                        login={this.props.login}
                        loginError={this.props.loginError}
                        logout={this.props.logout}/> : null}
                      {this.props.showCityPopup ?
                        <CityShow 
                          closePopup={this.props.toggleCityPopup} 
                          city={this.props.singleCity}
                          heartedCities = {this.props.heartedCities}
                          heartClick={this.props.heartClick}
                          unheartClick={this.props.unheartClick}
                          currentUser = {this.props.currentUser}
                          hashString = {this.props.hashString}
                          cityShowAuth = {this.props.cityShowAuth}
                          toggleSingleCityAuthPopup = {this.props.toggleSingleCityAuthPopup}
                          /> : null }                      
                      {this.props.extendedFiltersPopup ? 
                        <FilterPopup {...this.props} /> : null}
                        <SearchContainer {...this.props}/>
                      
                  </div>
                </div>
                <div className="col-xs-12 pagination-collapsed  zero-padding white-background fixed">
                    <Pagination count={this.props.cities.length} {...this.props}/>
                </div>
              
            </div>
       </Aux>
      </Router>
        
    )
    
  }
}

const mapStateToProps = state => {
  return {
    cities: state.city.cities,
    params: state.city.params,
    heartedCities: state.city.heartedCities,
    page: state.city.page,
    pages: state.city.pages,
    startPage: state.city.startPage,
    currentUser: state.auth.currentUser,
    showAuthPopup: state.auth.showAuthPopup,
    showCityPopup: state.city.showCityPopup,
    activeFilters: state.city.activeFilters,
    inactiveFilters: state.city.inactiveFilters,
    totalCount: state.city.totalCount,
    totalPages: state.city.totalPages,
    perPage: state.city.perPage,
    currentRoute: state.city.currentRoute,
    singleCity: state.city.singleCity,
    singleCityWaiting: state.city.singleCityWaiting,
    hashTag: state.city.hashTag,
    searchTerm: state.city.searchTerm,
    searchCities: state.city.searchCities,
    mapZoom: state.city.mapZoom,
    mapCenter: state.city.mapCenter,
    highlightedCity: state.city.highlightedCity,
    extendedFiltersPopup: state.city.extendedFiltersPopup,
    loginError: state.auth.loginError,
    hashString: state.city.hashString,
    holdPage: state.city.holdPage
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onFilterChange: (filter, value, hash) => dispatch(cityActions.filterChange(filter, value, hash)),
    initialFetch: (hash, route, key) => dispatch(cityActions.initialFetch(hash,route, key)),
    heartedFetch: () => dispatch(cityActions.heartedFetch()),
    heartClick: (city) => dispatch(cityActions.heartClick(city)),
    unheartClick: (city) => dispatch(cityActions.unheartClick(city)),
    toggleCityPopup: () => dispatch(cityActions.toggleCityPopup()),
    pageChange: (direction, page) => dispatch(cityActions.pageChange(direction, page)),
    logout: () => dispatch(authActions.logout()),
    clearHearted: () => dispatch(cityActions.clearHearted()),
    clearAllFilters: () => dispatch(cityActions.clearAllFilters()),
    setSingleCity: (city) => dispatch(cityActions.setSingleCity(city)),
    showSingleCity: (city) => dispatch(cityActions.showSingleCity(city)),
    toggleSingleCityAuthPopup: () => dispatch(cityActions.toggleSingleCityAuthPopup()),
    signUp: (user) => dispatch(authActions.signUp(user)),
    login: (user) => dispatch(authActions.login(user)),
    updateCurrentUser: (email) => dispatch(authActions.updateCurrentUser(email)),
    checkCurrentUser: () => dispatch(authActions.checkCurrentUser()),
    toggleAuthPopup: () => dispatch(authActions.toggleAuthPopup()),
    changeZoom: () => dispatch(cityActions.changeZoom()),
    nameHover: (city) => dispatch(cityActions.nameHover(city)),
    toggleExtendedFiltersPopup: () => dispatch(cityActions.toggleExtendedFiltersPopup()),
  }
}



export default connect(mapStateToProps, mapDispatchToProps,)(App);

/*
<Route exact path="/" render={(props) => <SearchContainer {...this.props}/>}/>
                      <Route exact path="/city/" render={(props) => <CityShow city={this.props.singleCity}
                                    heartedCities = {this.props.heartedCities}
                                    heartClick={this.props.heartClick}
                                    unheartClick={this.props.unheartClick}
                                    currentUser = {this.props.currentUser}/>}/>*/