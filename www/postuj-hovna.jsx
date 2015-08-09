import Bootstrap from 'bootstrap';
import React from 'react';
import Router from 'react-router';
var Route = Router.Route;

import AddPoo from './components/add-poo.jsx!';
import AddBin from './components/add-bin.jsx!';
import Leaderboards from './components/leaderboards.jsx!';
import Main from './components/main.jsx!';
import Profile from './components/profile.jsx!';
import About from './components/about.jsx!';
import Home from './components/home.jsx!';

var routes = (
  <Route path="/" handler={Main}>
    <Route handler={Home}/>
    <Route path="about" handler={About}/>
    <Route path="pridat-hovno" handler={AddPoo}/>
    <Route path="pridat-kos" handler={AddBin}/>
    <Route path="zebricky" handler={Leaderboards}/>
    <Route path="profil" handler={Profile}/>
    <Route path="profil/:id" handler={Profile}/>
    <Route path=":type/:id" handler={Home}/>
  </Route>
);

Router.run(routes, Router.HashLocation, (Root) => {
  React.render(<Root/>, document.getElementById('app'));
});