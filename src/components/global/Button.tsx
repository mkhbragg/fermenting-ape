import React, { FC, ButtonHTMLAttributes } from 'react'
import styled from '@emotion/styled'

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  inverse?: boolean
}

export const Button: FC<Props> = ({ ...props }) => {
  return <StyledButton {...props}></StyledButton>
}

const StyledButton = styled.button<Props>`
  border: 1px solid #18191f;
  border-radius: 16px;
  background-color: ${({ inverse }) => (inverse ? '#ffffff' : `#18191f`)};
  color: ${({ inverse }) => (inverse ? '#18191f' : `#ffffff`)};
  font-weight: 600;
  font-size: 16px;
  padding: 0.5rem 1rem;
  cursor: ${({ disabled }) => (disabled ? 'no-drop' : 'pointer')};
`
