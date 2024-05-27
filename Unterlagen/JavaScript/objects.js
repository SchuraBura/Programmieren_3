const personA = new Object();
personA.name = 'Susan';
personA.age = 23;
personA.adult = true;

const personB = {
    name: "Robert",
    age: 24,
    hobby: "drinking"
};

const person = {
    isHuman: falsel,
};

const me = Object.create(person);

me.name = 'Matthew'; 
me.isHuman = true;

console.log(me.name);