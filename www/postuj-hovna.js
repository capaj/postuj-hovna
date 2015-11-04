import 'bootstrap'
import React from 'react'
import { Router, Route, IndexRoute } from 'react-router'
import { render } from 'react-dom'
import { IntlProvider, addLocaleData } from 'react-intl'
import cs from 'react-intl/lib/locale-data/cs'
import en from 'react-intl/lib/locale-data/en'

import AddPoo from './components/add-poo'
import AddBin from './components/add-bin'
import Leaderboards from './components/leaderboards'
import Main from './components/main'
import Profile from './components/profile'
import About from './components/about'
import Home from './components/home'
import injectTapEventPlugin from 'react-tap-event-plugin'
injectTapEventPlugin()
addLocaleData(cs)
addLocaleData(en)

const onLeave = () => {
  console.log('leaving route')
}

class RenderForcer extends React.Component {
  constructor () {
    super()
  }
  componentWillMount () {
    this.forceUpdate()  // a little hack to help us rerender when this module is reloaded
  }
  render () {
    return <IntlProvider locale="cs">
      <Router>
        <Route path='/' component={Main} onLeave={onLeave}>
          <IndexRoute component={Home}/>
          <Route path='about' component={About}/>
          <Route path='pridat-hovno' component={AddPoo}/>
          <Route path='pridat-kos' component={AddBin}/>
          <Route path='zebricky' component={Leaderboards}/>
          <Route path='profil' component={Profile}/>
          <Route path='profil/:id' component={Profile}/>
          <Route path=':type/:id' component={Home}/>
        </Route>
      </Router>
    </IntlProvider>
  }
}


render(<RenderForcer/>, document.getElementById('app'))
