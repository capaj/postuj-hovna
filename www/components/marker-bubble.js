import React from 'react'
import ImgUploader from './img-uploader'
import ProfileStore from '../stores/profile-store'

import env from 'ENV'
import BinMarkerBubbleBody from './marker-contents/bin-marker-bubble'
import PooMarkerBubbleBody from './marker-contents/poo-marker-bubble'
import User from './user'
import {FormattedRelative} from 'react-intl'


var locales = ['cs', 'en']
export default class MarkerBubble extends React.Component {
  constructor(props) {
    super(props)
  }

  render(){
    if (ProfileStore.privilige_level === 5) {
      //TODO add an option to remove this
    }
    const photos = this.props.photoIds.map((photo) => {
      return <img src={`${env.filesServer}/${photo}.jpg`} style={{maxWidth: '96%'}}/>
    })
    var props = this.props
    console.log('props', props)
    var bubbleBody = <BinMarkerBubbleBody {...props}/>
    if (props.type === 'poo') {
      bubbleBody = <PooMarkerBubbleBody {...props}/>
    }

    const styleRightColl = {float: 'right', marginRight: 15}
    return <div style={{display: 'flex', flexDirection: 'column', paddingTop: 10, paddingRight: 12}}>
      {photos}
      <div style={{marginTop: 10, textAlign: 'left'}}>
        Vyfotil: <User id={props.owner}/>
      <span style={styleRightColl}>
        Vloženo <FormattedRelative locales={locales} value={props.capture_date}/>
      </span>

      </div>
      {bubbleBody}


    </div>
  }
}
