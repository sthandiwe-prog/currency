import React, { useState } from "react";
import axios from "axios";
import "./App.css";

export default function App() {
  const [ready, setReady] = useState(false);
  const [input, setInput] = useState();

  function handleResponse(response) {
    setReady(true);
    console.log(response.data);
  }

  function handleSubmit(event) {
    event.preventDefault();
    setInput(event.target.fromCurrency.value);
  }

  if (ready) {
    return (
      <div className="App">
        <h1>Currency Convertion App</h1>
        <div className="content">
          <form onSubmit={handleSubmit}>
            <label htmlFor="currency-to-convert-from">Convert from: </label>{" "}
            <input
              type="text"
              name="fromCurrency"
              id="currency-to-convert-from"
              placeholder="EUR"
            />{" "}
            <br />
            <label htmlFor="currency-to-convert-to">To Currency: </label>
            <input
              type="text"
              name="toCurrency"
              id="currency-to-convert-to"
              placeholder="AUD"
            />{" "}
            <br />
            <label htmlFor="amount-to-convert">Your amount: </label>
            <input type="text" id="amount-to-convert" placeholder="234" />
            <br />
            <button className="convert-button" type="sumbit">
              Convert{" "}
            </button>
          </form>

          <div className="converted-amount">
            <h5>1 {input}equals 3 </h5>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = `ff680cf3f475393aa78ef456`;
    const apiUrl = `https://v6.exchangerate-api.com/v6/${apiKey}/pair/EUR/AUD`;
    axios.get(apiUrl).then(handleResponse);
    return <p>Loading...</p>;
  }
}
