import React from 'react';
import FbProfilePicture from './fb-profile-picture.jsx!';
import {user} from '../services/moonridge';

export default class User extends React.Component {
  constructor(...props) {
    super(...props);
    this.state = {};
    user.query().findOne({_id: this.props.id}).exec().promise.then((user) => {
      this.setState({user: user});
    });
  }
  get aProp(){
    return 1;
  }
  render() {
    if (!this.state.user) {
      return <div/>;
    }
    var link = `#/profil/${this.props.id}`;
    return <a href={link}>
        <FbProfilePicture id={this.state.user.fb.id} type="small"/>{this.state.user.fb.name}
      </a>;
  }
}