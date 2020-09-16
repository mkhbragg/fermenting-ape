import React from 'react'
import * as NetlifyIdentityWidget from 'netlify-identity-widget'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import styled from '@emotion/styled'

import { Navbar } from './components'
import { About, Home } from './pages'

const App: React.FC = () => {
  // initialize identity widget
  NetlifyIdentityWidget.init()

  return (
    <BrowserRouter>
      <Navbar />
      <Container>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/about" component={About} />
        </Switch>
      </Container>
    </BrowserRouter>
  )
}

export default App

const Container = styled.div`
  margin: 4rem;
`
