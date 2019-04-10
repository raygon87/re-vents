import { createReducer } from "../../app/common/util/reducerUtil";
import {
  INCREMENT_COUNTER,
  DECREMENT_COUNTER,
  COUNTER_ACTION_STARTED,
  COUNTER_ACTION_FINISHED
} from "./testConstants";

const initialState = {
  data: 42
};

// const testReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case INCREMENT_COUNTER:
//       return {...state, data: state.data + 1};
//     case DECREMENT_COUNTER:
//       return {...state, data: state.data - 1};
//     default:
//       return state;
//   }
// }

// export default testReducer

const incrementCounter = (state, payload) => {
  return { ...state, data: state.data + 1 };
};

const decrementCounter = (state, payload) => {
  return { ...state, data: state.data - 1 };
};

const counterActionStarted = (state, payload) => {
  return { ...state, loading: true };
};

const counterActionFinished = (state, payload) => {
  return { ...state, loading: false };
};

export default createReducer(initialState, {
  [INCREMENT_COUNTER]: incrementCounter,
  [DECREMENT_COUNTER]: decrementCounter,
  [COUNTER_ACTION_STARTED]: counterActionStarted,
  [COUNTER_ACTION_FINISHED]: counterActionFinished
});
