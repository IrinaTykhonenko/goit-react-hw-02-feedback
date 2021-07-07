import React from "react";
import PropTypes from "prop-types";
import s from "./Statistics.module.css";

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <div>
      <p>
        Good : <span className={s.span}>{good}</span>
      </p>
      <p>
        Neutral : <span className={s.span}>{neutral}</span>
      </p>
      <p>
        Bad : <span className={s.span}>{bad}</span>
      </p>
      <p>
        Total: <span className={s.span}>{total()}</span>
      </p>
      <p className={s.positive}>
        Positive Feedback :
        <span className={s.span}>{positivePercentage()}</span> %
      </p>
    </div>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.func.isRequired,
  positivePercentage: PropTypes.func.isRequired,
};

export default Statistics;
