import styled from '@emotion/styled';

export const Button = styled.button`
  padding: 5px 15px;
  margin-right: 20px;
  border: none;
  cursor: pointer;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), -10px -10px 20px #ffffff,
    10px 10px 20px rgba(72, 121, 150, 0.1),
    5px 5px 10px rgba(72, 121, 150, 0.25), -5px -5px 10px #ffffff;
  &:last-child {
    margin-right: 0;
  }
`;

export const Container = styled.div`
  width: 1000px;
  border: 2px solid black;
  text-align: center;
  margin: 0 auto;
  background-color: azure;
`;

export const Item = styled.li`
  list-style: none;
`;
