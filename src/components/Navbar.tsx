import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from '@emotion/styled'

import { AuthenticationContainer } from './authentication/AuthenticationContainer'

export const Navbar: React.FC = () => (
  <Nav>
    <FlexRow>
      <Title to="/">The Fermenting Ape</Title>
      <Container>
        <List>
          <ListItem>
            <NavLink to="/" tabIndex={0}>
              Home
            </NavLink>
          </ListItem>
          <ListItem>
            <NavLink to="/about" tabIndex={0}>
              About
            </NavLink>
          </ListItem>
        </List>
        <AuthenticationContainer />
      </Container>
    </FlexRow>
  </Nav>
)

const Nav = styled.nav`
  background-color: #18191f;

  a,
  a:visited {
    text-decoration: none;
    color: #ffffff;
  }
`

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  flex: 1;
`

const FlexRow = styled.div`
  display: flex;
  padding: 0 1rem;
  height: 5rem;
`

const List = styled.ul`
  display: grid;
  grid-template-columns: auto auto;
  grid-gap: 1rem;
  align-content: center;
`

const ListItem = styled.li`
  text-decoration: none;
  list-style: none;

  a:focus {
    outline: 2px solid white;
  }
`

const Title = styled(NavLink)`
  font-size: 32px;
  margin: auto;
`
