import React, { useEffect, useState } from 'react';
import './MedalCountTable.css';
import PropTypes from 'prop-types';
import CountryMedalCountContainer from './CountryMedalCountContainer';
import ErrorMessage from './ErrorMessage';

function MedalCountTable({ initialSort }) {
  const medalDataUrl = 'https://s3-us-west-2.amazonaws.com/reuters.medals-widget/medals.json';
  const [medalData, setMedalData] = useState([]);
  const [error, setError] = useState(null);
  const [activeTab, setActiveTab] = useState(initialSort);
  const medalTabs = ['gold', 'silver', 'bronze', 'total'];

  function sortMedalData(medalDataResponse, sortType) {
    let secondarySortType;
    if (sortType === 'gold') {
      secondarySortType = 'silver';
    } else {
      secondarySortType = 'gold';
    }
    return medalDataResponse.sort(
      (a, b) => {
        if (sortType === 'total' && (a.gold + a.silver + a.bronze) !== (b.gold + b.silver + b.bronze)) {
          return (b.gold + b.silver + b.bronze) - (a.gold + a.silver + a.bronze);
        } if (a[sortType] !== b[sortType]) {
          return b[sortType] - a[sortType];
        }
        return b[secondarySortType] - a[secondarySortType];
      },
    );
  }

  async function getMedalData() {
    let response;
    try {
      response = await fetch(medalDataUrl);
      if (!response.ok) {
        return setError(true);
      }
    } catch (errorMessage) {
      return setError(errorMessage);
    }
    const medalDataResponse = await response.json();
    const sortedMedalData = sortMedalData(medalDataResponse, initialSort);
    return setMedalData(sortedMedalData);
  }

  useEffect(
    () => {
      getMedalData();
    }, [],
  );

  function handleClick(event) {
    const clickedTab = event.target.id;
    setActiveTab(clickedTab);
    const sortedMedalData = sortMedalData(medalData, clickedTab);
    return setMedalData(sortedMedalData);
  }

  return (
    <div id="medal-widget" className="MedalCountTable">
      <div className="title">MEDAL COUNT</div>
      <div className="activity">
        {medalTabs.map(
          medalTab => (
            <div
              key={`${medalTab} header`}
              className={
                medalTab === activeTab
                  ? 'active'
                  : 'not-active'
            }
            />
          ),
        )
        }
      </div>
      <div className="click-tabs">
        {medalTabs.map(
          medalTab => (
            <div
              key={`${medalTab} tab`}
              onClick={handleClick}
              onKeyPress={handleClick}
              role="presentation"
              className="click-tab"
              id={medalTab}
            >
              {medalTab === 'total'
                ? medalTab.toUpperCase()
                : null
                }
            </div>
          ),
        )}
      </div>
      <div className="medal-count">
        {!error
          ? <CountryMedalCountContainer medalData={medalData} />
          : <ErrorMessage error={error} />}
      </div>
    </div>
  );
}

MedalCountTable.propTypes = {
  initialSort: PropTypes.string,
};

MedalCountTable.defaultProps = {
  initialSort: '',
};

export default MedalCountTable;
