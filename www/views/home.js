import icons from '../components/map-icons';
import backend from '../services/moonridge';
import Leaflet from 'Leaflet/Leaflet';

export class Home {
	constructor(){
    this.bin = backend.model('bin');
    this.poo = backend.model('poo');
	}
  activate(params) {
    if (params.type && params.id) {

      this.selected = this[params.type].liveQuery().findOne({_id: params.id}).exec();
    }

    this.bins = this.bin.liveQuery().find().exec();


    this.poos = this.poo.liveQuery().find().exec();
  }
  get markers(){
    var bins = this.bins.docs.map(bin=> {
      var icon = icons.bin.plain;
      if (bin.has_bags === true) {
        icon = icons.bin.good;
      } else if(bin.has_bags === false) {
        icon = icons.bin.bad;
      }
      return {
        pos: bin.loc,
        icon: icon
      };
    });
    var poos = this.poos.docs.map(poo=> {


      return {
        pos: poo.loc,
        icon:  icons.poo,
        popup: '<p>Hello world!<br />This is a nice popup.</p>'
      };
    });
    return bins.concat(poos);
  }
}