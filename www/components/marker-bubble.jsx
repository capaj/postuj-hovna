import React from 'react';
import ImgUploader from './img-uploader.jsx!';

import backend from '../services/moonridge';
import env from '../js/env';
import BinMarkerBubbleBody from './marker-methods/bin-marker-bubble.jsx!';
import PooMarkerBubbleBody from './marker-methods/poo-marker-bubble.jsx!';

var model;
export default class MarkerBubble extends React.Component {
  constructor(props) {
    super(props);
    var type = this.props.type;
    model = backend.model(type);
  }

  render(){
    const photos = this.props.photos.map((photo) => {
      return <img src={env.backend + '/img/' + photo + '.jpg'} style={{maxWidth: '90%'}}/>;
    });
    var bubbleBody = <BinMarkerBubbleBody/>;
    var props = this.props;
    if (props.notoriety) {
      bubbleBody = <PooMarkerBubbleBody/>;
    }

    return <div style={{display: 'flex', flexDirection: 'column', paddingTop: 10}}>
      {photos}
      Vyfotil: <user id={props.owner}/>
      Vloženo <formatDate date={props.created_at}/>
      {bubbleBody}

      </div>;
  }
};