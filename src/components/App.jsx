import { Feedback } from "./Feedback/Feedback.jsx";
import React, { useState } from "react";

export const App = () => {
 const [stateValue, setStateValue] = useState({good: 0, neutral: 0, bad: 0});

  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      <Feedback stateValue={stateValue} setStateValue={setStateValue}/>
    </div>
  );
};
