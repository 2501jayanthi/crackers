import { useState } from "react";
import axios from "axios";
import "./index.css";

function Customer() {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [place, setPlace] = useState("");
  const [pincode, setPincode] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [email, setEmail] = useState("");

  async function submit(e) {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/users", {
        name,
        address,
        place,
        pincode,
        whatsapp,
        email,
      });
      setName("");
      setAddress("");
      setPlace("");
      setPincode("");
      setWhatsapp("");
      setEmail("");
    } catch (e) {
      console.log(e);
    }
  }
  return (
    <div className="details-Container">
      <h1 className="heading">Customer Details</h1>
      <form action="POST" id="customerForm" className="form-container">
        <div className="inputs-container">
          <label className="input-heading" htmlFor="name">
            Customer Name
          </label>
          <input
            type="text"
            className="form-outline"
            id="name"
            placeholder="Enter Name"
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>
        <div className="inputs-container">
          <label htmlFor="address" className="input-heading">
            Address
          </label>
          <textarea
            rows="8"
            cols="55"
            className="form-outline"
            id="address"
            placeholder="Enter Address"
            onChange={(e) => {
              setAddress(e.target.value);
            }}
          ></textarea>
        </div>
        <div className="inputs-container">
          <label className="input-heading" htmlFor="place">
            Place
          </label>

          <input
            type="text"
            id="place"
            placeholder="Enter Place"
            onChange={(e) => {
              setPlace(e.target.value);
            }}
          />
        </div>
        <div className="inputs-container">
          <label className="input-heading" htmlFor="pincode">
            Pincode
          </label>

          <input
            type="text"
            id="pincode"
            placeholder="Enter Pincode"
            onChange={(e) => {
              setPincode(e.target.value);
            }}
          />
        </div>
        <div className="inputs-container">
          <label htmlFor="whatsapp" className="input-heading">
            Whatsapp
          </label>
          <input
            type="tel"
            id="whatsapp"
            placeholder="Enter Whatsapp"
            onChange={(e) => {
              setWhatsapp(e.target.value);
            }}
          />
        </div>
        <div className="inputs-container">
          <label className="input-heading" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            id="email"
            placeholder="Enter Email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>
        <button type="submit" className="submit-button" onClick={submit}>
          Submit
        </button>
      </form>
    </div>
  );
}
export default Customer;
