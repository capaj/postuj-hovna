import {customElement, inject, bindable, bindingMode} from 'aurelia-framework';

@customElement('map-popup-content')
@inject(Element)
export class MapPopupContent {
  @bindable type;
  @bindable id;
  constructor(el){
    this.element = el;
    console.log('MapPopupContent', this.id, this.type);
  }

}