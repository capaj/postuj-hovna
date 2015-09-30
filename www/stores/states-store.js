import {pooState, binState} from '../services/moonridge';

var fourteenDaysAgo = new Date(+new Date - 12096e5);
const gonePoosLQ = pooState.liveQuery().find({ timestamp: { $gt: fourteenDaysAgo }, type: 'gone' }).exec();

export default gonePoosLQ;