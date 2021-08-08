import React, {useEffect, useState} from "react";
import btc from "./btc.png";
import "./App.css";

function App() {
  const [coinData, setCoinData] = useState({
    symbol: null,
    prevAsk: null,
    ask: null,
    delta: null,
  });

  const checkCrypto = (coin) => {
    const apiURL = `${window.location.href}/${coin}`;

    fetch(apiURL)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setCoinData({
          symbol: data.buy,
          prevAsk: coinData.ask,
          ask: data.ask,
          delta: ((coinData.ask - coinData.prevAsk) / coinData.prevAsk) * 100,
        });
      })
      .catch((err) => console.log("The errors are as follows..", err));
  };

  return (
    <div className="App">
      <header className="App-header">
        <div className="Padding"></div>
        <img src={btc} className="App-logo" alt="btc" />
        <h1> Check your crypto prices </h1>
        <a onClick={() => checkCrypto("BTC")} className="App-link">
          {" "}
          Bitcoin{" "}
        </a>
        <a onClick={() => checkCrypto("ETH")} className="App-link">
          {" "}
          Ethereum{" "}
        </a>
        <a onClick={() => checkCrypto("XRP")} className="App-link">
          {" "}
          Ripple{" "}
        </a>
        <section>
          <p> Token symbol: {coinData.symbol}</p>
          <p> Ask price: ${Math.round(coinData.ask)} USD </p>
          <p> % change: {coinData.delta}% </p>
        </section>
      </header>
    </div>
  );
}

export default App;
