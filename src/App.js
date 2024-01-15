import React, { useState } from "react";
import axios from "axios";
import "./App.css";

export default function App() {
  const [ready, setReady] = useState(false);
  const [ratesData, setRatesData] = useState({});
  const [input, setInput] = useState("1");
  function handleResponse(response) {
    console.log(response.data.rates);

    setRatesData({
      base: response.data.base,
      rates: response.data.rates,
      date: response.data.date,
    });
    setReady(true);
  }

  // function handleOnChange(event) {
  //   console.log(event.target.value);
  //   setInput(event.target.value);
  // }
  function handleOnSubmit(event) {
    setInput(event.target.value);
  }

  if (ready) {
    return (
      <div className="App">
        <h1>Currency Convertion App</h1>
        <div className="content">
          <div className="base">
            <label htmlFor="amount-to-convert">Amount in :</label> <br />
            <input
              type="text"
              id="amount-to-convert"
              // onChange={handleOnChange}
            />
          </div>
          <div className="convert-button">
            <button className="btn" type="sumbit" onSubmit={handleOnSubmit}>
              Convert
            </button>
          </div>
          <div className="converted-amount">
            <h5>
              {input} is 1234 {ratesData.base}
            </h5>
          </div>
        </div>
      </div>
    );
  } else {
    const apiUrl = `http://data.fixer.io/api/latest?access_key=a3a1b102dbb8df0fb280cebe7c1bf2d9`;
    axios.get(apiUrl).then(handleResponse);
    return <p>Loading...</p>;
  }
}
