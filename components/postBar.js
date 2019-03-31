import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { createPost } from "../actions/postActions";
import "../fontawesome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class PostBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ""
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();
    if (this.state.text!==""){
    const post = {
      downvotes: 0,
      id: Math.random(),
      lat: "0.0",
      lon: "0.0",
      posttype: "post",
      replies: "0",
      replyid: "0",
      text: this.state.text,
      timestamp: new Date().toJSON(),
      token: 0,
      upvotes: 0,
      url: ''
    };
    this.props.createPost(post);
    this.setState({text: ""});}
  }

  render() {
    return (
      <nav className="navbar bottomBar fixed-bottom bg-warning">
        <form
          className="d-flex flex-row customFlex align-items-center"
          onSubmit={this.onSubmit}
        >
          <a className="mx-2" href="/">
            <FontAwesomeIcon
              icon={"camera"}
              size="2x"
              style={{ color: "656565" }}
            />
          </a>
          <a className="mx-2" href="/">
            <FontAwesomeIcon
              icon={"image"}
              size="2x"
              style={{ color: "656565" }}
            />
          </a>
          <input
            className="form-control customBorderColor mx-2"
            type="text"
            name="text"
            placeholder="Type a message"
            aria-label="Type a message"
            onChange={this.onChange}
            value={this.state.text}
          />
          <button type="submit" className="ml-2">
            <FontAwesomeIcon
              icon={"paper-plane"}
              size="2x"
              style={{ color: "656565" }}
            />
          </button>
        </form>
        <style jsx>{`
          button {
            background-color: transparent;
            border: transparent;
          }
          .bottomBar {
            height: 55px;
          }

          .customFlex {
            flex: 1;
          }

          .customBorderColor {
            border-color: #666;
            border-radius: 24px;
          }
        `}</style>
      </nav>
    );
  }
}

PostBar.propTypes = {
  createPost: PropTypes.func.isRequired
};

export default connect(
  null,
  { createPost }
)(PostBar);
