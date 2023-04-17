import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PercentChange from '../utils/PercentChange';
import TableFilters from './TableFilters';

const HeaderInfos = () => {
  const [headerData, setHeaderData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios
      .get('https://api.coingecko.com/api/v3/global')
      .then((res) => setHeaderData(res.data.data))
      .then(() => {
        setIsLoading(false);
      });
  }, [isLoading]);

  if (isLoading) return <p>Data en cours de chargement</p>;

  if (!isLoading)
    return (
      <div className="header-container">
        <ul className="title">
          <li>
            <h1>
              <img src="./logo.png" alt="logo" /> Watch Tower
            </h1>
          </li>
          <li>
            Crypto-monnaies :{' '}
            {headerData.active_cryptocurrencies.toLocaleString()}
          </li>
          <li>Marchés : {headerData.markets}</li>
        </ul>

        <ul className="infos-mkt">
          <li className="global-mkt">
            Global Market Cap:{' '}
            <PercentChange
              percent={headerData.market_cap_change_percentage_24h_usd}
            />
          </li>
          <li>
            BTC dominance :
            {' ' + headerData.market_cap_percentage.btc.toFixed(1) + '%'}
          </li>
          <li>
            ETH dominance :
            {' ' + headerData.market_cap_percentage.eth.toFixed(1) + '%'}
          </li>
        </ul>
        <TableFilters />
      </div>
    );
};

export default HeaderInfos;
