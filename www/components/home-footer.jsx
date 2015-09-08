import React from 'react';
import {pooState, binState} from '../services/moonridge';

export default class HomeFooter extends React.Component {
  constructor(...props) {
    super(...props);

  }
  createStatus = (present) => {
    let state = {photo: this.props.id};
    if (this.props.type === 'poo') {
      state.type = 'present';
      if (!present) {
        state.type = 'gone';
      }
      pooState.create(state);

    } else {
      state.bag_count = 10;
      if (!present) {
        state.bag_count = 0;
      }
      binState.create(state);
    }

  }
  render(){
    var props = this.props;
    if (props.id && props.nonexistent === true) {
      let badUrlAlertStyle = {position: 'absolute', bottom: 0, left: 0,
        backgroundColor: "#372321", borderRadius: 37, margin: 10, padding: 10};
      return <div className='add' style={badUrlAlertStyle}>
        <h3>Špatná URL: {props.params.id} neexistuje</h3>
      </div>;
    } else {
      var leftBtn = <a href="/#/pridat-hovno">
        <img className="add poo" src="img/poo.svg" width="75px"/>
      </a>;
      var rightBtn = <a href="/#/pridat-kos">
        <img className="add bin" src="img/bin.svg" width="75px"/>
      </a>;
      if (props.id) { //TODO check gps distance, if too big, disable the buttons
        leftBtn = <div style={{backgroundColor: 'green'}} className="add poo btn btn-default btn-circle"
                       onClick={()=>{this.createStatus(true)}}>
          <img src="/img/poo-only.svg" style={{ width: 41,top: -13, position: 'relative' }} alt="poo is still there"/>
        </div>;
        rightBtn = <div style={{backgroundColor: 'red'}} className="add bin btn btn-default btn-circle"
                        onClick={()=>{this.createStatus(false)}}>
          <span className="glyphicon glyphicon-ok"></span>
        </div>
      }
      return <div>
        {leftBtn}{rightBtn}
      </div>;
    }

  }
}