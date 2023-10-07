// src/components/WalletConnector.js
import React, { useState } from 'react';
import Web3 from 'web3';

export const WalletConnector = () => {
  const [address, setAddress] = useState(null);

  const connectWallet = async () => {
    if (window.ethereum) {
      try {
        // Request account access
        await window.ethereum.request({ method: 'eth_requestAccounts' });
        const web3 = new Web3(window.ethereum);
        const accounts = await web3.eth.getAccounts();
        setAddress(accounts[0]);
      } catch (error) {
        console.error(error);
      }
    } else {
      console.log('MetaMask not found. Install or enable MetaMask.');
    }
  };

  // Listen for account changes (disconnect)
  if (window.ethereum && window.ethereum.on) {
    window.ethereum.on('accountsChanged', (accounts) => {
      setAddress(accounts[0] || null);
    });
  }

  return (
    <div>
      {address ? (
        <span><h1>Connected: {address}</h1></span>
      ) : (
        <h1><a href="#" onClick={connectWallet}>Connect Wallet</a></h1>
      )}
    </div>
  );
};

//export default WalletConnector;