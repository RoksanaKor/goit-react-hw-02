import { SectionTitle } from "components/SectionTitle";
import "./Feedback.css";
import React, { useState } from "react";
import { Feedbackoptions } from "components/FeedbackOptions";
import { Statistics } from "components/Statistics";

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
   <SectionTitle sectionTitle="Please leave feedback">
    <Feedbackoptions stateValue={stateValue} setStateValue={setStateValue}/>
   </SectionTitle>
   <SectionTitle sectionTitle='Statistics'>
    <Statistics good={good} neutral={neutral} bad={bad} sum={sum}positiveFeedbackPercentage={positiveFeedbackPercentage}/>
   </SectionTitle>
  </div>
 );
}