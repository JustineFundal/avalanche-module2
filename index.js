import React, { useState } from 'react';
import Web3 from 'web3';

function App() {
  const [rpm, setRpm] = useState('');
  const [account, setAccount] = useState('');
  const [web3, setWeb3] = useState(null);

  const handleInputChange = (e) => {
    setRpm(e.target.value);
  };

  const getGear = () => {
    if (account != ""){
      if (rpm === '' || rpm === '0') return 'Neutral';
    if (rpm.toLowerCase() === 'r') return 'You are in Reverse mode';
    const rpmValue = parseInt(rpm, 10);
    if (isNaN(rpmValue)) return 'Invalid input';
    if (rpmValue >= 120) return 'You are in 5th gear';
    if (rpmValue >= 100) return 'You are in 4th gear';
    if (rpmValue >= 60) return 'You are in 3rd gear';
    if (rpmValue >= 20) return 'You are in 2nd gear';
    return 'You are in 1st gear';
    } return "you need to connect to your metamask first";
  };

  const connectWallet = async () => {
    if (window.ethereum) {
      try {
        const web3Instance = new Web3(window.ethereum);
        await window.ethereum.enable();
        const accounts = await web3Instance.eth.getAccounts();
        setAccount(accounts[0]); 
        setWeb3(web3Instance);
        console.log("Connected to MetaMask with address:", address);
      } catch (error) {
        console.error("Error connecting to MetaMask", error);
        
      }
    } else {
      console.log("MetaMask not detected");
      alert("MetaMask not detected. Please install MetaMask and try again.");
    }
  };


  return (
    <div className="App">
      <header className="App-header">
        <h1>RPM Gear Indicator</h1>
        <button onClick={connectWallet}>
          {account ? `Connected: ${account}` : 'Connect MetaMask'}
        </button>
        <input
          type="text"
          value={rpm}
          onChange={handleInputChange}
          placeholder="Enter RPM or R/r for reverse"
        />
        <p>{getGear()}</p>

      </header>
      <style jsx>{`
        .App {
          text-align: center;
        }

        .App-header {
          background-color: #282c34;
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          font-size: calc(10px + 2vmin);
          color: white;
        }

        input {
          padding: 10px;
          font-size: 1rem;
          margin-bottom: 20px;
        }

        button {
          padding: 10px 20px;
          font-size: 1rem;
          margin-bottom: 20px;
          cursor: pointer;
        }

        button:disabled {
          background-color: grey;
          cursor: not-allowed;
        }
      `}</style>
    </div>
  );
}

export default App;
