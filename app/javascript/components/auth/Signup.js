import React from 'react'


class Signup extends React.Component {
    constructor(props){
        super(props);
    }

    handleSignup(e) {
        e.preventDefault()
        const formData = {user: {
            email: document.getElementById("email").value,
            password: document.getElementById("password").value,
            password_confirmation: document.getElementById("password_confirmation").value
        }}
        this.props.signUp(formData)
    }

    render() {
        return (
            <div> 
                <h3>Signup</h3>
                <form>
                    <input id="email" placeholder="email" /><br></br>
                    <input id="password" type="password" placeholder="password" /><br></br>
                    <input id="password_confirmation" type="password" placeholder="retype password" /><br></br>
                    <button onClick={(e) => this.handleSignup(e)}>Submit</button>
                </form>
            </div>
        ) 
        
    }
    
}

export default Signup;