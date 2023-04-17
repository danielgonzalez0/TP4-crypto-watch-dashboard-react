import React, { useEffect, useState } from 'react';
import HeaderInfos from './components/header/HeaderInfos';
import GlobalChart from './components/header/GlobalChart';
import axios from 'axios';

const App = () => {
  const [coinsData, setCoinsData] = useState([]);
  const [isLoading, setIsloading] = useState(true);

  useEffect(() => {
    axios
      .get(
        'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=250&page=1&sparkline=false&price_change_percentage=1h%2C24h%2C7d%2C14d%2C30d%2C200d%2C1y&locale=en',
        {
          headers: {
            'Access-Control-Allow-Origin': '*',
          },
        }
      )
      .then((res) => setCoinsData(res.data))
      .then(() => {
        setIsloading(false);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <div className="app-container">
        <header>
          <HeaderInfos />
          {!isLoading && <GlobalChart coinsData={coinsData} />}
        </header>
      </div>
    </div>
  );
};

export default App;
