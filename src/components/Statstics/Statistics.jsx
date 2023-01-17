import React from 'react';
import { Item, Container, List } from './statistics.styled';

function Statistics({ good, neutral, bad, total, positivePercentage }) {
  return (
    <Container>
      <p>Statistics</p>
      <List>
        <Item>Good: {good}</Item>
        <Item>Neutral: {neutral}</Item>
        <Item>Bad: {bad}</Item>
        <Item>Total: {total}</Item>
        <Item>Positive feedback: {positivePercentage}%</Item>
      </List>
    </Container>
  );
}

export default Statistics;
