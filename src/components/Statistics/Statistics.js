import React from "react";

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <div div>
      <p>
        Good : <span>{good}</span>
      </p>
      <p>
        Neutral : <span>{neutral}</span>
      </p>
      <p>
        Bad : <span>{bad}</span>
      </p>
      <p>
        Total: <span>{total()}</span>
      </p>
      <p>
        Positive Feedback : <span>{positivePercentage()}</span> %
      </p>
    </div>
  );
};

export default Statistics;
