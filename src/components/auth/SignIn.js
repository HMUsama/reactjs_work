import React, { Component } from 'react'
import {connect} from 'react-redux'
import { signIn } from '../../store/action/authActions'
import { Redirect } from 'react-router-dom'

class SignIn extends Component {
    // constructor(){
        state = {
            email:'',
            password:''
        }    
    // }

hundleChange=(e)=>{
    this.setState({
        [e.target.id]:e.target.value
    })
}
hundleSubmit=(e)=>{
    e.preventDefault();
    this.props.signIn(this.state);
}

  render() {
      const{ authError,auth } = this.props;
      console.log("authError Render SignIN",authError)
      if(auth.uid) return <Redirect to='/dashbord'/>
    return (
        <div className="container">
            <form onSubmit={this.hundleSubmit} className="gray">
            <h5 className="white-text text-darken-6 center"> SignIn</h5>
            <div className="input-field">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" onChange={this.hundleChange} />
            </div>
        <br/>
            <div className="input-field">
            <label htmlFor="password">password</label>
            <input type="password" id="password" onChange={this.hundleChange} />
            </div>
        <br/>
            <div className="input-field">
            <button className="btn pink lighten-1 z-depth-2">Login</button>
                <div className="red-text center">
                    {authError ? <p>{authError}</p> : null}
                </div>
            </div>
            </form>
        </div>
    );
  }
}

const mapStateToProps = (state) => {
    return{
        authError: state.auth.authError,
        auth:      state.firebase.auth
    }
}
const mapDispatchToProps=(dispatch)=>{
    return{
        signIn: (creds) =>dispatch(signIn(creds))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(SignIn);
