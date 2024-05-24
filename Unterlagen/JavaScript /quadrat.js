'use strict';
    let name = '',
        alter = '',
        eingabe = '',
        text = '';
    let ablehnungText = 'Nein Maaan! Du kommst hier net rein!';
    const erwachsen = 18;

name = prompt ('Bitte geben Sie Ihren Namen ein!', name);
alter = prompt ('Bitte geben Sie Ihr Alter ein!', alter);

if (isNaN(alter)){
    console.log(ablehnungText);
    eingabe = 'dumm';
}
else if (alter < erwachsen) {
    let ausgabe = `Hallo ${name}!`;
    console.log(ausgabe);
    eingabe = 'jung';
}
else {
    console.log(ablehnungText);
    eingabe = 'ok';
}

switch(eingabe){
    case 'jung':
        text = 'Du bist zu jung!';
        break;
    case 'dumm':
        text = 'Sie sind leider zu dumm eine Zahl einzugeben!';
        break;
    default:
        text = `Hallo ${name}!`;
        break;
}
console.log(text);

let a = 23,
    b = 42;
console.log(a, b);
if (a == b){
    console.log(a,b);
    alert("23 ist 42, q.e.d");
} else {
    alert("23 ist gar nicht 42! Na sowas aber auch?");
}

function Quadrat(){
    var Eingabe = document.getElementById('Eingabe');
    var Ergebnis = Eingabe.value * Eingabe.value;
    alert("Das Quadrat von " + Eingabe.value + " = " + Ergebnis);
    Eingabe.value = 0;
}

var los = document.getElementById('los');
los.addEventListener ('click', Quadrat, true);