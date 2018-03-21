import React from 'react'

class Logout extends React.Component {
    constructor(props){
        super(props);
      }
    handleLogout(e) {
        e.preventDefault();
        this.props.logout()
        this.props.changePage("login")
      }
    render() {
        return (
          <button onClick={e=> this.handleLogout(e)}>Sign Out</button>
        );
      };
    }

export default Logout;