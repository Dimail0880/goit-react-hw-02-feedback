import React, { Component } from "react";
import Statistics from "../Statistics/Statistics";
import FeedbackOptions from "../FeedbackOptions/FeedbackOptions"
import Section from "../Section/Section"
import PropTypes from "prop-types";
import Notification from '../Notification/Notification'

class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  static propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
  };

 

    counter = e => {
      const value = e.target.textContent.toLowerCase();
      this.setState(prevState => ({ [value]: prevState[value] + 1 }));
    };



  countTotalFeedback = () => {
    const total = this.state.good + this.state.neutral + this.state.bad;
    return total;
  };

  countPositiveFeedbackPercentage = () => {
    const goodFeedback = this.state.good;
    const total = this.countTotalFeedback();
    if (goodFeedback) return Math.round((goodFeedback / total) * 100, 0);
    else {
      return 0;
    }
  };

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <div>
       <Section title="Please leave feedback"> 
       <FeedbackOptions 
       options={["Good", "Neutral", "Bad"]} 
       onLeaveFeedback={this.counter}/></Section>
        <Section title="Statistic">
       {this.countTotalFeedback() > 0 ?  
        (<Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={this.countTotalFeedback()}
          positivePercentage={this.countPositiveFeedbackPercentage()}
        />) : <Notification message="No feedback given"></Notification>}
        </Section>
      </div>
    );
  }
}

export default Feedback;
