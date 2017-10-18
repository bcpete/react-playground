import { createStore } from 'redux';

//reducers 
//1. reducers are pure functions
//2. never change state OR action

const countReducer = (state = { count: 0 }, action) => {
  switch (action.type){
    case 'INCREMENT':
      return {
        count: state.count + action.incrementBy
      }
    case 'RESET':
      return {
        count: 0
      }
    case 'DECREMENT':
      return {
        count: state.count - action.decrementBy
      }
    default:
      return state;
  }
};

//Action generators  - functions that return action objects.
const incrementCount = ({ incrementBy = 1 } = {}) => ({
  type: 'INCREMENT',
  incrementBy
});

const decrementCount = ({ decrementBy = 1 } = {}) => ({
  type: 'DECREMENT',
  decrementBy
})

const store = createStore(countReducer);

console.log(store.getState());

store.dispatch(incrementCount({ incrementBy : 5}));

console.log(store.getState());

store.dispatch(incrementCount());

console.log(store.getState());

store.dispatch({
  type: 'RESET'
});

console.log(store.getState());

store.dispatch(decrementCount({ decrementBy : 5 }));

console.log(store.getState());