import { ButtonHTMLAttributes } from 'react';
import styled from 'styled-components'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
}

export const Container = styled.button<ButtonProps>`
  padding: 5px;
  margin: 5px;
  color: ${(props) => (props.color ? props.color : 'blue')}
`;
