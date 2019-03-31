import { INCREMENT, DECREMENT, RESET } from "../actions/types";

// REDUCERS
export default function(state = { count: 0 }, action) {
  switch (action.type) {
    case INCREMENT:
    console.log("INCREMENT");
      return Object.assign({}, state, {
        count: state.count + 1
      });
    case DECREMENT:
    console.log("DECREMENT");
      return Object.assign({}, state, {
        count: state.count - 1
      });
    case RESET:
    console.log("RESET");
      return Object.assign({}, state, {
        count: 0
      });
    default:
      return state;
  }
}

// REDUCERS
// export default function (state = initialState, action) {
//   switch (action.type) {
//     case RESET:
//       return {
//         ...state,
//         count: initialState.count
//       };
//     default:
//       return state;
//   }
// };
