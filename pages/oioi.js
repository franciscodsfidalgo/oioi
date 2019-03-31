import React from "react";
import { connect } from "react-redux";
import Layout from "../components/layout";

class oioi extends React.Component {
  render() {
    return <Layout />;
  }
}

export default connect()(oioi);
