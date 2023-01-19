import { Container } from './feedbackOptions.styled';
import Buttons from './Buttons';

function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <Container>
      <p>Please leave feedback</p>
      <Buttons options={options} onLeaveFeedback={onLeaveFeedback} />
    </Container>
  );
}

export default FeedbackOptions;
