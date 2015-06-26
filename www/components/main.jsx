import * as bootstrap from 'bootstrap';
import React from 'react';
import Router from 'react-router';
const RouteHandler = Router.RouteHandler;

export default class Main extends React.Component {
  constructor(...props) {
    super(...props);

  }

  render() {
    return <div className='screen-covering'>
      <div className="settings">
        <a href="/#/">
          <span className="back glyphicon glyphicon-menu-left"></span>
        </a>
        <img src="img/sbirejto.svg" height="35px"/>
        <a href="/#/profil">
          <span className="user glyphicon glyphicon-menu-hamburger"></span>
        </a>
      </div>

      <div className="menu hidden">
        <a href="#">PROFIL</a>
        <hr/>
        <a href="#">ŽEBŘÍČKY</a>
        <hr/>
        <a href="#">O APLIKACI / NÁPOVĚDA</a>
      </div>
      <div className="main">
        <RouteHandler/>
      </div>
    </div>;
  }
};