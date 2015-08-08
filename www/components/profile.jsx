import React from 'react';
import ProfileStore from '../stores/profile-store';
import FbProfilePicture from './fb-profile-picture.jsx!';
import {observeStore} from 'capaj/react-observe-store';

export default class Profile extends React.Component {
  constructor(...props) {
    super(...props);
    observeStore(this, ProfileStore, 'ProfileStore', this.renderContent);
  }
  renderContent() {
    if (ProfileStore._id) {
      if (ProfileStore.id) {
        var profilePic = <FbProfilePicture id={ProfileStore.id} type="normal"/>;
      }
      return <div style={{display: 'flex'}}>
        {profilePic}
        <h3>{ProfileStore.name}</h3>
      </div>;
    } else {
      return <div>
        <h5>Nejste přihlášen</h5>
        <button className="btn" onClick={ProfileStore.login}>PŘIHLÁSIT</button>
      </div>;
    }
  }
  render(){
    return <div style={{padding: 15}}>{this.renderContent()}</div>;
  }
}
