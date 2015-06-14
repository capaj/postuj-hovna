import * as bootstrap from 'bootstrap';
import Map from './components/map';

export class PostujHovna{
	constructor(){
		console.log('aaa');

	}
	configureRouter(config, router){
		this.router = router;
		//config.options.pushState = true;
		config.title = 'Sbirej.to';
		config.map([
			{route: [':type/:id', 'home', ''], name: 'home', moduleId: './views/home'},
			{route: 'pridat-hovno', name: 'add-poo', moduleId: './views/add'},
			{route: 'pridat-kos', name: 'add-bin', moduleId: './views/add'},
			{route: 'profil', name: 'profil', moduleId: './views/profile'},
			{route: 'about', name: 'about', moduleId: './views/about'},
			{route: 'zebricek', name: 'leaderboards', moduleId: './views/leaderboards'}
		]);
	}
}