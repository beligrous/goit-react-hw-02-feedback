import { Component } from 'react';
import { Button, Container } from './feedback.styled';
import Statistics from 'components/Statstics/Statistics';

export default class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleGoodClick = () => {
    this.setState(prevState => ({ good: prevState.good + 1 }));
  };

  handleNeutralClick = () => {
    this.setState(prevState => ({ neutral: prevState.neutral + 1 }));
  };

  handleBadClick = () => {
    this.setState(prevState => ({ bad: prevState.bad + 1 }));
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
        <p>Please leave feedback</p>
        <Button onClick={this.handleGoodClick}>Good</Button>
        <Button onClick={this.handleNeutralClick}>Neutral</Button>
        <Button onClick={this.handleBadClick}>Bad</Button>
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={this.countTotalFeedback()}
          positivePercentage={this.countPositiveFeedbackPercentage()}
        ></Statistics>
      </Container>
    );
  }
}
