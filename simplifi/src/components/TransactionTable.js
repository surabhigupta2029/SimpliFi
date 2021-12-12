import { useState, useEffect } from "react";

export default function TransactionTable() {
    const [transactions, setTransaction] = useState([]);

    useEffect(() => {
        getTransactions();
    }, []);

    const getTransactions = async () => {
        const response = await fetch("/transactions");
        const data = await response.json();
        console.log(data.transactions);
        setTransaction(data.transactions);
    };

    return (
        <div>
            <div className="transactions-table">
                <table>
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>Category</th>
                            <th>Description</th>
                            <th>Amount</th>
                        </tr>
                    </thead>
                    <tbody>
                        {transactions.map((transaction) => (
                            <tr key={transaction.account_id}>
                                <td>{transaction.date.slice(0, transaction.date.length - 13)}</td>
                                <td>{transaction.category[0]}</td>
                                <td>{transaction.name}</td>
                                <td>{transaction.amount}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}