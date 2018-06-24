
import React from 'react';
import Aux from '../components/Aux'
import {checkParamValues, checkDivClass} from '../components/utils/filterFunctions'


class RegionFilter extends React.Component {
    constructor(props){
        super(props)
        this.state = {regionPopup:false}

        this.handleClick = this.handleClick.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.handleClear = this.handleClear.bind(this)
        this.handleOuterClick = this.handleOuterClick.bind(this)

        this.setRegionPopupRef = this.setRegionPopupRef.bind(this);
        this.setRegionButtonRef = this.setRegionButtonRef.bind(this);
    }

    

    componentDidMount() {
        document.addEventListener('mousedown', this.handleOuterClick);
        
    }
    
    componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleOuterClick);
    }

    setRegionPopupRef(node) {
    this.regionPopupRef = node;
    }
    
    setRegionButtonRef(node) {
    this.regionButtonRef = node;
    }

    setRegionButtonRef(node) {
        this.regionButtonRef = node;
    }



    handleOuterClick(event) {
    if (this.regionPopupRef && !this.regionPopupRef.contains(event.target) && !this.regionButtonRef.contains(event.target)) {
        this.setState({
            regionPopup: false
        })
    }
    }

  

    handleClear() {
        this.props.onFilterChange("RegionFilter", "")
    }

    handleClick(event){
        this.setState({
            regionPopup: !this.state.regionPopup
        })
    }


    handleChange(event){
        this.props.onFilterChange("RegionFilter", `${event.target.value}`, `region=${event.target.value.split("[region]=").join("")}`)
    }

    render(){ 
        const REGIONMAPPING = {
            "pacific_coast":"Pacific Coast",
            "mountain":"Mountain",
            "southwest":"Southwest",
            "heartland":"Heartland",
            "midwest":"Midwest",
            "southeast":"Southeast",
            "appalachian_highlands":"Appalachia",
            "mid_atlantic":"Mid-Atlantic",
            "new_england":"New England"
        }       
        return (
            <Aux>
                <div className="filter-popup-parent">
                    <div className={checkDivClass(this.props.activeFilters, "RegionFilter", this.state.regionPopup)} data-tooltip="test test yoyo" onClick={this.handleClick} ref={this.setRegionButtonRef}>
                        {this.props.activeFilters.includes("RegionFilter") ? 
                            <img src={require('../../assets/images/blueusmap.png')} className="filter-icon"/> 
                            : <img src={require('../../assets/images/greyusmap.png')} className="filter-icon"/>}
                        {this.props.activeFilters.includes("RegionFilter") === true ?
                            <span>&nbsp;&nbsp;<span className="bold">{REGIONMAPPING[Object.values(this.props.params.filter((filter) => {return Object.keys(filter)[0] === "RegionFilter"})[0])[0].split("&")[0].split("=").pop()]}</span></span>
                            : <span>&nbsp;&nbsp;Region</span>}&nbsp;&nbsp;{this.state.regionPopup ? <img src={require('../../assets/images/greyuparrow.png')} className="filter-icon-md"/> : <img src={require('../../assets/images/greydownarrow.png')} className="filter-icon-md"/>}<label htmlFor="Region"></label>
                    </div>
                    {this.state.regionPopup ?
                    <span> 
                    <div className="filter-popup-div demographics-div" ref={this.setRegionPopupRef}>
                        
                    <span> 
                    <div>
                        <div className="underline">Region</div>
                        <div className="input-filter">
                            <form>

                                <div className="filter-button">
                                    <label>
                                        <input
                                        type="radio"
                                        value=""
                                        name="toggle"
                                        checked={!this.props.activeFilters.includes("RegionFilter")}
                                        onChange={this.handleClear}
                                        />
                                        <span>Any</span>
                                    </label>
                                    <label>
                                        <input
                                        type="radio"
                                        value="[region]=pacific_coast"
                                        name="toggle"
                                        checked={this.props.activeFilters.includes("RegionFilter") && checkParamValues(this.props.params, "RegionFilter", "[region]=pacific_coast")}
                                        onChange={this.handleChange}
                                        />
                                        <span>Pacific Coast</span>
                                    </label>
                                    <label>    
                                        <input
                                        type="radio"
                                        value="[region]=mountain"
                                        name="toggle"
                                        checked={this.props.activeFilters.includes("RegionFilter") && checkParamValues(this.props.params, "RegionFilter", "[region]=mountain")}
                                        onChange={this.handleChange}
                                        />
                                        <span>Mountain</span>
                                    </label>
                                    <label>
                                        <input
                                        type="radio"
                                        value="[region]=southwest"
                                        checked={this.props.activeFilters.includes("RegionFilter") && checkParamValues(this.props.params, "RegionFilter", "[region]=southwest")}
                                        onChange={this.handleChange}
                                        />
                                        <span>Southwest</span>
                                    </label>
                                    <label>
                                        <input
                                        type="radio"
                                        value="[region]=heartland"
                                        checked={this.props.activeFilters.includes("RegionFilter") && checkParamValues(this.props.params, "RegionFilter", "[region]=heartland")}
                                        onChange={this.handleChange}
                                        />
                                        <span>Heartland</span>
                                    </label>
                                    <label>
                                        <input
                                        type="radio"
                                        value="[region]=midwest"
                                        checked={this.props.activeFilters.includes("RegionFilter") && checkParamValues(this.props.params, "RegionFilter", "[region]=midwest")}
                                        onChange={this.handleChange}
                                        />
                                        <span>Midwest</span>
                                    </label>
                                    <label>
                                        <input
                                        type="radio"
                                        value="[region]=southeast"
                                        checked={this.props.activeFilters.includes("RegionFilter") && checkParamValues(this.props.params, "RegionFilter", "[region]=southeast")}
                                        onChange={this.handleChange}
                                        />
                                        <span>Southeast</span>
                                    </label>
                                    <label>
                                        <input
                                        type="radio"
                                        value="[region]=appalachian_highlands"
                                        checked={this.props.activeFilters.includes("RegionFilter") && checkParamValues(this.props.params, "RegionFilter", "[region]=appalachian_highlands")}
                                        onChange={this.handleChange}
                                        />
                                        <span>Appalachia Highlands</span>
                                    </label>
                                    <label>
                                        <input
                                        type="radio"
                                        value="[region]=mid_atlantic"
                                        checked={this.props.activeFilters.includes("RegionFilter") && checkParamValues(this.props.params, "RegionFilter", "[region]=mid_atlantic")}
                                        onChange={this.handleChange}
                                        />
                                        <span>Mid-Atlantic</span>
                                    </label>
                                    <label>
                                        <input
                                        type="radio"
                                        value="[region]=new_england"
                                        checked={this.props.activeFilters.includes("RegionFilter") && checkParamValues(this.props.params, "RegionFilter", "[region]=new_england")}
                                        onChange={this.handleChange}
                                        />
                                        <span>New England</span>
                                    </label>
                                </div>                                    
                            
                            
                        </form>
                        </div>
                     
                        
                    </div>
                </span>
                        
                    
            </div> 
        </span> : null }                       
                </div>
            </Aux>
            )
        }
}

export default RegionFilter;