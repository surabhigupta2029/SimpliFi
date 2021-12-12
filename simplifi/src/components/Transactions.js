import Header2 from "./Header2";
import TransactionChart from "./TransactionChart";

import "./Transactions.css";
import TransactionTable from "./TransactionTable";

function Transactions() {
    return (
        <div>
            <Header2></Header2>
            <video src="/videos/video.mp4" autoPlay mute loop />

            <div className="empty-navbar"></div>

            <div className="transactions-title">
                <h1>Transactions</h1>
            </div>

            <div className="transactions-data">
                <TransactionChart />
                <TransactionTable />
            </div>
        </div>
    );
}

export default Transactions;