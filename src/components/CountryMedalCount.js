/* eslint react/forbid-prop-types: "off" */
import React from 'react';
import PropTypes from 'prop-types';
import './MedalCountTable.css';

function CountryMedalCount({
  listPlace, cData, flagUrlCode,
}) {
  const flagTilesUrl = `https://i.imgur.com/${flagUrlCode}.png`;

  return (
    <div className="CountryMedalCount">
      <div className="list-place">{listPlace}</div>
      <div className="flag"><img src={flagTilesUrl} alt={cData.code} /></div>
      <div className="country-name">{cData.code}</div>
      <div className="gold-medals">{cData.gold}</div>
      <div className="silver-medals">{cData.silver}</div>
      <div className="bronze-medals">{cData.bronze}</div>
      <div className="total-medals">{cData.gold + cData.silver + cData.bronze}</div>
    </div>
  );
}

CountryMedalCount.propTypes = {
  listPlace: PropTypes.number,
  cData: PropTypes.object,
  flagUrlCode: PropTypes.string,
};

CountryMedalCount.defaultProps = {
  listPlace: '',
  cData: '',
  flagUrlCode: '',
};

export default CountryMedalCount;
