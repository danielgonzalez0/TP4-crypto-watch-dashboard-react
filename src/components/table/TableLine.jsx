import React, { useState } from 'react';
import PropTypes from 'prop-types';
import PercentChange from '../utils/PercentChange';
import StarIcon from '../favorites/StarIcon';
import CoinCharts from '../coinCharts/CoinCharts';

const TableLine = ({ coin, index }) => {
  const [showChart, setShowChart] = useState(false);

  /**
   * format for decimal number with min and max decimal digits
   * @param {Number} number
   * @returns a formated number
   */
  const priceFormater = (number) => {
    if (Math.round(number).toString().length < 4) {
      return new Intl.NumberFormat('us-US', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 7,
      }).format(number);
    } else {
      return number;
    }
  };

  /**
   * convert a number in mds
   * @param {*} number
   */
  const mktCapFormater = (number) => {
    let newNum = String(number).split('').slice(0, -6).join('');
    return Number(newNum);
  };

  return (
    <div className="table-line">
      <div className="infos-container">
        <StarIcon coinId={coin.id} />
        <p>{index + 1}</p>
        <div className="img">
          <img src={coin.image} alt={coin.name + ' logo'} height={20} />
        </div>
        <div className="infos">
          <div
            className="chart-img"
            onMouseEnter={() => setShowChart(true)}
            onMouseLeave={() => setShowChart(false)}
          >
            <img src="./chart-icon.svg" alt="chart-icon" />
            <div className="chart-container" id={coin.name}>
              {showChart && (
                <CoinCharts coinId={coin.id} coinName={coin.name} />
              )}
            </div>
          </div>
          <h4>{coin.name}</h4>
          <span>- {coin.symbol.toUpperCase()}</span>
          <a
            target="_blank"
            rel="noreferrer"
            href={`https://www.coingecko.com/fr/pi%C3%A8ces/${coin.id.toLowerCase()}`}
          >
            <img src="./info-icon.svg" alt="info-icon" />
          </a>
        </div>
      </div>
      <p>{priceFormater(coin.current_price).toLocaleString()} $</p>
      <p className="mktcap">
        {mktCapFormater(coin.market_cap).toLocaleString()} M$
      </p>
      <p className="volume">{coin.total_volume.toLocaleString()} $</p>
      <PercentChange percent={coin.price_change_percentage_1h_in_currency} />
      <PercentChange percent={coin.market_cap_change_percentage_24h} />
      <PercentChange percent={coin.price_change_percentage_7d_in_currency} />
      <PercentChange percent={coin.price_change_percentage_30d_in_currency} />
      <PercentChange percent={coin.price_change_percentage_200d_in_currency} />
      <PercentChange percent={coin.price_change_percentage_1y_in_currency} />
      {coin.ath_change_percentage > -3 ? (
        <p>ATH ! </p>
      ) : (
        <PercentChange percent={coin.ath_change_percentage} />
      )}
    </div>
  );
};

TableLine.propTypes = {
  coin: PropTypes.object,
  index: PropTypes.number,
};

export default TableLine;
