import React from 'react';
import { Router, Route } from 'react-router';
import HashHistory from 'react-router/lib/HashHistory';

import AddPoo from './components/add-poo.jsx!';
import AddBin from './components/add-poo.jsx!';
import Leaderboards from './components/leaderboards.jsx!';
import Main from './components/main.jsx!';
import About from './components/about.jsx!';
import Home from './components/home.jsx!';
const history = new HashHistory();
React.render((
    <Router history={history}>
        <Route path="/" component={Main}>
            <Route component={Home}/>
            <Route path="about" component={About}/>
            <Route path="pridat-hovno" component={AddPoo}/>
            <Route path="pridat-kos" component={AddBin}/>
            <Route path="zebricek" component={Leaderboards}/>
        </Route>
    </Router>
), document.getElementById('app'));

