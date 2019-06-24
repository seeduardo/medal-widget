/* eslint react/forbid-prop-types: "off" */
import React from 'react';
import './MedalCountTable.css';
import PropTypes from 'prop-types';
import CountryMedalCount from './CountryMedalCount';

function CountryMedalCountContainer({ medalData }) {
  const flagUrlCodes = {
    AUT: 'XAPUXVa', BLR: 'SKpi2sX', CAN: '6tTO5sy', CHN: '6OtSghH', FRA: '39tbsH2', GER: 'jHzDfFV', ITA: 'NzHeel3', NED: 'oUA5F5P', NOR: 'IiUCZ4N', RUS: 'sGUfuAQ', SUI: 'iAIVEk9', SWE: 'cd3bVLf', USA: 'zXMM0yy',
  };

  return (
    (
      <div className="CountryMedalCountContainer">
        {medalData.slice(0, 10).map(
          cData => (
            <CountryMedalCount
              key={cData.code}
              cData={cData}
              listPlace={medalData.indexOf(cData) + 1}
              flagUrlCode={flagUrlCodes[cData.code]}
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
