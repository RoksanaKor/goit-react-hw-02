import React from "react";
import PropTypes from 'prop-types';

export const Notification = ({message}) => {
  return (
    <div className="statistics">
      <p>{message}</p>
    </div>
  )
}

Notification.propTypes = {
  message: PropTypes.string
}