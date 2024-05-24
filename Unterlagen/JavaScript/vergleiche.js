//Falsch

let a = 23;
let b = 42;
if (a = b) {
    alert('23 ist 42, q.e.d.');
}

//Richtig

let c = 23;
let d = 42;
console.log(a, b);
if (c == d) {
    console.log(a, b);
    alert('23 ist 42, q.e.d.');
} else {
    alert('23 ist gar nicht 42! Na sowas aber auch?');
}