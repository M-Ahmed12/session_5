const CounterReducer = (state, dispatch) => {
    switch (dispatch) {
      case 'INCREMENT':
        return state + 1
    }
  }

  export default CounterReducer;
  