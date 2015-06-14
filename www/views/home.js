import icons from '../components/map-icons';
import backend from '../services/moonridge';

export class Home {
	constructor(){
		this.icons = [];
    this.bin = backend.model('bin');
    this.poo = backend.model('poo');
	}
  activate(params) {
    if (params.type && params.id) {

      this.oneLQ = this[params.type].liveQuery().findOne({_id: params.id}).exec().promise.then(LQ => {
        console.log('LQ.doc', LQ.doc);
      });
    }
  }
}