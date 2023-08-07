// import { useState } from "react"
import { useReducer } from "react";
import "./Test.css";

// // using useState
// export default function UseReducer() {
//     const [number, setNumber] = useState(0);
//     function addition() {
//         setNumber(prevState => prevState + 1)
//     }
//     function subtract() {
//         setNumber(prevState => prevState - 1)
//     }

//   return (
//     <div>
//         <button onClick={addition}>Add</button>
//         <p>{number}</p>
//         <button onClick={subtract}>subtract</button>
//     </div>
//   )
// }

// using useReducer
function reducer(state, action) {
    if (action.type === 'addition') {
      return {
        ...state,
        num: state.num + 1
      };
    }
    if (action.type === 'subtract') {
        return {
          ...state,
          num: state.num - 1
        };
      }
    throw Error('Unknown action.');
  }
export default function UseReducer() {
    // const initialState = {num: 0}
    const [state, dispatch] = useReducer(reducer, { num: 0 });

    function addition() {
        dispatch({type: 'addition'})
    }
    function subtract() {
        dispatch({type: 'subtract'})
    }
  return (
    <div className="test">
      <button onClick={addition}>
        Add
    </button>
      <p> {state.num} </p>
      <button onClick={subtract}>
        Subtract
    </button>
    </div>
  );
}
