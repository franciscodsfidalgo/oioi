import React from "react";
import { connect } from "react-redux";
import { startClock, serverRenderClock } from "../actions/clockActions";
import ClockHolder from "../components/clockHolder";
import Layout from "../components/layout";


class Clock extends React.Component {
  static getInitialProps({ reduxStore, req }) {
    const isServer = !!req;
    reduxStore.dispatch(serverRenderClock(isServer));
    
    return {};
  }

  componentDidMount() {
    const { dispatch } = this.props;
    this.timer = startClock(dispatch);
  }

  componentWillUnmount() {
    console.log("6");
    clearInterval(this.timer);
  }

  render() {
    return (
      <Layout>
        <ClockHolder />
      </Layout>
    );
  }
}

export default connect()(Clock);