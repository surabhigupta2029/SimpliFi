import React from "react";
import Header2 from "./Header2";
import classes from "./Transactions.module.scss";
import TransactionChart from "./TransactionChart";

function Transactions() {
  return (
    <transactions>
      <Header2></Header2>
      <video src="/videos/video.mp4" autoPlay mute loop />
      <div className={classes.Transactions__intro}>
        <h1>Transactions</h1>
        <p>Transactions will go here</p>
        <a href="/mainmenu">
          <button>Back</button>
        </a>
        <TransactionChart />
      </div>
    </transactions>
  );
}

export default Transactions;
