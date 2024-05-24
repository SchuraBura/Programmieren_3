'use strict';
let name = '',
    alter = '',
    eingabe = '',
    text = '';
const erwachsen = 18;

name = prompt('Bitte geben Sie Ihren Namen ein!', name);
alter = prompt('Bitte geben Sie Ihr Alter ein!', alter);

if (isNaN(alter)) {
    eingabe = 'dumm';
}
else if (alter < erwachsen) {
    eingabe = 'jung';
} else {
    eingabe = 'ok';
}

switch (eingabe) {
    case 'jung':
        text = 'Du bist zu jung!';
        break;
    case 'dumm':
        text = 'Sie sind leider zu dumm, eine Zahl einzugeben';
        break;
    default:
        text = `Hallo ${name}!`;
        break;
}
console.log(text);