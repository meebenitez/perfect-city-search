import React from 'react';
import Aux from '../components/Aux'
import NameSearchFilter from './NameSearchFilter'
import {checkDivClassGroup, findOne} from '../components/utils/filterFunctions'


class NameSearchContainerFilter extends React.Component {
    constructor(props){
        super(props)
        this.state = {nameSearchContainerPopup:false}

        this.handleClick = this.handleClick.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.handleClear = this.handleClear.bind(this)
        this.handleOuterClick = this.handleOuterClick.bind(this)

        this.setNameSearchContainerPopupRef = this.setNameSearchContainerPopupRef.bind(this);
        this.setNameSearchContainerButtonRef = this.setNameSearchContainerButtonRef.bind(this);
    }

    

    componentDidMount() {
        document.addEventListener('mousedown', this.handleOuterClick);
        
    }
    
    componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleOuterClick);
    }

    setNameSearchContainerPopupRef(node) {
    this.nameSearchContainerPopupRef = node;
    }
    
    setNameSearchContainerButtonRef(node) {
    this.nameSearchContainerButtonRef = node;
    }

    setNameSearchContainerButtonRef(node) {
        this.nameSearchContainerButtonRef = node;
    }


    handleOuterClick(event) {
    if (this.nameSearchContainerPopupRef && !this.nameSearchContainerPopupRef.contains(event.target) && !this.nameSearchContainerButtonRef.contains(event.target)) {
        this.setState({
            nameSearchContainerPopup: false
        })
    }
    }

  

    handleClear() {
        this.props.onFilterChange("NameSearchContainerFilter", "")
    }

    handleClick(event){
            this.setState({
                nameSearchContainerPopup: !this.state.nameSearchContainerPopup
            })
    }


    handleChange(event){
        this.props.onFilterChange("NameSearchContainerFilter", `[nameSearchContainer]=${event.target.value}`, `nameSearchContainer=${event.target.value}`)
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
            NameSearchFilter
            ]

        const filterListStrings = [
            "NameSearchFilter"
        ]
        const renderFilters = filterList.map( (Filter) => {
            return <Filter activeFilters={this.props.activeFilters} onFilterChange={this.props.onFilterChange} key={Filter.name} filterHolder={this.props.filterHolder} params={this.props.params} isActive={checkActive(Filter.name)} currentUser={this.props.currentUser}/>
        });
    
        return (
            <Aux>
                <div className="filter-popup-parent">
                    <div className={checkDivClassGroup(this.props.activeFilters, filterListStrings, this.state.nameSearchContainerPopup)} data-tooltip="test test yoyo" onClick={this.handleClick} ref={this.setNameSearchContainerButtonRef}>
                        {findOne(filterListStrings, this.props.activeFilters) ? 
                            <img src={require('../../assets/images/bluehouse2.png')} className="filter-icon"/> 
                            : <img src={require('../../assets/images/greyhouse2.png')} className="filter-icon"/>}
                        <span>&nbsp;&nbsp;Search by Name</span>&nbsp;&nbsp;{this.state.nameSearchContainerPopup ? <img src={require('../../assets/images/greyuparrow.png')} className="filter-icon-md"/> : <img src={require('../../assets/images/greydownarrow.png')} className="filter-icon-md"/>}<label htmlFor="NameSearchContainer"></label>
                    </div>
                    {this.state.nameSearchContainerPopup ?
                    <span> 
                        <div className="filter-popup-div housing-div" ref={this.setNameSearchContainerPopupRef}>
                            {renderFilters}
                        </div>
                        
                    </span> : null }                       
                </div>
            </Aux>
            )
        }
}

export default NameSearchContainerFilter;

