import React, {useState, useEffect} from 'react';
import './App.css';
import Transactions from './components/transactions';
import { transactionsService as service } from './services/';

function App(){

  const [transactions, setTransactions] = useState([])

  useEffect(() => {
    (async () => {
      const transactions = await service.getAll();
      setTransactions(transactions.data)
    })();
  }, []);


 
    return (
      <React.Fragment>
          <nav className="navbar">
              <h1>Retailers Reward Program</h1>
          </nav>
        <Transactions transactions={transactions}/>
      </React.Fragment>
    );


}

export default App;
