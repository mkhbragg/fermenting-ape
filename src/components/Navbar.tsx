import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from '@emotion/styled'

import { AuthenticationContainer } from './authentication/AuthenticationContainer'

export const Navbar: React.FC = () => (
  <nav>
    <FlexRow>
      <NavLink to="/">The Fermenting Ape</NavLink>
      <Container>
        <List>
          <ListItem>
            <NavLink to="/">Home</NavLink>
          </ListItem>
          <ListItem>
            <NavLink to="/about">About</NavLink>
          </ListItem>
        </List>
        <AuthenticationContainer />
      </Container>
    </FlexRow>
  </nav>
)

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  flex: 1;
`

const FlexRow = styled.div`
  display: flex;
`

const List = styled.ul``

const ListItem = styled.li``
