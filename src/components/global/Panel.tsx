import React, { FC, HTMLAttributes } from 'react'
import styled from '@emotion/styled'

interface Props extends HTMLAttributes<HTMLElement> {
  active?: boolean
}

export const Panel: FC<Props> = ({ ...props }) => {
  return <StyledPanel {...props} />
}

const StyledPanel = styled.div<Props>`
  border: 1px solid #18191f;
  border-radius: 16px;
  background-color: ${({ active }) => (active ? '#FFBD12' : `#FFFFFF`)};
  color: #18191f;
  font-weight: 400;
  font-size: 16px;
  padding: 1rem 2rem;
  box-shadow: 0 6px 0 0 rgba(24, 25, 31, 1);
`
