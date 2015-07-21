import MR from 'moonridge-client';
import env from '../js/env';

var MRinst = MR({url: env.backend});

export default {
  rpc: backend.rpc,
  bin: backend.model('bin'),
  poo: backend.model('poo')
};