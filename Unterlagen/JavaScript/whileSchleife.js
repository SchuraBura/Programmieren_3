'use strict';
let zahl,
    text;
    
zahl = prompt('Bitte geben Sie eine Zahl ein!', zahl);
    while (zahl >= 1) {
        text = zahl + '- 1 = ' + (zahl-1);
        zahl = zahl -1;
        console.log(text);
 }