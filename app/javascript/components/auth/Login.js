import React from 'react'


class Login extends React.Component {
    constructor(props){
        super(props);
    }

    handleLogin(e) {
        e.preventDefault()
        const formData = {user: {
            email: document.getElementById("email").value,
            password: document.getElementById("password").value,
        }}
        this.props.login(formData)
    }

    render() {
        return (
            <div> 
                <h3>Login</h3>
                <br></br>
                <form>
                    <input id="email" placeholder="email" /><br></br>
                    <input id="password" type="password"placeholder="password" /><br></br>
                    <button onClick={e => this.handleLogin(e)}>Submit</button>
                </form>
            </div>
        ) 
        
    }
    
}

export default Login;