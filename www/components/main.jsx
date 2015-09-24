import * as bootstrap from 'bootstrap';
import React, {PropTypes} from 'react';
import clNs from 'classnames';
import Router from 'react-router';
import {observeStore} from 'capaj/react-observe-store';
import ProfileStore from '../stores/profile-store';
import FbProfilePicture from './fb-profile-picture.jsx!';

const RouteHandler = Router.RouteHandler;

export default class Main extends React.Component {
  constructor(...props) {
    super(...props);
    this.state = {
      showMenu: false
    };
    observeStore(this, ()=> ProfileStore);


  }
  toggleMenu(){
    this.setState({
      showMenu: !this.state.showMenu
    });
  }
  componentDidMount(){
    console.log('this.props', this.props);
    Router.mainRouter = this.context.router;
  }
  render() {
    const menuClasses = clNs({open: this.state.showMenu, menu: true});
	  var toggleMenu = this.toggleMenu.bind(this);
    var backBtnStyle = {};
    if (location.hash === '#/') {
      backBtnStyle.visibility = 'hidden';
    }
    let profilePic;
    if (ProfileStore.id) {
      profilePic = <FbProfilePicture id={ProfileStore.id} type="normal"/>;
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
        <div style={{display: 'flex'}}>
          <a href="#/profil" onClick={toggleMenu}>PROFIL</a>
          {profilePic}
        </div>
        <hr/>
        <a href="#/zebricky" onClick={toggleMenu}>ŽEBŘÍČKY</a>
        <hr/>
        <a href="#/about" onClick={toggleMenu}>O APLIKACI / NÁPOVĚDA</a>
        <hr/>

      </div>
      <div className="main" style={{textAlign: 'center', justifyContent: 'center'}}>
        <RouteHandler/>
      </div>
    </div>;
  }

  static get contextTypes(){
    return {router: PropTypes.func.isRequired};
  }
};