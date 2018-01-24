/*
var john = {
    name: 'John',
    yearOfBirth: 1990,
    job: 'teacher',
};
console.log(john)
// function constructors are in a capital letter
var Person = function(name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
}

Person.prototype.calculateAge = function() {
  console.log(2016 - this.yearOfBirth);
}

Person.prototype.lastName = 'Smith';


var john = new Person('John', 1990, 'teacher');
var jane = new Person('Jane', 1969, 'designer');
var mark = new Person('Mark', 1948, 'retired');

john.calculateAge();
jane.calculateAge();
mark.calculateAge();

console.log(john.lastName);
console.log(jane.lastName);
console.log(mark.lastName);


var Animal = function(sound, legs, color) {
  this.sound = sound;
  this.legs = legs;
  this.color = color;
}

var dog = new Animal('woof', 4, 'brown');
var whale = new Animal('hgskh', 0, 'blue');

console.log(dog)
console.log(whale)
*/

// Object.create

//first write prototype as a simple object
/*
var personProto = {
    calculateAge: function() {
        console.log(2016 - this.yearOfBirth);
    }
};
//object empty and then created
var john = Object.create(personProto);
john.name = 'John';
john.yearOfBirth = 1990;
john.job = 'teacher';
// Object.create can accept a second parameter

var jane = Object.create(personProto, {
  name: { value: 'Jane'},
  yearOfBirth: {value: 1969},
  job: { value: 'designer'},
});

//object.create allows to use a more complex inheritance structure
*/

// Primitives vs objects
// string, booleans, integers, undefined, null are primitives. Everything else is a an objects

//variables containing primitives hold that data inside that variable itself
//variables associated objects do not contain the object. They contain a reference to the place in memory to where the object sites or stored

// primitives
// var a = 23;
// var b = a;
// a = 46;
//
// console.log(a);
// console.log(b);
//
// //functions
// // we do not pass an object into a functions
// // we pass the reference that points to the object
// // when we then change the object inside of the function
// // it is still reflected to the outside of the function
// // be careful as it could lead to unexpected results and strang bugs
// // the primitives will stay instide of the function and not exist outside of the function
//
// var age = 27;
// var obj = {
//   name: 'Jonas',
//   city: 'Lisbon',
// };
//
// function change (age, b) {
//   age = 30;
//   b.city = 'San Francisco';
// }
//
// change(age, obj);
//
// console.log(age);
// console.log(obj.city);
//

// // objects
// var obj1 = {
//   name: 'John',
//   age: 26,
// };
//
// var obj2 = obj1;
// obj1.age = 30;
//
// console.log(obj1.age);
// console.log(obj2.age);

// functsions are also objects. We can store functions in a variables
// we an return a function from a functions
// Javascript we have first class functions

// Lecture: Passing functions as arguments

// var years = [1990, 1965, 1937, 2005, 1998];
//
// function arrayCalc(arr, fn){
//     var arrRes = [];
//     for (var i = 0; i < arr.length; i++) {
//         arrRes.push(fn(arr[i]));
//     }
//     return arrRes;
// }
//
// function calculateAge(el) {
//     return 2016 - el;
// }
//
//
// function isFullAge(el) {
//   return el >= 18;
// }
//
// function maxHeartRate(el) {
//     if (el >= 18 && el <= 81) {
//         return Math.round(206.9 - (0.67 * el));
//     } else {
//         return -1;
//     }
// }
//
// // we are  not calling here so no () it is being passed in to be called
// // later
// var ages = arrayCalc(years, calculateAge);
// var fullAges = arrayCalc(ages, isFullAge);
// var rates = arrayCalc(ages, maxHeartRate);
//
// console.log(ages);
// console.log(fullAges);
// console.log(rates);


//Lecture: Functions returning Functions

function interviewQuestion(job) {
    if (job === 'designer') {
        return function(name) {
            console.log(name + ', can you please explain what UX design is?');
        }
    } else if (job === 'teacher') {
        return function(name) {
            console.log('What subject do you teach, ' + name + '?');
        }
    } else {
        return function(name) {
            console.log('Hello ' + name  + ', what do you do?');
        }
    }
}

var teacherQuestion = interviewQuestion('teacher');

teacherQuestion('John');
