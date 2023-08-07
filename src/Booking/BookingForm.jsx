import "./BookingForm.css";
import User from "./Assets/User.png";
import Email from "./Assets/Email.png";
import Phone from "./Assets/Phone.png";
import { useState } from "react";
// import User from './Assets/User.png'
// import User from './Assets/User.png'

export default function BookingForm({change}) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [guests, setGuests] = useState("");
  const [date, setDate] = useState("");
  const [occasion, setOccasion] = useState("");
  const [timeChange, setTimeChange] = useState("");

  function handleChange(event) {
    let value = event.target.value;
    setTimeChange(value);
    change(value);
 }

  const clearForm = () => {
    setName("");
    setPhone("");
    setEmail("");
    setGuests("");
    // setTime("");
    setDate("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    clearForm();
  };

  return (
    <form action="" onSubmit={handleSubmit}>
      <section className="input-field">
        <img src={User} alt="" />
        <input
          type="text"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
          name="full-name"
          id=""
          placeholder="Full Name"
        />
      </section>

      <section className="input-field">
        <img src={Phone} alt="" />
        <input
          type="number"
          value={phone}
          onChange={(e) => {
            setPhone(e.target.value);
          }}
          name="full-name"
          id=""
          placeholder="Phone Number"
        />
      </section>

      <section className="input-field">
        <img src={Email} alt="" />
        <input
          type="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          name="full-name"
          id=""
          placeholder="Email"
        />
      </section>

      <div className="reserve">
        <section className="input-field">
          <input
            type="date"
            value={date}
            onChange={(e) => {
              setDate(e.target.value);
            }}
            name=""
            id=""
          />
        </section>
        <section className="input-field">
          <select
            value={timeChange}
            onChange={handleChange}
            className="res-time "
          >
            <option>17:00</option>
            <option>18:00</option>
            <option>19:00</option>
            <option>20:00</option>
            <option>21:00</option>
            <option>22:00</option>
          </select>
        </section>
        <section className="input-field">
          <input
            type="number"
            name="full-name"
            value={guests}
            onChange={(e) => {
              setGuests(e.target.value);
            }}
            id=""
            // min="1" max="10"
            placeholder="Number of guests"
          />
        </section>
      </div>

      <section>
        <select
          value={occasion}
          onChange={(e) => {
            setOccasion(e.target.value);
          }}
          className="occasion"
        >
          <option>Wedding</option>
          <option selected>Anniversary</option>
        </select>
      </section>

      <button>Reserve Your Table</button>
      <p>{timeChange} </p>
    </form>
  );
}
