import { Button, Container } from './buttons.styled';
import PropTypes from 'prop-types';
function Buttons({ options, onLeaveFeedback }) {
  return (
    <Container>
      {options.map(item => (
        <li key={item}>
          <Button onClick={() => onLeaveFeedback(item)}>{item}</Button>
        </li>
      ))}
    </Container>
  );
}

export default Buttons;

Buttons.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired),
  onLeaveFeedback: PropTypes.func.isRequired,
};
