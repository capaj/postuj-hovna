import React from 'react'
import {pooState, binState} from '../services/moonridge'

export default class HomeFooter extends React.Component {
  constructor(...props) {
    super(...props)

  }
  createStatus = (present) => {
    let state = {photo: this.props.id}
    if (this.props.type === 'poo') {
      state.type = 'present'
      if (!present) {
        state.type = 'gone'
      }
      pooState.create(state)

    } else {
      state.bag_count = 10
      if (!present) {
        state.bag_count = 0
      }
      binState.create(state)
    }

  }
  render(){
    var props = this.props
    let msgBoxStyle = {position: 'absolute', bottom: 0, left: 0, borderRadius: 37, margin: 10, padding: 10}
    if (props.id && props.nonexistent === true) {
      let badUrlAlertStyle = {backgroundColor: '#372321'}
      return <div className='add' style={Object.assign(msgBoxStyle, badUrlAlertStyle)}>
        <h3>Špatná URL: {props.params.id} neexistuje</h3>
      </div>
    } else {
      var leftBtn = <a href='/#/pridat-hovno'>
        <img className='add poo' src='img/poo.svg' width='75px'/>
      </a>
      var rightBtn = <a href='/#/pridat-kos'>
        <img className='add bin' src='img/bin.svg' width='75px'/>
      </a>
      if (props.id) { //TODO check gps distance, if too big, disable the buttons
        var presentBtnStyle = {backgroundColor: 'green'}
        var goneBtnStyle = {backgroundColor: 'red'}
        if (location.hash.match(/gone=true/)) {
          presentBtnStyle.opacity = 0.5
          presentBtnStyle.pointerEvents = 'none'
          goneBtnStyle.opacity = 0.5
          goneBtnStyle.pointerEvents = 'none'
        }
        leftBtn = <div style={presentBtnStyle} className='add poo btn btn-default btn-circle'
                       onClick={()=>{this.createStatus(true)}}>
          <img src='/img/poo-only.svg' style={{ width: 41,top: -13, position: 'relative' }} alt='poo is still there'/>
        </div>
        rightBtn = <div style={goneBtnStyle} className='add bin btn btn-default btn-circle'
                        onClick={()=>{this.createStatus(false)}}>
          <span className='glyphicon glyphicon-ok'></span>
        </div>
      }
      var goneText = <div></div>
      if (props.gone === 'true') {
        goneText = <div className='add' style={msgBoxStyle}>
          <h5 style={{
              margin: '0px 78px',
              padding: 6,
              textOverflow: 'ellipsis',
              backgroundColor: 'green',
              fontSize: 16,
              borderRadius: 13
            }}>{props.id} už je pryč</h5>
        </div>
      }
      return <div>
        {leftBtn}{rightBtn}
        {goneText}
      </div>
    }

  }
}
