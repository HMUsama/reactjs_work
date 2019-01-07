import React from 'react'
import {NavLink} from 'react-router-dom'
import {connect} from 'react-redux'
import {signOut} from '../../store/action/authActions'  

const SignedInLinks = (props) => {
    
    return(
     <ul className="right">
        <li><NavLink to='/dashbord'>Dashbord</NavLink></li>
        <li><a onClick={props.signOut}>Log Out</a></li>
        
        <li><NavLink to='/dashbord'  
        className="btn btn-floating black lightten-1">
        {props.profile.initails}
        </NavLink></li>
     </ul>
    )
}
const mapDispatchToProps =(dispatch)=>{
    return {
        signOut: () =>dispatch(signOut())
    }
}

export default connect(null,mapDispatchToProps)(SignedInLinks);