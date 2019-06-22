/* eslint react/forbid-prop-types: "off" */
import React from 'react';
import './MedalCountTable.css';
import PropTypes from 'prop-types';

function ErrorMessage({ error }) {
  if (!error) {
    return null;
  }
  return (
    <div className="ErrorMessage">
      <h3>Server Error</h3>
      <p>Error fetching medal data from server --- please check connection and try again.</p>
    </div>
  );
}

ErrorMessage.propTypes = {
  error: PropTypes.object,
};

ErrorMessage.defaultProps = {
  error: '',
};

export default ErrorMessage;
