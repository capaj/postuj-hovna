import React from 'react';
import ImgUploader from './img-uploader.jsx!';

import backend from '../services/moonridge';
import binMethods from './marker-methods/bin-marker-methods.jsx!';
import pooMethods from './marker-methods/bin-marker-methods.jsx!';
const entityMethods = {
  bin: binMethods,
  poo: pooMethods
};

var model;
export default class MarkerBubble extends React.Component {
  constructor(props) {
    super(props);
    var type = this.props.type;
    model = backend.model(type);
    Object.assign(this, entityMethods[type]);
    this.LQs = {
      item: model.liveQuery().findOne({_id: this.props.id}).populate('owner')
    }

  }

  render(){
    const item = this.state.item;
    const photos = item.photos.map((photo)=>{
      <img src={photo}/>
    });

    var entityRender;


    return (<div>
      {photos}
      Vyfotil: <user data={item.owner}>
      Vloženo <formatDate date={item.created_at}/>
      {this.bodyRender()}

      </div>);
  }
};