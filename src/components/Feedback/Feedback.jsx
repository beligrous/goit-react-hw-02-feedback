import { Component } from 'react';
import { Button, Container } from './feedback.styled';

class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  render() {
    return (
      <Container>
        <p>Please leave feedback</p>
        <Button>Good</Button>
        <Button>Neutral</Button>
        <Button>Bad</Button>
        <div>
          <p>Statistics</p>
          <ul>
            <li>Good:</li>
            <li>Neutral:</li>
            <li>Bad:</li>
          </ul>
        </div>
      </Container>
    );
  }
}

export default Feedback;
