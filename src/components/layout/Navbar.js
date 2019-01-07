import React from 'react'
import {Link} from 'react-router-dom'
import SignedInLinks from './SignInLinks'
import SignedOutLinks from './SignOutLinks'
import {connect} from 'react-redux' 

const Navbar = (props) =>{
    const { auth,profile } =props;
    const links = auth.uid ? <SignedInLinks profile={profile}/>:<SignedOutLinks/>;
    return(
        <nav className="nav-wrapper green darken-2">
            <div className="container">
            <Link to='/home' className="brand-logo">Online Earning</Link>
            {links}
            </div>
        </nav>
    )
}
// const mapDispatchToProps

const mapStateToProps=(state)=>{

    console.log(" state navbar 1 ***",state);
    return{
        auth:    state.firebase.auth,
        profile: state.firebase.profile
    }
}

export default connect(mapStateToProps)(Navbar);