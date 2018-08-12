import React from 'react';
import Aux from '../components/Aux'

class NameSearchFilter extends React.Component {
    constructor(props){
        super(props)
        this.state = {timeout: 0}
        this.handleChange = this.handleChange.bind(this)
        this.didSwitchParentObject = true;
    }

    componentDidUpdate ()
	{
	    if (this.didSwitchParentObject)
	    {
            this.didSwitchParentObject= false;
            //debugger;
	        this.refs.myTextInput.value = this.props.searchTerm.split("%20").join(" ");
	    }
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

    



    componentDidMount(){
        console.log(this.props.isActive)
    }

    
       
    

    render(){  
        
       
        return (
            <Aux>
                <input type="search" id="seachbox" name="focus" required className={this.props.activeFilters.includes("NameSearchFilter") ? "search-box yellow-background" : "search-box"} onChange={this.handleChange} placeholder="City name..." ref = "myTextInput"/>              
            </Aux>
            )
        }
}

export default NameSearchFilter;











