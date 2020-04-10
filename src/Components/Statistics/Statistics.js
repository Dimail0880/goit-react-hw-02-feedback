import React from "react";
import PropTypes from "prop-types";

const Statistic = (props) => {
  return (
    <ul>
      <li>Good: {props.good}</li>
      <li>Neutral: {props.neutral}</li>
      <li>Bad: {props.bad}</li>
      <li>Total: {props.total} </li>
      <li>Positive feedback: {props.positivePercentage} %</li>
    </ul>
  );
};

Statistic.propTypes = {
  props: PropTypes.object,
};

export default Statistic;
