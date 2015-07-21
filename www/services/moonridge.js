import MR from 'moonridge-client';
import ENV from 'ENV';

var backend = MR({url: ENV.backend});

export default {
  rpc: backend.rpc,
  bin: backend.model('bin'),
  poo: backend.model('poo')
};