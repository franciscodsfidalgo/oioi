import { TICK } from "../actions/types";

// REDUCERS
export default function(state = { lastUpdate: 0, light: false }, action) {
  switch (action.type) {
    case TICK:
      console.log("TICK");
      return Object.assign({}, state, {
        lastUpdate: action.ts,
        light: !!action.light
      });
    default:
      return state;
  }
}
