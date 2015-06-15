import {customElement, inject, bindable, bindingMode} from 'aurelia-framework';
import backend from '../services/moonridge';

@customElement('map-popup-content')
@inject(Element)
export class MapPopupContent {
  @bindable type;
  @bindable id;
  constructor(el){
    this.element = $(el);
    this.id = this.element.attr('id');
    this.type = this.element.attr('type');
    console.log('MapPopupContent', this.id, this.type);
    
    this.LQ = backend.model(this.type).liveQuery().findOne({_id: this.id}).exec();
  }

}