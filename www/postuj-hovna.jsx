import React from 'react';
import Router from 'react-router';
var Route = Router.Route;

import AddPoo from './components/add-poo.jsx!';
import AddBin from './components/add-bin.jsx!';
import Leaderboards from './components/leaderboards.jsx!';
import Main from './components/main.jsx!';
import About from './components/about.jsx!';
import Home from './components/home.jsx!';

var routes = (
  <Route path="/" handler={Main}>
    <Route handler={Home}/>
    <Route path=":type/:id" handler={Home}/>
    <Route path="about" handler={About}/>
    <Route path="pridat-hovno" handler={AddPoo}/>
    <Route path="pridat-kos" handler={AddBin}/>
    <Route path="zebricek" handler={Leaderboards}/>
  </Route>
);

Router.run(routes, Router.HashLocation, (Root) => {
  React.render(<Root/>, document.getElementById('app'));
});