import React from 'react'
import Signup from './Signup'
import Login from './Login'
import Logout from './Logout'


class Devise extends React.Component {
    constructor(props){
        super(props);
        if (!this.props.currentUser){
            this.state = {
                authPage: "login"
            }
        } else {
            this.state = {
                authPage: "logout"
            }
        }
        
    }


    changePage = (newPage) => {
        this.setState({
            authPage: newPage
        })
    }



    render() {
        
            switch (this.state.authPage) {
                case "signup": 
                    return (
                        <div className='popup'>
                            <div className='popup_inner'>
                                <button onClick={this.props.closePopup}>x</button>
                                <br></br>
                                <br></br>
                                <br></br>
                                <center>
                                    <div className="error-message">{this.props.loginError}</div>
                                    <Signup 
                                        changePage={this.changePage} 
                                        updateCurrentUser={this.props.updateCurrentUser} 
                                        signUp={this.props.signUp} />
                                    <p>Already a member?<button onClick={() => this.changePage("login")}>Log in!</button></p>
                                </center>
                            </div>
                        </div>
                    )
                case "logout":
                    return (
                        <div className='popup'>
                            <div className='popup_inner'>
                                <button onClick={this.props.closePopup}>x</button>
                                <br></br>
                                <br></br>
                                <br></br>
                                <center>
                                    <Logout 
                                        changePage={this.changePage} 
                                        updateCurrentUser={this.props.updateCurrentUser}
                                        logout={this.props.logout}/>
                                </center>
                            </div>
                        </div>
                    )
                default:
                    return (
                        <div className='popup'>
                            <div className='popup_inner'>
                                <button onClick={this.props.closePopup}>x</button>
                                <br></br>
                                <br></br>
                                <br></br>
                                <center>
                                    <div className="error-message">{this.props.loginError}</div>
                                    <Login 
                                        changePage={this.changePage} 
                                        updateCurrentUser={this.props.updateCurrentUser} 
                                        closePopup={this.props.closePopup} 
                                        login={this.props.login} />
                                    <p>Not a member yet?<button onClick={() => this.changePage("signup")}>Register Here!</button></p>
                                </center>
                            </div>
                        </div>
                    )
                }

            }
}

export default Devise;