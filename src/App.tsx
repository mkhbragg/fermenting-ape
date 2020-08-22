import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import { Navbar, AuthenticationHook } from './components'
import { About, Home } from './pages'

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <AuthenticationHook />
      <Navbar />
      <div className="container">
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/about" component={About} />
        </Switch>
      </div>
    </BrowserRouter>
  )
}

export default App
