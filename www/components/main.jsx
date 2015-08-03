import * as bootstrap from 'bootstrap';
import React from 'react';
import clNs from 'classnames';
import Router from 'react-router';
const RouteHandler = Router.RouteHandler;

export default class Main extends React.Component {
  constructor(...props) {
    super(...props);
    this.state = {
      showMenu: false
    };
  }
  toggleMenu(){
    this.setState({
      showMenu: !this.state.showMenu
    });
  }
  componentDidMount(){

    console.log('this.props', this.props);
  }
  render() {
    const menuClasses = clNs({open: this.state.showMenu, menu: true});
	  var toggleMenu = this.toggleMenu.bind(this);
    var backBtnStyle = {};
    if (location.hash === '#/') {
      backBtnStyle.visibility = 'hidden';
    }

    return <div className='screen-covering'>
      <div className="settings">
        <a href="/#/" style={backBtnStyle}>
          <span className="back glyphicon glyphicon-menu-left"></span>
        </a>
        <img src="img/sbirejto.svg" height="35px"/>
        <a onClick={toggleMenu}>
          <span className="user glyphicon glyphicon-menu-hamburger"></span>
        </a>
      </div>

      <div className={menuClasses}>
        <hr/>
        <a href="#/profil" onClick={toggleMenu}>PROFIL</a>
        <hr/>
        <a href="#/zebricky" onClick={toggleMenu}>ŽEBŘÍČKY</a>
        <hr/>
        <a href="#/about" onClick={toggleMenu}>O APLIKACI / NÁPOVĚDA</a>
        <hr/>

      </div>
      <div className="main">
        <RouteHandler/>
      </div>
    </div>;
  }
};