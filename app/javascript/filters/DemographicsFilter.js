
import React from 'react';
import Aux from '../components/Aux'
import AgeFilter from './AgeFilter'
import PopulationFilter from './PopulationFilter'
import {checkDivClassGroup, findOne} from '../components/utils/filterFunctions'


class DemographicsFilter extends React.Component {
    constructor(props){
        super(props)
        this.state = {demographicsPopup:false}

        this.handleClick = this.handleClick.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.handleClear = this.handleClear.bind(this)
        this.handleOuterClick = this.handleOuterClick.bind(this)

        this.setDemographicsPopupRef = this.setDemographicsPopupRef.bind(this);
        this.setDemographicsButtonRef = this.setDemographicsButtonRef.bind(this);
    }

    

    componentDidMount() {
        document.addEventListener('mousedown', this.handleOuterClick);
        
    }
    
    componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleOuterClick);
    }

    setDemographicsPopupRef(node) {
    this.demographicsPopupRef = node;
    }
    
    setDemographicsButtonRef(node) {
    this.demographicsButtonRef = node;
    }

    setDemographicsButtonRef(node) {
        this.demographicsButtonRef = node;
    }


    handleOuterClick(event) {
    if (this.demographicsPopupRef && !this.demographicsPopupRef.contains(event.target) && !this.demographicsButtonRef.contains(event.target)) {
        this.setState({
            demographicsPopup: false
        })
    }
    }

  

    handleClear() {
        this.props.onFilterChange("DemographicsFilter", "")
    }

    handleClick(event){
            this.setState({
                demographicsPopup: !this.state.demographicsPopup
            })
    }


    handleChange(event){
        this.props.onFilterChange("DemographicsFilter", `[demographics]=${event.target.value}`, `demographics=${event.target.value}`)
    }

    

    render(){ 
        const checkActive = (filterName) => {
            if (this.props.activeFilters.includes(filterName)) {
                return true
            } else {
                return false
            }
        }

        const filterList = [
            PopulationFilter,
            AgeFilter
        ]

        const filterListStrings = [
            "PopulationFilter",
            "AgeFilter"
        ]
        const renderFilters = filterList.map( (Filter) => {
            return <Filter activeFilters={this.props.activeFilters} onFilterChange={this.props.onFilterChange} key={Filter.name} filterHolder={this.props.filterHolder} params={this.props.params} isActive={checkActive(Filter.name)} currentUser={this.props.currentUser}/>
        });
    
        return (
            <Aux>
                <div className="filter-popup-parent">
                    <div className={checkDivClassGroup(this.props.activeFilters, filterListStrings, this.state.demographicsPopup)} data-tooltip="test test yoyo" onClick={this.handleClick} ref={this.setDemographicsButtonRef}>
                        {findOne(filterListStrings, this.props.activeFilters) ? 
                            <img src={require('../../assets/images/statsblue.png')} className="filter-icon"/> 
                            : <img src={require('../../assets/images/statsgrey.png')} className="filter-icon"/>}
                        <span>&nbsp;&nbsp;Population</span>&nbsp;&nbsp;<img src={require('../../assets/images/greydownarrow.png')} className="filter-icon-md"/><label htmlFor="Demographics"></label>
                    </div>
                    {this.state.demographicsPopup ?
                    <span> 
                        <div className="filter-popup-div demographics-div" ref={this.setDemographicsPopupRef}>
                            {renderFilters}
                        </div>
                    </span> : null }                       
                </div>
            </Aux>
            )
        }
}

export default DemographicsFilter;
