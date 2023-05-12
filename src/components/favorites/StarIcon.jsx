import React, { useEffect, useState } from 'react';
import starFull from './star-full.svg';
import starEmpty from './star-empty.svg';
import PropTypes from 'prop-types';

/**
 * react component given the star icon logical for the favorite feature
 * @param {PropTypes} coinId coin id
 * @returns {React.ReactElement} StarIcon
 */
const StarIcon = ({ coinId }) => {
  const [like, setLike] = useState(false);

  useEffect(() => {
    if (window.localStorage.coinList) {
      let favList = window.localStorage.coinList.split(',');
      if (favList.includes(coinId)) {
        setLike(true);
      }
    }
  }, []);


  /**
   * handle store coin id in localStorage and like in state
   * @param {string} id coin id
   */
  const idChecker = (id) => {
    let favList = null;
    if (window.localStorage.coinList) {
      favList = window.localStorage.coinList.split(',');
    }
    if (favList) {
      if (favList.includes(id)) {
        window.localStorage.coinList = favList.filter((coin) => coin !== id);
        setLike(false);
      } else {
        window.localStorage.coinList = [...favList, coinId];
        setLike(true);
      }
    } else {
      window.localStorage.coinList = coinId;
      setLike(true);
    }
  };
  return (
    <>
      <img
        src={like ? starFull : starEmpty}
        alt="icon star"
        onClick={() => idChecker(coinId)}
      />
    </>
  );
};

StarIcon.propTypes = {
  coinId: PropTypes.string,
};

export default StarIcon;
