import MR from 'moonridge-client';
import ENV from 'ENV';

var backend = MR({url: ENV.backend});
backend.bin = backend.model('bin');
backend.poo = backend.model('poo');
backend.user = backend.model('user');
export default backend;