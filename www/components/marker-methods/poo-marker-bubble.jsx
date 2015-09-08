import React from 'react';
import {pooState} from '../../services/moonridge';
import profile from '../../stores/profile-store';
import {liveQueryComponent} from 'capaj/moonridge-react-utils';
import User from '../user.jsx!';

export default class PooMarkerBubbleBody extends React.Component {
  constructor(...props) {
    super(...props);
    this.queries = {reports: pooState.liveQuery().find({photo: this.props.id}).sort('timestamp')};
    liveQueryComponent(this);
  }

  render() {
    return <div style={{marginTop: 20}}>
      Všechna nahlášení:
      {this.state.reports.map((report)=> {
        const types = {
          present: 'JE TO FURT TAM',
          gone: 'UŽ TAM JE ČISTO'
        }
        return <div>{types[report.type]}<User id={report.owner}></User></div>
      })}
    </div>;
  }
};