import React from 'react';
import Aux from '../components/Aux'

class RegionFilter extends React.Component {
    constructor(props){
        super(props)
        this.state = {region: 'pacific_coast', open: false}
        this.handleClick = this.handleClick.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }


    handleClick(){
        if ( this.props.isActive === false ) {
            this.props.onFilterChange("RegionFilter", `[region]=${this.state.region}`, `region=${this.state.region}` )
        } else {
            this.props.onFilterChange("RegionFilter", "")
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
                {this.props.isActive === true ?
                    <div className="filter-div filter-on tooltip-top" data-tooltip="test test yoyo">
                        <img src={require('../../assets/images/bluehouse.png')} className="filter-icon"/>&nbsp;Region<label onClick={this.handleClick}>x</label><label htmlFor="Region"></label>
                        <div className="region-div">
                            <select defaultValue={Object.values(this.props.params.filter((filter) => {return Object.keys(filter)[0] === "RegionFilter"})[0])[0].split("&")[0].split("=").pop()} id= "RegionFilter" onChange={this.handleChange}>
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
                    </div>
                : <div className="filter-div filter-off" data-balloon="test test yoyo" data-balloon-pos="up" data-balloon-length="medium" onClick={this.handleClick}>
                    <img src={require('../../assets/images/greyhouse.png')} className="filter-icon"/>&nbsp;Region<label htmlFor="RegionFilter"></label><br></br>
                </div> }
            </Aux>
            )
        }



}

export default RegionFilter;





//const RegionFilter = (props) => {
//    return (
//        <div className="filter-div">
//            <label htmlFor="RegionFilter"><img src={require('../../assets/images/region.png')} className="stat-icon-sm"/> Region:</label>
//        </div>
//    )
//}

//export default RegionFilter;



//<select value={props.value} defaultValue={props.filterHolder} id= "RegionFilter" onChange={(event) => props.onFilterChange(event)}>
//<option value="">Deactivate</option>
//<option value="[region]=pacific_coast">Pacific Coast</option>
//<option value="[region]=mountain">Mountain</option>
//<option value="[region]=southwest">Southwest</option>
//<option value="[region]=heartland">Heartland</option>
//<option value="[region]=midwest">Midwest</option>
//<option value="[region]=southeast">Southeast</option>
//<option value="[region]=appalachian_highlands">Appaliachia</option>
//<option value="[region]=mid_atlantic">Mid-Atlantic</option>
//<option value="[region]=new_england">New England</option>
//</select>


