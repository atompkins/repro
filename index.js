import {bob, init, tom} from './vars';

init();
console.log('test1:', 'fakeKey' in bob);
console.log('test2:', 'realKey' in bob && tom);
