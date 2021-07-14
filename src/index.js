import {foo} from './imported.js';

console.log(foo?.bar?.baz?.thing?.unknown);

const bar = {
    foo2: {
        baz2: {}
    }
};

console.log(bar?.foo2?.baz2?.thing?.unknown);