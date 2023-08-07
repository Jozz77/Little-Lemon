import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Homepage from './Homepage/Homepage'
import Booking from './Booking/Booking'
import UseReducer from './TestFolder/UseReducer'

function App() {

  return (
    <>
       <BrowserRouter>
        <Routes>
          <Route path='/' element={<Homepage /> }> </Route>
          <Route path='/booking' element={<Booking/> }> </Route>
          <Route path='/useReducer' element={<UseReducer/> }> </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
