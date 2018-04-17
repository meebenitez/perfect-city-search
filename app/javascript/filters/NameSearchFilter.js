import React from 'react';
import Aux from '../components/Aux'

class NameSearchFilter extends React.Component {
    constructor(props){
        super(props)
        this.state = {timeout: 0}
        this.handleChange = this.handleChange.bind(this)
    }
    handleChange = (event) => {
    
        var value = event.target.value; // this is the search text
        if(this.state.timeout) clearTimeout(this.state.timeout);
        this.state.timeout = setTimeout(() => {
            if (value === "") {
                this.props.onFilterChange("NameSearchFilter","");
            } else {
                this.props.onFilterChange("NameSearchFilter",`[term]=${value}`,`name=${value}`); 
            }
            }, 300);
        }
       
    

    render(){    

        return (
            <Aux>
                <input type="search" id="seachbox" name="focus" required className="search-box" onChange={this.handleChange} placeholder="Search by city name..."/>
                <br></br>
            </Aux>
            )
        }
}

export default NameSearchFilter;











