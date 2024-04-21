import "./Feedback.css";
import React, { useState } from "react";

export const Feedback = () => {

 const [gValue, setGValue] = useState(0);
 const [nValue, setNValue] = useState(0);
 const [bValue, setBValue] = useState(0);

 const onClickGood = () => {
  setGValue(prev => prev + 1);
 };

 const onClickNeutral = () => {
  setNValue(prev => prev + 1);
 };

 const onClickBad = () => {
  setBValue(prev => prev + 1);
 };

 const countTotalFeedback = () => {};

 const countPositiveFeedbackPercentage = () => {};

 return (
  <div className='feedbackForm'>
   <h2>Please leave feedback</h2>
   <div className="buttonsDiv">
    <button type="button" onClick={onClickGood} key='goodBtn' name='good'>Good</button>
    <button type="button" onClick={onClickNeutral} key='neutralBtn' name='neutral'>Neutral</button>
    <button type="button" onClick={onClickBad} key='badBtn' name='bad'>Bad</button>
   </div>
   <h2>Statistics</h2>
   <div className="statistics">
    <p>Good: {gValue}</p>
    <p>Neutral: {nValue}</p>
    <p>Bad: {bValue}</p>
   </div>
  </div>
 );
}