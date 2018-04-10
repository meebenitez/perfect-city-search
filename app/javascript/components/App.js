import React, { Component } from 'react';
import Aux from './Aux'
import Devise from './auth/Devise'
import CityShow from './CityShow'
import SearchContainer from '../containers/SearchContainer'
import Header from './Header'
import { connect } from 'react-redux'
import * as authActions from '../redux/authactions'
import * as cityActions from '../redux/cityactions'

import { BrowserRouter as Router } from 'react-router-dom';


class App extends React.Component {


  componentDidMount(){
    this.props.checkCurrentUser()
    this.props.initialFetch(location.pathname)
  }


  render () {
    return (
      <Router>
        <Aux>
          <div className="container">
            <Header 
              toggleAuthPopup={this.props.toggleAuthPopup} 
              currentUser={this.props.currentUser} 
              initialFetch={this.props.initialFetch}/>   
          </div>
          <div className="container">
            <div className="main-container">
                {this.props.showAuthPopup ? 
                  <Devise 
                    updateCurrentUser={this.props.updateCurrentUser} 
                    currentUser={this.props.currentUser} 
                    closePopup={this.props.toggleAuthPopup} 
                    signUp={this.props.signUp} 
                    login={this.props.login}
                    logout={this.props.logout}/> : null}
                {this.props.showCityPopup ?
                  <CityShow 
                    closePopup={this.props.toggleCityPopup} 
                    city={this.props.singleCity}
                    heartedCities = {this.props.heartedCities}
                    heartClick={this.props.heartClick}
                    unheartClick={this.props.unheartClick}
                    currentUser = {this.props.currentUser}
                    toggleSingleCityAuthPopup = {this.props.toggleSingleCityAuthPopup}/> : null }
                <SearchContainer 
                  cities={this.props.cities} 
                  heartedCities={this.props.heartedCities} 
                  heartClick={this.props.heartClick } 
                  unheartClick={this.props.unheartClick } 
                  page={this.props.page} 
                  pages={this.props.pages}  
                  handleChangePage={this.props.handleChangePage}
                  currentUser = {this.props.currentUser}
                  totalCount = {this.props.totalCount}
                  totalPages = {this.props.totalPages}
                  startPage = {this.props.startPage}
                  perPage = {this.props.perPage}
                  pageChange = {this.props.pageChange}
                  toggleAuthPopup = {this.props.toggleAuthPopup}
                  toggleCityPopup = {this.props.toggleCityPopup}
                  showCityPopup = {this.props.showCityPopup}
                  currentRoute = {this.props.currentRoute}
                  onFilterChange={this.props.onFilterChange} 
                  params={this.props.params} 
                  activeFilters={this.props.activeFilters} 
                  inactiveFilters={this.props.inactiveFilters} 
                  clearAllFilters={this.props.clearAllFilters}
                  unclick={this.props.unclick}
                  showSingleCity={this.props.showSingleCity}
                  toggleCheck={this.props.toggleCheck} />   
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
    hashTag: state.city.hashTag
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onFilterChange: (event) => dispatch(cityActions.filterChange(event)),
    initialFetch: () => dispatch(cityActions.initialFetch()),
    heartedFetch: () => dispatch(cityActions.heartedFetch()),
    heartClick: (city) => dispatch(cityActions.heartClick(city)),
    unheartClick: (city) => dispatch(cityActions.unheartClick(city)),
    toggleCityPopup: () => dispatch(cityActions.toggleCityPopup()),
    pageChange: (direction, page) => dispatch(cityActions.pageChange(direction, page)),
    initialFetch: (route) => dispatch(cityActions.initialFetch(route)),
    logout: () => dispatch(authActions.logout()),
    clearHearted: () => dispatch(cityActions.clearHearted()),
    clearAllFilters: () => dispatch(cityActions.clearAllFilters()),
    unclick: (id) => dispatch(cityActions.unclick(id)),
    setSingleCity: (city) => dispatch(cityActions.setSingleCity(city)),
    showSingleCity: (city) => dispatch(cityActions.showSingleCity(city)),
    toggleSingleCityAuthPopup: () => dispatch(cityActions.toggleSingleCityAuthPopup()),
    signUp: (user) => dispatch(authActions.signUp(user)),
    login: (user) => dispatch(authActions.login(user)),
    updateCurrentUser: (email) => dispatch(authActions.updateCurrentUser(email)),
    checkCurrentUser: () => dispatch(authActions.checkCurrentUser()),
    toggleAuthPopup: () => dispatch(authActions.toggleAuthPopup()),
    toggleCheck: (filter, defaultValue) => dispatch(cityActions.toggleCheck(filter, defaultValue))
  }
}

export default connect(mapStateToProps, mapDispatchToProps,)(App);
