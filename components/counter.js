import React, { Component } from "react";
import { connect } from "react-redux";
import Draggable from "react-draggable";
import { Picker } from 'emoji-mart'

import {
  incrementCount,
  decrementCount,
  resetCount
} from "../actions/countActions";

class Counter extends Component {
 

  increment = () => {
    const { dispatch } = this.props;
    dispatch(incrementCount());
  };

  decrement = () => {
    const { dispatch } = this.props;
    dispatch(decrementCount());
  };

  reset = () => {
    const { dispatch } = this.props;
    dispatch(resetCount());
  };

  onChange(e) {
    console.log(e);
  }


  render() {
    const { count } = this.props;
    let a = {
      id: 'smiley',
      name: 'Smiling Face with Open Mouth',
      colons: ':smiley:',
      text: ':)',
      emoticons: [
        '=)',
        '=-)'
      ],
      skin: null,
      native: '😃'
    }
    return (
      <div>
        <h1>
          Count: <span>{count}</span>
        </h1>
        <Draggable>
          <box>
            {a.native}
          </box> 
        </Draggable>
        <button onClick={this.increment}>+1</button>
        <button onClick={this.decrement}>-1</button>
        <button onClick={this.reset}>Reset</button>
        <style jsx>{`
          div {
            text-align: center;
          }
          button {
            background-color: red;
            margin: 2px;
          }
          box {
            background: #fff;
            border: 1px solid #999;
            border-radius: 1px;
            width: 40px;
            height: 40px;
            margin: 5px;
            padding: 5px;
            float: left;
        `}</style>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { count } = state.countR;
  return { count };
}

export default connect(mapStateToProps)(Counter);
