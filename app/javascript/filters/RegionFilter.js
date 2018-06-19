
import React from 'react';
import Aux from '../components/Aux'

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

      handleOuterClick(event) {
        if (this.regionPopupRef && !this.regionPopupRef.contains(event.target) && !this.regionButtonRef.contains(event.target)) {
            this.setState({
                regionPopup: false
            })
        }
      }

  

    handleClear() {
  
            this.props.onFilterChange("RegionFilter", ""), () => {
                this.setState({
                    regionPopup: false
                })
            }
         
    }

    handleClick(){
        this.setState({
            regionPopup: !this.state.regionPopup
        })

    }


    handleChange(event){
        this.props.onFilterChange("RegionFilter", `[region]=${event.target.value}`, `region=${event.target.value}`)
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
                    <div className={this.props.isActive ? "filter-div filter-on tooltip-top" : "filter-div filter-off" } data-tooltip="test test yoyo" onClick={this.handleClick} ref={this.setRegionButtonRef}>
                        {this.props.isActive ? 
                            <img src={require('../../assets/images/blueusmap.png')} className="filter-icon"/> 
                            : <img src={require('../../assets/images/greyusmap.png')} className="filter-icon"/>}
                        {this.props.isActive === true ?
                            <span>&nbsp;&nbsp;<span className="bold">{REGIONMAPPING[Object.values(this.props.params.filter((filter) => {return Object.keys(filter)[0] === "RegionFilter"})[0])[0].split("&")[0].split("=").pop()]}</span><span onClick={this.handleClear}>&nbsp;&nbsp;&nbsp;<img src={require('../../assets/images/xout2.png')} className="filter-icon-sm"/></span></span>
                            : <span>&nbsp;Region</span>}<label htmlFor="Region"></label>
                    </div>
                    {this.state.regionPopup ?
                    <span> 
                        <div className="filter-popup-div region-div" ref={this.setRegionPopupRef}>
                            <span className="bold">Regions:</span>
                            <br></br>
                            <select defaultValue={this.props.isActive ? Object.values(this.props.params.filter((filter) => {return Object.keys(filter)[0] === "RegionFilter"})[0])[0].split("&")[0].split("=").pop() : ""} id= "RegionFilter" onChange={this.handleChange}>
                                <option value="">All</option>
                                <option value="pacific_coast">Pacific Coast</option>
                                <option value="mountain">Mountain</option>
                                <option value="southwest">Southwest</option>
                                <option value="heartland">Heartland</option>
                                <option value="midwest">Midwest</option>
                                <option value="southeast">Southeast</option>
                                <option value="appalachian_highlands">Appalachia</option>
                                <option value="mid_atlantic">Mid-Atlantic</option>
                                <option value="new_england">New England</option>
                            </select>
                        </div>
                    </span> : null }                       
                </div>
            </Aux>
            )
        }
}

export default RegionFilter;
