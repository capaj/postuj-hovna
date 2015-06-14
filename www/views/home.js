import icons from '../components/map-icons';
import backend from '../services/moonridge';

export class Home {
	constructor(){
    this.bin = backend.model('bin');
    this.poo = backend.model('poo');
	}
  activate(params) {
    if (params.type && params.id) {

      this.selected = this[params.type].liveQuery().findOne({_id: params.id}).exec().promise.then(LQ => {
        console.log('LQ.doc', LQ.doc);
      });
    }

    this.bins = this.bin.liveQuery().find().exec().promise.then(LQ => {
      console.log('bins', LQ.docs);
    });

    this.poos = this.poo.liveQuery().find().exec().promise.then(LQ => {
      console.log('poos', LQ.docs);
    });
  }
  get markers(){
    return [{pos:[50.051611, 14.407032], icon: icons.poo}];
  }
}