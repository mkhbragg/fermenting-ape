import React from 'react'
import * as NetlifyIdentityWidget from 'netlify-identity-widget'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import { Navbar } from './components'
import { About, Home } from './pages'

const App: React.FC = () => {
  // initialize identity widget
  NetlifyIdentityWidget.init()

  return (
    <BrowserRouter>
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
