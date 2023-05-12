import React, { useEffect, useState } from 'react';
import HeaderInfos from './components/header/HeaderInfos';
import GlobalChart from './components/header/GlobalChart';
import axios from 'axios';
import Table from './components/table/Table';
import ToTop from './components/utils/ToTop';

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

    window.addEventListener('scroll', () => {
      if (window.scrollY > 145) {
        document.querySelector('.table-header').classList.add('active');
      } else {
        document.querySelector('.table-header').classList.remove('active');
      }
    });
  }, []);

  return (
    <div className="app-container">
      <header>
        <HeaderInfos />
        {!isLoading && <GlobalChart coinsData={coinsData} />}
      </header>
      {!isLoading && <Table coinsData={coinsData} />}
      <ToTop />
    </div>
  );
};

export default App;
