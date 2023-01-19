import { Component } from 'react';
import { Container } from './feedback.styled';
import Statistics from 'components/Statstics/Statistics';
import FeedbackOptions from 'components/FeedbackOptions/FeedbackOptions';

export default class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleClick = name => {
    this.setState(prevState => {
      return { [name]: prevState[name] + 1 };
    });
  };

  countPositiveFeedbackPercentage() {
    const { good } = this.state;
    const total = this.countTotalFeedback();
    let result;
    if (total === 0 && good === 0) {
      result = 0;
    } else {
      result = Math.round((good / total) * 100);
    }

    return result;
  }

  countTotalFeedback() {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  }

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <Container>
        <FeedbackOptions
          options={this.state}
          onLeaveFeedback={this.handleClick}
        />
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={this.countTotalFeedback()}
          positivePercentage={this.countPositiveFeedbackPercentage()}
        />
      </Container>
    );
  }
}
