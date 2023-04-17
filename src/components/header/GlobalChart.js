import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Tooltip, Treemap } from 'recharts';
import colors from '../../styles/_settings.scss';

const GlobalChart = ({ coinsData }) => {
  const [dataArray, setDataArray] = useState([]);

  /**
   * rules that define the color for one cell on the treemap
   * @param {object} number
   * @returns a color for a treemap cell
   */
  const colorPicker = (number) => {
    if (number >= 20) {
      return colors.color1;
    } else if (number >= 5) {
      return colors.green2;
    } else if (number >= 0) {
      return colors.green1;
    } else if (number >= -5) {
      return colors.red1;
    } else if (number >= -20) {
      return colors.red2;
    } else {
      return colors.black2;
    }
  };

  /**
   * exclusion of the stable coin
   * @param {string} coin
   * @returns {boolean}
   */
  const excludeCoin = (coin) => {
    if (
      coin === 'usdt' ||
      coin === 'usdc' ||
      coin === 'busd' ||
      coin === 'dai' ||
      coin === 'ust' ||
      coin === 'mim'
    ) {
      return false;
    } else {
      return true;
    }
  };

  useEffect(() => {
    let chartData = [];
    if (coinsData.length > 0) {
      for (let i = 0; i < 45; i++) {
        if (excludeCoin(coinsData[i].symbol)) {
          chartData.push({
            name:
              coinsData[i].symbol.toUpperCase() +
              ' ' +
              coinsData[i].market_cap_change_percentage_24h.toFixed(1) +
              '%',
            size: coinsData[i].market_cap,
            fill: colorPicker(coinsData[i].market_cap_change_percentage_24h),
          });
        }
      }
    }
    setDataArray(chartData);
  }, [coinsData]);

  /**
   * tooltip of rechart treemap given the name of the cryptocurrency when mouse cursor active a cell
   * @returns {React.ReactElement}
   */
  const TreemapToolTip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className="custom-tooltip">
          <p className="label">{payload[0].payload.name}</p>
        </div>
      );
    }
    return null;
  };

  TreemapToolTip.propTypes = {
    active: PropTypes.bool,
    payload: PropTypes.array,
  };

  return (
    <div className="global-chart">
      <Treemap
        width={730}
        height={181}
        data={dataArray}
        dataKey="size"
        stroke="rgb(51,51,51)"
        fill="black"
        aspectRatio={1}
      >
        <Tooltip content={<TreemapToolTip />} />
      </Treemap>
    </div>
  );
};

GlobalChart.propTypes = {
  coinsData: PropTypes.array,
};

export default GlobalChart;
