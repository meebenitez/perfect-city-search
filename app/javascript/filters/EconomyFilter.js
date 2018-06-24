
import React from 'react';
import Aux from '../components/Aux'
import {checkDivClassGroup, findOne} from '../components/utils/filterFunctions'
import MedianIncomeFilter from './MedianIncomeFilter';


class EconomyFilter extends React.Component {
    constructor(props){
        super(props)
        this.state = {economyPopup:false}

        this.handleClick = this.handleClick.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.handleClear = this.handleClear.bind(this)
        this.handleOuterClick = this.handleOuterClick.bind(this)

        this.setEconomyPopupRef = this.setEconomyPopupRef.bind(this);
        this.setEconomyButtonRef = this.setEconomyButtonRef.bind(this);
    }

    

    componentDidMount() {
        document.addEventListener('mousedown', this.handleOuterClick);
        
    }
    
    componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleOuterClick);
    }

    setEconomyPopupRef(node) {
    this.economyPopupRef = node;
    }
    
    setEconomyButtonRef(node) {
    this.economyButtonRef = node;
    }

    setEconomyButtonRef(node) {
        this.economyButtonRef = node;
    }


    handleOuterClick(event) {
    if (this.economyPopupRef && !this.economyPopupRef.contains(event.target) && !this.economyButtonRef.contains(event.target)) {
        this.setState({
            economyPopup: false
        })
    }
    }

  

    handleClear() {
        this.props.onFilterChange("EconomyFilter", "")
    }

    handleClick(event){
            this.setState({
                economyPopup: !this.state.economyPopup
            })
    }


    handleChange(event){
        this.props.onFilterChange("EconomyFilter", `[economy]=${event.target.value}`, `economy=${event.target.value}`)
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
            MedianIncomeFilter
        ]

        const filterListStrings = [
            "MedianIncomeFilter"
        ]
        const renderFilters = filterList.map( (Filter) => {
            return <Filter activeFilters={this.props.activeFilters} onFilterChange={this.props.onFilterChange} key={Filter.name} filterHolder={this.props.filterHolder} params={this.props.params} isActive={checkActive(Filter.name)} currentUser={this.props.currentUser}/>
        });
    
        return (
            <Aux>
                <div className="filter-popup-parent">
                    <div className={checkDivClassGroup(this.props.activeFilters, filterListStrings, this.state.economyPopup)} data-tooltip="test test yoyo" onClick={this.handleClick} ref={this.setEconomyButtonRef}>
                        {findOne(filterListStrings, this.props.activeFilters) ? 
                            <img src={require('../../assets/images/bluepaycheck.png')} className="filter-icon"/> 
                            : <img src={require('../../assets/images/greypaycheck.png')} className="filter-icon"/>}
                        <span>&nbsp;&nbsp;Economy</span>&nbsp;&nbsp;<img src={require('../../assets/images/greydownarrow.png')} className="filter-icon-md"/><label htmlFor="Economy"></label>
                    </div>
                    {this.state.economyPopup ?
                    <span> 
                        <div className="filter-popup-div demographics-div" ref={this.setEconomyPopupRef}>
                            {renderFilters}
                        </div>
                    </span> : null }                       
                </div>
            </Aux>
            )
        }
}

export default EconomyFilter;
