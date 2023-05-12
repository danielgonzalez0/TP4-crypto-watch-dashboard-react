import React from 'react';

const ToTop = () => {
  return (
    <div className="top" onClick={() => window.scrollTo(0, 0)}>
      <img src="./arrow-icon.svg" alt="arrow-icon" />
    </div>
  );
};

export default ToTop;
