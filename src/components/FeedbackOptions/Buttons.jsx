import { Button, Container } from './buttons.styled';
import PropTypes from 'prop-types';
function Buttons({ options, onLeaveFeedback }) {
  const items = Object.keys(options);

  return (
    <Container>
      {items.map(item => (
        <li key={item}>
          <Button onClick={() => onLeaveFeedback(item)}>{item}</Button>
        </li>
      ))}
    </Container>
  );
}

export default Buttons;

Buttons.propTypes = {
  options: PropTypes.objectOf(PropTypes.number.isRequired),
  onLeaveFeedback: PropTypes.func.isRequired,
};
