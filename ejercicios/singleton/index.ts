import Singlenton from './Singleton';

const a = Singlenton.getInstance();
const b = Singlenton.getInstance();

console.log('A es igual a b', a === b);
