import React,{PropTypes} from 'react'
import {pooState} from '../../services/moonridge'
import profile from '../../stores/profile-store'
import {liveQueryComponent} from 'capaj/moonridge-react-utils'
import User from '../user'
import {FormattedRelative} from 'react-intl'


var locales = ['cs', 'en']
const styleRightColl = {float: 'right', marginRight: 15}
export default class PooMarkerBubbleBody extends React.Component {
  constructor(...props) {
    super(...props)
    this.queries = {reports: pooState.liveQuery().find({photo: this.props._id}).sort('timestamp')}
    liveQueryComponent(this)
    this.queries.reports.on('add', function(ev, evDetails) {
      if (evDetails[1].type === 'gone') {
        location.hash += '?gone=true'
      }
    })

    this.queries.reports.on('init', function(ev, init) {
      init.docs.forEach((report)=> {
        if (report.type === 'gone') {
          location.hash += '?gone=true'
        }
      })
    })
    console.log('this.queries', this.queries.reports)

  }

  render() {
    return <div style={{margin: '20px 0px'}}>
      Všechna nahlášení:
      {this.state.reports.map((report)=> {
        const types = {
          present: 'JE TO FURT TAM',
          gone: 'UŽ TAM JE ČISTO'
        }
        return <div className='row'>
            <div className='col-xs-9'>{types[report.type]}<User id={report.owner}></User></div>
            <div className='col-xs-3'>
              <span style={styleRightColl}><FormattedRelative locales={locales} value={report.timestamp}/></span></div>
          </div>
      })}
      <span>celkem {this.state.reports.length}</span>
    </div>
  }

}
