import React, { Component } from "react";
import Layout_nopostbar from "../components/layout_nopostbar";
import { connect } from 'react-redux';
import { SignOut } from '../actions/authActions';
import Router from 'next/router'



class Profile extends Component{
  constructor(props) {
    super(props);
    this.onClickLogOut=this.onClickLogOut.bind(this);
  }

  onClickLogOut(){
    this.props.SignOut();
  }

  render(){
    if(this.props.auth.isEmpty){
      Router.push('/')
    }
    return(
        <div>
          <Layout_nopostbar>
            <div className='container-flex'>
              <div className='row justify-content-center'>
                <button onClick={this.onClickLogOut}>Log Out</button>
              </div>
            </div>
            <style jsx>{`
                .container-flex {
                padding: 6%;
                }
              `}
            </style>
          </Layout_nopostbar>
        </div>
      )
    }
}
  

const mapStateToProps = state => ({
  auth: state.firebase.auth
})

const mapDispatchToProps = (dispacth) => {
  return {
    SignOut: ()=>dispacth(SignOut())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
