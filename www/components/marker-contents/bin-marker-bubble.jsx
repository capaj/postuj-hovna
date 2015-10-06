import React from 'react';
import {binState} from '../../services/moonridge';
import {liveQueryComponent} from 'capaj/moonridge-react-utils';
import User from '../user.jsx!';
import {FormattedRelative} from 'react-intl';
var locales = ['cs', 'en'];

export default class BinMarkerBubbleBody extends React.Component {
  constructor(...props){
    super(...props)
    this.queries = {reports: binState.liveQuery().find({photo: this.props._id}).sort('timestamp')};
    liveQueryComponent(this)
  }
  render() {

    return <div style={{margin: '20px 0px'}}>
      <h4 style={{color: 'white'}}>aktualizace počtu pytlíků: </h4>
      {this.state.reports.map((report) => {
        return <div className="row">
        <div className="col-xs-3">{report.bag_count}</div>
        <div className="col-xs-6"><User id={report.owner}></User></div>
        <div className="col-xs-3">
        <span><FormattedRelative locales={locales} value={report.timestamp}/></span></div>
        </div>
      })}
    </div>;
  }
};