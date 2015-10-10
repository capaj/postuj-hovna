import Bootstrap from 'bootstrap'
import React from 'react'
import Router from 'react-router'
import ReactIntl from 'react-intl'
var Route = Router.Route

window.ReactIntl = ReactIntl

import AddPoo from './components/add-poo'
import AddBin from './components/add-bin'
import Leaderboards from './components/leaderboards'
import Main from './components/main'
import Profile from './components/profile'
import About from './components/about'
import Home from './components/home'

const onLeave = ()=> {
  console.log('leaving route')
}

var routes = (
  <Route path='/' handler={Main} onLeave={onLeave}>
    <Route handler={Home}/>
    <Route path='about' handler={About}/>
    <Route path='pridat-hovno' handler={AddPoo}/>
    <Route path='pridat-kos' handler={AddBin}/>
    <Route path='zebricky' handler={Leaderboards}/>
    <Route path='profil' handler={Profile}/>
    <Route path='profil/:id' handler={Profile}/>
    <Route path=':type/:id' handler={Home}/>
  </Route>
)

Router.run(routes, Router.HashLocation, (Root) => {
  React.render(<Root/>, document.getElementById('app'))
})

System.import('jspm_packages/npm/react-intl@1.2.0/dist/locale-data/' + navigator.language)

export let __hotReload = true
