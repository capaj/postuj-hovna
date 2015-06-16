import {inject, noView, customAttribute} from 'aurelia-framework';

@noView
@customAttribute('au-src')
@inject(Element)
export class AuSrc {
    constructor(element) {
        this.element = element;
        var src = element.getAttribute('src');
        this.valueChanged(src);
    }

    valueChanged(newValue){
        if (newValue && typeof newValue === 'string') {
            this.element.setAttribute('src', newValue);
        } else {
            this.element.setAttribute('src', null);
        }
    }
}