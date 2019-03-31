import "../fontawesome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { increment, decrement, deletePost } from '../actions/postActions';
import { connect } from 'react-redux';
import React, { Component } from 'react'
import { delimiter } from "path";
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from'redux'

class ButtonGroup extends Component {
  
  handleClickUp = (e) => {
    this.props.increment(this.props.p);
    }

  handleClickDown = (e) => {
    this.props.decrement(this.props.p);
  }
  
  render(){
    
    const balance = this.props.p.upvotes - this.props.p.downvotes;
        
    let balanceDisplay;
    
    if (balance<0) {
      balanceDisplay = <p className="my-2 text-center text-danger customButtonSize">{balance}</p>;}
    else {
      balanceDisplay = <p className="my-2 text-center customButtonSize">{balance}</p>;
    }

    return (
      <div className='pl-2'>
        <button
          type="button"
          onClick={this.handleClickUp}
          className="btn btn-outline-warning btn-block customButtonSize"
        >
          <FontAwesomeIcon
            icon={"angle-up"}
            size="lg"
            style={{ color: "595959" }}
          />
        </button>
        {balanceDisplay}
        <button
          type="button"
          onClick={this.handleClickDown}
          className="btn btn-outline-warning btn-block customButtonSize"
        >
          <FontAwesomeIcon
            icon={"angle-down"}
            size="lg"
            style={{ color: "#595959" }}
          />
        </button>
        
        <style jsx>{`
          .customButtonSize {
            width: 40px ;
          }
        `}</style>
      </div>
    );
  }
};

const mapDispatchToProps = (dispatch) =>{
  return{
      increment: (p) => dispatch(increment(p)),
      decrement: (p) => dispatch(decrement(p)),
  }
}

export default connect( null, mapDispatchToProps)(ButtonGroup);
