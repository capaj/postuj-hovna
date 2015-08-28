import React from 'react';
import {user} from '../services/moonridge';
import {liveQueryComponent} from 'capaj/moonridge-react-utils';
import FbProfilePicture from './fb-profile-picture.jsx!';
import ProfileStore from '../stores/profile-store';

export default class Leaderboards extends React.Component {
  constructor(...props) {
    super(...props);

    this.queries = {users: user.liveQuery().find().sort('-karma').limit(30)};
    liveQueryComponent(this);
  }

  render() {
    return <div style={{width: '100%', padding: 15}}><h3>NEJAKTIVNĚJŠÍ SBĚRAČI</h3>
      <table className="table" style={{width: '100%'}}>
        <caption>Nejlepší budou vychvalováni pravidelně na twitteru.</caption>
        <thead>
        <tr>
          <th>#</th>
          <th>SBĚRAČ</th>
          <th>KARMA</th>
        </tr>
        </thead>
        <tbody>
        {this.state.users.map((user, i)=> {
          var rowStyle = {};
          if (user.fb.id === ProfileStore.id) {
            rowStyle.backgroundColor = '#987230';
          }
          return <tr style={rowStyle}>
            <th scope="row">{i + 1}</th>
            <td><FbProfilePicture id={user.fb.id} type="small"/>{user.fb.name}</td>
            <td>{user.karma}</td>
          </tr>;
        })}
        </tbody>
      </table>
    </div>;
  }
}