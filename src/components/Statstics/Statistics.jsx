import React from 'react';
import { Item } from './statistics.styled';

function Statistics({ good, neutral, bad, total, positivePercentage }) {
  return (
    <div>
      <p>Statistics</p>
      <ul>
        <Item>Good: {good}</Item>
        <Item>Neutral: {neutral}</Item>
        <Item>Bad: {bad}</Item>
        <Item>Total: {total}</Item>
        <Item>Positive feedback: {positivePercentage}%</Item>
      </ul>
    </div>
  );
}

export default Statistics;
