// const detectEthereumProvider = require('@metamask/detect-provider');

const connectWallet = async () => {
  const provider = await detectEthereumProvider();
  const { ethereum } = window
  console.log(window);
  console.log(window.ethereum);
  // console.log(ethereum.isConnected());

  if (provider) {
    // From now on, this should always be true:
    // provider === window.ethereum
    try {
    // startApp(provider); // initialize your app
    const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });
          console.log(accounts[0]);
        } catch (err) {
          console.log(err.message);
        }
  } else {
    console.log('Please install MetaMask!');
  }
}

const connectButton = document.getElementById("metaConnect");
connectButton.addEventListener("click", connectWallet);










// const connectWallet = async () => {
//   console.log(window);
//   console.log(window.ethereum);
//   console.log(ethereum.isConnected());
//   if (typeof window !== "undefined" && typeof window.ethereum !== "undefined") {
//     try {
//       /* MetaMask is installed */

//       const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });
//       console.log(accounts[0]);
//     } catch (err) {
//       console.log(err.message);
//     }
//   } else {
//     // MetaMask is not installed 
//     console.log("Please install Metamask")
//   }
// };

// const connectButton = document.getElementById("metaConnect");
// connectButton.addEventListener("click", connectWallet);





  


 