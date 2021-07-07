import React from "react";
import s from "./FeedbackOptions.module.css";

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div>
      {options.map((key) => {
        return (
          <button
            className={s.button}
            key={key}
            type="button"
            name={key}
            onClick={onLeaveFeedback}
          >
            {key}
          </button>
        );
      })}
    </div>
  );
};

export default FeedbackOptions;
