import "./Feedback.css";
import React, { useState } from "react";

export const Feedback = () => {
 const [stateValue, setStateValue] = useState({good: 0, neutral: 0, bad: 0});
 const {good, neutral, bad} = stateValue;
 const sum = good + neutral + bad;
 const positiveFeedbackPercentage = () => {
  if (sum !== 0) {
   return Math.round(good/sum*100);
  }
  return 0;
 }; 
 
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
  <div className='feedbackForm'>
   <h2>Please leave feedback</h2>
   <div className="buttonsDiv">
    <button type="button" onClick={onClick} key='goodBtn' name='good'>Good</button>
    <button type="button" onClick={onClick} key='neutralBtn' name='neutral'>Neutral</button>
    <button type="button" onClick={onClick} key='badBtn' name='bad'>Bad</button>
   </div>
   <h2>Statistics</h2>
   <div className="statistics">
    <p>Good: {good}</p>
    <p>Neutral: {neutral}</p>
    <p>Bad: {bad}</p>
    <p>Total: {sum}</p>
    <p>Positive feedback: {positiveFeedbackPercentage()}%</p>
   </div>
  </div>
 );
}