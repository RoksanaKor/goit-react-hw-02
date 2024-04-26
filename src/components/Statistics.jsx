import React from "react";
import PropTypes from 'prop-types';

export const Statistics = ({good, neutral, bad, sum, positiveFeedbackPercentage}) => {
 return (
  <div className="statistics">
   <p>Good: {good}</p>
   <p>Neutral: {neutral}</p>
   <p>Bad: {bad}</p>
   <p>Total: {sum}</p>
   <p>Positive feedback: {positiveFeedbackPercentage()}%</p>
  </div>
 );
}

Statistics.propTypes = {
 good: PropTypes.number, 
 neutral: PropTypes.number, 
 bad: PropTypes.number, 
 sum: PropTypes.number, 
 positiveFeedbackPercentage: PropTypes.number
}