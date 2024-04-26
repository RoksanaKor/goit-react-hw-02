import React from "react";

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