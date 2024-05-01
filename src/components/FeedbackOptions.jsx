import React from "react";
import PropTypes from 'prop-types';

export const Feedbackoptions = ({stateValue, setStateValue}) => {
  const {good, neutral, bad} = stateValue;
  const onClick = (e) => {
    switch (e.target.name) {
      case 'good':
        setStateValue({
        ...stateValue,
        good: good + 1
        });
        break;
      case 'neutral':
        setStateValue({
        ...stateValue,
        neutral: neutral + 1
        });
        break;
      case 'bad':
        setStateValue({
        ...stateValue,
        bad: bad + 1
        });
        break;
      default:
        setStateValue({...stateValue});
    }
 };
  return (
    <div className="buttonsDiv">
      <button type="button" onClick={onClick} key='goodBtn'  name='good'>Good</button>
      <button type="button" onClick={onClick} key='neutralBtn' name='neutral'>Neutral</button>
      <button type="button" onClick={onClick} key='badBtn' name='bad'>Bad</button>
    </div>
  );
}

Feedbackoptions.propTypes = {
  stateValue: PropTypes.object,
  setStateValue: PropTypes.func
};