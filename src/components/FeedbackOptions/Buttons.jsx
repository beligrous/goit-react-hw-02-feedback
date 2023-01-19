import { Button, Container } from './buttons.styled';

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
