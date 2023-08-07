import { useReducer, useState } from "react";
import Footer from "../component/Footer/Footer";
import Header from "../component/Header/Header";
import BookingForm from "./BookingForm";
// import Form from "./form";

// export default function Booking() {

//   const [availableTimes, setAvailableTimes] = useState("");

//   const changeTime = (newValue) => {
//     setAvailableTimes(newValue);
//   }
//   return (
//     <div>
//       <Header />
//       {/* <Form /> */}
//       <BookingForm change={changeTime}/>
//       <p>{availableTimes}</p>
//       <Footer />
//     </div>
//   )
// }

const reducer = (state, action) => {
  if (action.type === 'seeDate') {
    return {
      ...state,
      availableTimes: state.availableTimes
    };
  }
}

export default function Booking() {

   function availableTimeChange(newValue) {
    availableTimes(newValue)
   }
  const [state, dispatch] = useReducer(reducer, availableTimeChange(newValue));

  const changeTime = () => {
    dispatch({type: "seeDate"})
  }

  // const updateTimes = () => {

  // }
  return (
    <div>
      <Header />
      {/* <Form /> */}
      <BookingForm change={changeTime}/>
      <p>{state.availableTimes}</p>
      <Footer />
    </div>
  )
}
