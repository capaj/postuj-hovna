import MR from 'moonridge-client';
import env from '../js/env';

var MRinst = MR({url: env.backend});

export default MRinst;