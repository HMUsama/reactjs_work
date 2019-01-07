import React, { Component } from 'react'
import {connect} from 'react-redux'
import { compose } from 'redux'
import { Redirect } from 'react-router-dom'

class CreateProject extends Component {
  render() {
    const { auth } = this.props;
    if(!auth.uid) return <Redirect to='/signin'/>
    return (
        <div className="dashboard container">
            <div className="row">
              <div className='col s12 m6 '>
              <h4 className="white-text text-darken-6">Where can I get some?</h4>
              <p className="white-text text-darken-1">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
              </p>
              </div>
              <div className='col s12 m5 offset-m1'>
              <h4 className="white-text text-darken-3">Where does it come from?</h4>
              <p className="white-text text-darken-6">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
              </p>
              </div>
            </div>
        </div>
    );
  }
}

const mapStateToProps=(state)=>{
  console.log(" CreateProject ***");
  return{
      auth: state.firebase.auth
  }
}

export default connect(mapStateToProps)(CreateProject);
