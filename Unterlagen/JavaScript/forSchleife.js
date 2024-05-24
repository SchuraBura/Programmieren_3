'use strict';
let zahl,
    text;

confirm('Sind Sie bereit für den Weihnachtsmann?');

for (var i = 1; i <= 10; i++) {
    zahl = i * i;
    text = zahl +' = '+ i +' * '+ i ;
    console.log(text);
}