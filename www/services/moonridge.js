import MR from 'moonridge-client';
import ENV from 'ENV';

const backend = MR({url: ENV.backend});
export const bin = backend.model('bin');
export const poo = backend.model('poo');
export const user = backend.model('user');
export const binState = backend.model('bin_state');

export default backend;