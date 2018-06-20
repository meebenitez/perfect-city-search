import React from 'react';
import Aux from '../components/Aux'
import {withCommas} from '../components/utils/filterFunctions'

class HeartedFilter extends React.Component {
    constructor(props){
        super(props)
        this.handleClick = this.handleClick.bind(this)
        this.handleClear = this.handleClear.bind(this)
        
    }

    

    

     

    handleClear() {
        this.props.onFilterChange("HeartedFilter", "")    
    }

    handleClick(){
        if (this.props.currentUser) {
            if (this.props.isActive){
                this.props.onFilterChange("HeartedFilter", "")
            } else {
                this.props.onFilterChange("HeartedFilter", "[hearted]=true", "hearted=true" )
            }
        } else {
            this.props.toggleAuthPopup()
        }

    }

    render(){   

        return (
            <Aux>
                <div className="filter-popup-parent">
                    <div className={this.props.isActive ? "filter-div filter-on tooltip-top" : "filter-div filter-off" } data-tooltip="test test yoyo" onClick={this.handleClick}>
                        {this.props.isActive ? 
                            <img src={require('../../assets/images/redheart.png')} className="filter-icon"/> 
                            : <img src={require('../../assets/images/greyheart.png')} className="filter-icon"/>}
                        {this.props.isActive === true ?
                            <span>&nbsp;&nbsp;<span className="bold">Hearted</span><span onClick={this.handleClear}>&nbsp;&nbsp;&nbsp;<img src={require('../../assets/images/xout2.png')} className="filter-icon-sm"/></span></span>
                            : <span>&nbsp;Hearted</span>}<label htmlFor="hearted"></label>
                    </div>                
                </div>
            </Aux>
            )
        }
}

export default HeartedFilter;








/*import React from 'react';
import {filterHolderFinder} from '../components/utils/filterFunctions'

const AgeFilter = (props) => {
    return (
        <div className="filter-div">
            <label htmlFor="AgeFilter">👥 Median Age:</label>
        </div>
    )
}

export default AgeFilter;

         //   <select value={props.value} defaultValue={filterHolderFinder("AgeFilter", props.params, props.activeFilters)} id= "AgeFilter" onChange={(event) => props.onFilterChange(event)}>
         //           <option value="">Deactivate</option>

                    <option value="[age_from]=0&[age_to]=20">Gen Z</option>
                    <option value="[age_from]=21&[age_to]=39">Millenial</option>
                    <option value="[age_from]=40&[age_to]=51">Gen X</option>
                    <option value="[age_from]=52&[age_to]=70">Baby Boomer</option>
                    <option value="[age_from]=71&[age_to]=150">Silent Age</option>
         //   </select>*/