import React, { Component } from 'react'
import {connect} from 'react-redux'
import { compose } from 'redux'
import { Redirect } from 'react-router-dom'


class Dashboard extends Component {
  render() {
    const { auth } = this.props;
    if(!auth.uid) return <Redirect to='/signin'/>
    return (
        <div className="dashboard container">
            <div className="row">
              <div className='col s12 m6 '>
              <h4 className="white-text text-darken-3">Earning</h4>
              <p className="white-text text-darken-3">
              <li>
                  10. today
              </li>
              <li>
                  20. yesterday
              </li>
              <li>
                  30.  2 day ago
              </li>
              <li>
                  40.  3 day ago
              </li>
              </p>
              </div>
              <div className='col s12 m5 offset-m1'>
              <h4 className="white-text text-darken-3">Why do we use it?</h4>
              <p className="white-text text-darken-6">
              It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
              </p>
              </div>
            </div>
        </div>
    );
  }
}

const mapStateToProps=(state)=>{
  console.log(" dashboard ***");
  return{
      auth: state.firebase.auth
  }
}

export default connect(mapStateToProps)(Dashboard);
