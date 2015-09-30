import MR from 'moonridge-client';
import ENV from 'ENV';

const backend = MR({url: ENV.backend});
export const photo = backend.model('photo');
export const pooState = backend.model('poo_state');
export const user = backend.model('user');
export const binState = backend.model('bin_state');

export default backend;