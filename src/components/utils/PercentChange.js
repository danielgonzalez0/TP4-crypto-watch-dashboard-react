import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import colors from '../../styles/_settings.scss';

const PercentChange = ({ percent }) => {
  const [color, setColor] = useState();

  useEffect(() => {
    if (percent) {
      if (percent >= 0) {
        setColor(colors.green1);
      } else {
        setColor(colors.red1);
      }
    } else {
      setColor(colors.white1);
    }
  }, [percent]);
  return (
    <p className="percent-change-container" style={{ color }}>
      {percent ? percent.toFixed(1) + '%' : '-'}
    </p>
  );
};

PercentChange.propTypes = {
  percent: PropTypes.number,
};

export default PercentChange;
