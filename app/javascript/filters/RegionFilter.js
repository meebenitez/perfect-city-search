
import React from 'react';
import Aux from '../components/Aux'

class RegionFilter extends React.Component {
    constructor(props){
        super(props)
        this.state = {region: null, regionPopup:false}

        this.handleClick = this.handleClick.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.handleClear = this.handleClear.bind(this)
        this.setStart = this.setStart.bind(this)
        this.handleOuterClick = this.handleOuterClick.bind(this)

        this.setRegionPopupRef = this.setRegionPopupRef.bind(this);
        this.setRegionButtonRef = this.setRegionButtonRef.bind(this);
        //this.focusRegionRef = () => {
        //    if (this.regionRef) this.regionRef.focus();
        //}
    }

    componentDidMount() {
        document.addEventListener('mousedown', this.handleOuterClick);
        
        
        
      }
    
      componentWillUnmount() {
        document.removeEventListener('mousedown', this.handleOuterClick);
      }

      setStart(){
          debugger;
        if (this.props.isActive) {
            this.setState(
                {
                    region: Object.values(this.props.params.filter((filter) => {return Object.keys(filter)[0] === "RegionFilter"})[0])[0].split("&")[0].split("=").pop()
                })
            
        } else {
            this.setState(
                {
                    region: ""
                })
        } 
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
        this.setState({
            regionPopup: false
        }, () => {
            this.props.onFilterChange("RegionFilter", "")
        })
    }

    //this.setState({
    //    regionPopup: true
    //}, () => {
    //    this.props.onFilterChange("RegionFilter", `[region]=${this.state.region}`, `region=${this.state.region}` )
    //})

  

    handleClick(){
        console.log(`popup is ${this.state.regionPopup}`)
        this.setState({
            regionPopup: !this.state.regionPopup
        })

    }



    handleChange(event){
        this.props.onFilterChange("RegionFilter", `[region]=${event.target.value}`, `region=${event.target.value}`)
    }

 
    

    render(){    
    
        return (
            <Aux>
                
                    <div className="filter-popup-parent">
                        <div className={this.props.isActive ? "filter-div filter-on tooltip-top" : "filter-div filter-off" } data-tooltip="test test yoyo" onClick={this.handleClick} ref={this.setRegionButtonRef}>
                            {this.props.isActive ? <img src={require('../../assets/images/blueusmap.png')} className="filter-icon"/> : <img src={require('../../assets/images/greyusmap.png')} className="filter-icon"/>}&nbsp;Region{this.props.isActive === true ? <span>:&nbsp;{Object.values(this.props.params.filter((filter) => {return Object.keys(filter)[0] === "RegionFilter"})[0])[0].split("&")[0].split("=").pop()}<span onClick={this.handleClear}>&nbsp;&nbsp;(x)</span></span>: null}<label htmlFor="Region"></label>
                        </div>
                        {this.state.regionPopup ?
                        <span> 
                            <div className="region-div" ref={this.setRegionPopupRef}>
                                <span className="bold">Regions:</span>
                                <br></br>
                                <select defaultValue={this.props.isActive ? Object.values(this.props.params.filter((filter) => {return Object.keys(filter)[0] === "RegionFilter"})[0])[0].split("&")[0].split("=").pop() : null} id= "RegionFilter" onChange={this.handleChange}>
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
                        </span>
                            : null }                       
                        
                    </div>
                
            </Aux>
            )
        }



}

export default RegionFilter;
