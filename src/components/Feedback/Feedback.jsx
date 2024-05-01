import "./Feedback.css";
import React from "react";
import { SectionTitle } from "components/SectionTitle";
import { Feedbackoptions } from "components/FeedbackOptions";
import { Statistics } from "components/Statistics";
import { Notification } from "components/Notification";
import PropTypes from 'prop-types';

export const Feedback = ({stateValue, setStateValue}) => {
  const {good, neutral, bad} = stateValue;
  const sum = good + neutral + bad;
  const positiveFeedbackPercentage = () => {
    if (sum !== 0) {
    return Math.round(good/sum*100);
    }
    return 0;
  }; 
 
 return (
  <div className='feedbackForm'>
    <SectionTitle sectionTitle="Please leave feedback">
      <Feedbackoptions stateValue={stateValue} setStateValue={setStateValue}/>
    </SectionTitle>
    <SectionTitle sectionTitle='Statistics'>
      {good !== 0 || neutral !== 0 || bad !== 0 ? <Statistics good={good} neutral={neutral} bad={bad} sum={sum} positiveFeedbackPercentage={positiveFeedbackPercentage}/> : <Notification message="There is no feedback"/>}
    </SectionTitle>
  </div>
 );
}

Feedback.propTypes = {
  stateValue: PropTypes.object,
  setStateValue: PropTypes.func
}