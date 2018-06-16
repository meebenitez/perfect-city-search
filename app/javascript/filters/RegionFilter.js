
import React from 'react';
import Aux from '../components/Aux'

class RegionFilter extends React.Component {
    constructor(props){
        super(props)
        this.state = {region: 'pacific_coast', regionPopup: false}
        this.handleClick = this.handleClick.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.handleClear = this.handleClear.bind(this)
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

  

    handleClick(){
        console.log(`popup is ${this.state.regionPopup}`)
        if ( this.props.isActive === false ) {
            if (this.state.regionPopup === false) {
                this.setState({
                    regionPopup: true
                }, () => {
                    this.props.onFilterChange("RegionFilter", `[region]=${this.state.region}`, `region=${this.state.region}` )
                })
            } else {
                this.setState({
                    regionPopup: true
                })
            }
        } else {
            if (this.state.regionPopup === false) {
                this.setState({
                    regionPopup: true
                })
            } else {
                this.setState({
                    regionPopup: false
                })
            }
            
        }

    }



    handleChange(event){
        
            this.setState({
                region: event.target.value
            }, () => {
                this.props.onFilterChange("RegionFilter", `[region]=${this.state.region}`, `region=${this.state.region}`)
            })
        
    }

 
    

    render(){    
    
        return (
            <Aux>
                
                    <div className="filter-popup-parent">
                        <div className={this.props.isActive === true ? "filter-div filter-on tooltip-top" : "filter-div filter-off" } data-tooltip="test test yoyo" onClick={this.handleClick} ref={this.setRegionButtonRef}>
                            {this.props.isActive === true ? <img src={require('../../assets/images/bluehouse.png')} className="filter-icon"/> : <img src={require('../../assets/images/greyhouse.png')} className="filter-icon"/>}&nbsp;Region<label onClick={this.handleClear}>x</label><label htmlFor="Region"></label>
                        </div>
                        {this.state.regionPopup === true ?
                        <span> 
                            <div className="region-div" ref={this.setRegionPopupRef}>
                                <span className="bold">Regions:</span>
                                <br></br>
                                <select defaultValue={this.props.params.length > 0 ? Object.values(this.props.params.filter((filter) => {return Object.keys(filter)[0] === "RegionFilter"})[0])[0].split("&")[0].split("=").pop() : "pacific_coast" } id= "RegionFilter" onChange={this.handleChange}>
                                    <option value="pacific_coast">Pacific Coast</option>
                                    <option value="mountain">Mountain</option>
                                    <option value="southwest">Southwest</option>
                                    <option value="heartland">Heartland</option>
                                    <option value="midwest">Midwest</option>
                                    <option value="southeast">Southeast</option>
                                    <option value="appalachian_highlands">Appaliachia</option>
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
