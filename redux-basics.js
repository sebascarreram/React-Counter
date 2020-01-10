const redux = require("redux");
const createStore = redux.createStore;

const initialState = {
  counter: 0
};

//// Reducer
// The reducer gets two arguments, state and action & the state is the old state which it then may update.
// so the state is the first argument, the second argument is the action and then the function has to return
const rootReducer = (state = initialState, action) => {
  if (action.type === "INC_COUNTER") {
    // state.counter++;
    return {
      ...state,
      counter: state.counter + 1
    };
  }
  if (action.type === "ADD_COUNTER") {
    // state.counter++;
    return {
      ...state,
      counter: state.counter + action.value
    };
  }
  return state;
};

// Store

const store = createStore(rootReducer);
console.log(store.getState());

// Subcription
store.subscribe(() => {
  console.log("[ SUBSCRIBE ]", store.getState());
});

// Dispatching Action

store.dispatch({ type: "INC_COUNTER" });
store.dispatch({ type: "ADD_COUNTER", value: 10 });
console.log(store.getState());
