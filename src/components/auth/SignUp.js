import React, { Component } from 'react'
import {connect} from 'react-redux'
import {signUp} from '../../store/action/authActions'
import { Redirect } from 'react-router-dom'

class SignUp extends Component {

        state = {
            firstName:'',
            lastName:'',
            email:'',
            password:'',
        }

hundleChange=(e)=>{
    this.setState({
        [e.target.id]:e.target.value
    })
}
hundleSubmit=(e)=>{
    e.preventDefault();
    this.props.signUp(this.state)
}

  render() {
    const{authError,auth} = this.props;
    console.log("authError Render SignUP",authError)
    if(auth.uid) return <Redirect to='/dashbord'/>
    return (
        <div className="container">
        <form onSubmit={this.hundleSubmit} className="gray">
        <h5 className="white-text text-darken-3 center"> SignUp</h5>

        <div className="input-field">
        <label htmlFor="firstName">First Name</label>
        <input type="text" id="firstName" onChange={this.hundleChange} />
        </div>
    <br/>
        <div className="input-field">
        <label htmlFor="lastName">Last Name</label>
        <input type="text" id="lastName" onChange={this.hundleChange} />
        </div>
    <br/>
        <div className="input-field">
        <label htmlFor="email">Email</label>
        <input type="email" id="email" onChange={this.hundleChange} />
        </div>
    <br/>
    <br/>
        <div className="input-field">
        <label htmlFor="password">Password</label>
        <input type="password" id="password" onChange={this.hundleChange} />
        </div>
    <br/>
        <div className="input-field">
        <button className="btn pink lighten-1 z-depth-1">SignUp</button>
            <div className="red-text center">
                {authError ? <p>{authError}</p> : null}
            </div>
        </div>
        </form>
        </div>
    );
  }
}
const mapStateToProps =(state)=> {
    return{
        auth: state.firebase.auth,
        authError: state.auth.authError
    }
}
const mapDispatchToProps =(dispatch)=> {
    return {
        signUp: (newUser) => dispatch(signUp(newUser))
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(SignUp);
