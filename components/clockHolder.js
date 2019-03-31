import Layout from "../components/layout";
import Clock from "./clock";
import { connect } from "react-redux";

console.log("1");

function ClockHolder({ lastUpdate, light }) {
  return (
    <div>
      <p className="clockPage text-center p-2">This is the clock page</p>
      <Clock lastUpdate={lastUpdate} light={light} />
      <style jsx>{`
        div {
          text-align: center;
        }
        .clockPage {
          color: white;
          background-color: black;
        }
      `}</style>
    </div>
  );
}

function mapStateToProps(state) {
  const { lastUpdate, light } = state.tickR;
  return { lastUpdate, light };
}

export default connect(mapStateToProps)(ClockHolder);
