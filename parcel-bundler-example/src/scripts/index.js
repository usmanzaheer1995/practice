import '../styles/index.scss';
import { getFullName } from './utils';

const fullName = getFullName('Usman Zaheer !');

console.log(fullName);

class Name {
    name = 'Anonymous';
}

const name = new Name();
console.log(name.name)