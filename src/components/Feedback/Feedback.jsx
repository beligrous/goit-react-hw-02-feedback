import { Component } from 'react';
import { Button, Container, Item } from './feedback.styled';

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
    return Math.round((good / this.countTotalFeedback()) * 100);
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
        <div>
          <p>Statistics</p>
          <ul>
            <Item>Good: {good}</Item>
            <Item>Neutral: {neutral}</Item>
            <Item>Bad: {bad}</Item>
            <Item>Total: {this.countTotalFeedback()}</Item>
            <Item>
              Positive feedback: {this.countPositiveFeedbackPercentage()}%
            </Item>
          </ul>
        </div>
      </Container>
    );
  }
}
