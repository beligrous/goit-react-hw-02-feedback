import { Component } from 'react';
import PropTypes from 'prop-types';
import { Container } from './feedback.styled';
import Statistics from 'components/Statstics/Statistics';
import FeedbackOptions from 'components/FeedbackOptions/FeedbackOptions';
import Section from 'components/Section/Section';
import Notification from 'components/Notification/Notification';

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
        <Section title={'Please leave feedback'}>
          <FeedbackOptions
            options={this.state}
            onLeaveFeedback={this.handleClick}
          />
        </Section>
        <Section title={'Statistics'}>
          {good !== 0 || neutral !== 0 || bad !== 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message={'There is no feedback'} />
          )}
        </Section>
      </Container>
    );
  }
}

Feedback.propTypes = {
  title: PropTypes.string,
  options: PropTypes.objectOf(PropTypes.number),
  onLeaveFeedback: PropTypes.func,
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  positivePercentage: PropTypes.number,
  message: PropTypes.string,
};
