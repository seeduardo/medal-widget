/* eslint react/forbid-prop-types: "off" */
import React from 'react';
import './MedalCountTable.css';
import PropTypes from 'prop-types';
import CountryMedalCount from './CountryMedalCount';

function CountryMedalCountContainer({ medalData }) {
  return (
    (
      <div className="CountryMedalCountContainer">
        {medalData.slice(0, 10).map(
          cData => (
            <CountryMedalCount
              key={cData.code}
              cData={cData}
              listPlace={medalData.indexOf(cData) + 1}
            />
          ),
        )}
      </div>
    )
  );
}

CountryMedalCountContainer.propTypes = {
  medalData: PropTypes.array,
};

CountryMedalCountContainer.defaultProps = {
  medalData: '',
};

export default CountryMedalCountContainer;
