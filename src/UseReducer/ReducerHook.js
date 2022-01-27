import React, { useReducer } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1, showText: "Incrementing" };
    case "DECREMENT":
      return { count: state.count - 1, showText: "Decrementing" };
    default:
      return state;
  }
};

const ReducerHook = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0, showText: true });

  return (
    <div>
      <h1>{state.count}</h1>
      <button
        onClick={
          () => { dispatch({ type: "INCREMENT" });}
        }
      >
        Increment
      </button>

      <button
        onClick={() => {
          dispatch({ type: "DECREMENT" });
        }}
      >
        Decrement
      </button>

       <h1>We're now {state.showText}</h1>
    </div>
  );
};

export default ReducerHook;
