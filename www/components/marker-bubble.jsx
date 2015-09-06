import React from 'react';
import ImgUploader from './img-uploader.jsx!';
import ProfileStore from '../stores/profile-store';

import env from '../envs/dev';
import BinMarkerBubbleBody from './marker-methods/bin-marker-bubble.jsx!';
import PooMarkerBubbleBody from './marker-methods/poo-marker-bubble.jsx!';
import User from './user.jsx!';
import {FormattedRelative} from 'react-intl';


var locales = ['cs', 'en'];
export default class MarkerBubble extends React.Component {
  constructor(props) {
    super(props);
  }

  render(){
    if (ProfileStore.privilige_level === 5) {
      //TODO add an option to remove this
    }
    const photos = this.props.photoIds.map((photo) => {
      return <img src={env.backend + '/img/' + photo + '.jpg'} style={{maxWidth: '96%'}}/>;
    });
    var props = this.props;
    console.log('props', props);
    var bubbleBody = <BinMarkerBubbleBody {...props}/>;
    if (props.type === 'poo') {
      bubbleBody = <PooMarkerBubbleBody {...props}/>;
    }

    return <div style={{display: 'flex', flexDirection: 'column', paddingTop: 10, paddingRight: 12}}>
      {photos}
      <div>
        Vyfotil: <User id={props.owner}/>
        Vloženo <FormattedRelative locales={locales} value={props.capture_date}/>
      </div>
      {bubbleBody}


    </div>;
  }
};