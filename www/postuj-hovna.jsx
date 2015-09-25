import Bootstrap from 'bootstrap';
import React from 'react';
import Router from 'react-router';
import ReactIntl from 'react-intl';
var Route = Router.Route;

window.ReactIntl = ReactIntl;

import AddPoo from './components/add-poo.jsx!';
import AddBin from './components/add-bin.jsx!';
import Leaderboards from './components/leaderboards.jsx!';
import Main from './components/main.jsx!';
import Profile from './components/profile.jsx!';
import About from './components/about.jsx!';
import Home from './components/home.jsx!';

const onLeave = ()=> {
  console.log('aaa leave');
};

var routes = (
  <Route path="/" handler={Main} onLeave={onLeave}>
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

System.import('jspm_packages/npm/react-intl@1.2.0/dist/locale-data/' + navigator.language);

export let __hotReload = true;