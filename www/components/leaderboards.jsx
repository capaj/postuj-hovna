import React from 'react';
import backend from '../services/moonridge';

export default class Leaderboards extends React.Component {
  constructor(...props) {
    super(...props);
    backend.user.query().find().exec().promise.then((users) =>{
       this.users = users;
      this.forceUpdate();
    });
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
        <tr>
          <th scope="row">1</th>
          <td>Mark</td>
          <td>2</td>
        </tr>
        </tbody>
      </table>
    </div>;
  }
}