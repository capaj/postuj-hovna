import * as bootstrap from 'bootstrap';
import Map from './components/map';

export class PostujHovna{
	constructor(){
		console.log('aaa');

	}
	configureRouter(config, router){
		this.router = router;

		config.title = 'Postuj hovna';
		config.map([
			{ route: ['', 'home'],       name: 'home',       moduleId: './views/home' },
			{ route: 'pridat',            name: 'add',      moduleId: './views/add'},
			{ route: 'profil',            name: 'profil',      moduleId: './views/profil'}
		]);
	}
}