import React, { FC, ButtonHTMLAttributes } from 'react'
import styled from '@emotion/styled'

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {}

export const Button: FC<Props> = ({ ...props }) => {
  return <StyledButton {...props}></StyledButton>
}

const StyledButton = styled.button<Props>`
  border: 1px solid #3f3f3f;
  border-radius: 2px;
  background-color: white;
  color: #3f3f3f;
  padding: 0.5rem;
  cursor: ${({ disabled }) => (disabled ? 'no-drop' : 'pointer')};

  &:hover {
    background-color: #d4ffd0;
  }
`
