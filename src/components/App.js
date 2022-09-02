import { useEffect } from "react";
import { ethers } from "ethers";

import TOKEN_ABI from "../abis/Token.json";
import config from "../config.json";
import { useDispatch } from "react-redux";
import {
  loadAccounts,
  loadExchange,
  loadNetwork,
  loadProvider,
  loadTokens,
} from "../store/interactions";

function App() {
  const dispatch = useDispatch();

  const loadBlockchainData = async () => {
 

    const provider = loadProvider(dispatch);

    const chainId = await loadNetwork(provider, dispatch);

    const DApp = config[chainId].DApp
    const mETH = config[chainId].mETH
    const exchangeConfig = config[chainId].exchange;
    // Fetch current account and balance from metamask
    await loadAccounts(dispatch, provider);
    await loadTokens(
      provider,
      [DApp.address, mETH.address],
      dispatch
    );

    await loadExchange(provider, exchangeConfig.address, dispatch);
  };

  useEffect(() => {
    loadBlockchainData();
  });

  return (
    <div>
      {/* Navbar */}

      <main className="exchange grid">
        <section className="exchange__section--left grid">
          {/* Markets */}

          {/* Balance */}

          {/* Order */}
        </section>
        <section className="exchange__section--right grid">
          {/* PriceChart */}

          {/* Transactions */}

          {/* Trades */}

          {/* OrderBook */}
        </section>
      </main>

      {/* Alert */}
    </div>
  );
}

export default App;