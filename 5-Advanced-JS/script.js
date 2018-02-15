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

// function interviewQuestion(job) {
//     if (job === 'designer') {
//         return function(name) {
//             console.log(name + ', can you please explain what UX design is?');
//         }
//     } else if (job === 'teacher') {
//         return function(name) {
//             console.log('What subject do you teach, ' + name + '?');
//         }
//     } else {
//         return function(name) {
//             console.log('Hello ' + name  + ', what do you do?');
//         }
//     }
// }
//
// var teacherQuestion = interviewQuestion('teacher');
// var designerQuestion = interviewQuestion('designer');
//
// teacherQuestion('Tony');
// designerQuestion('Pat');
//
// interviewQuestion('teacher')('Mark');
//
// function talent(skill) {
//   if (skill === "backflip") {
//     return function(name) {
//       console.log(name + ', how many backflips can you do in a row?')
//     }
//   } else if (skill === "juggling") {
//     return function(name) {
//       console.log('lol, ' + name + ' who doesn\'t know how to juggle? That isn\'t a real skill')
//     }
//   } else {
//     return function(name) {
//       console.log(skill + '? ' + name + ', all I can say is \'meh!\' Who can\'t do ' + skill + '?')
//     }
//   }
// }
//
// talent('Hopscotch')('Ben')


/////////////////////
//// Lecture IIFE


// a few problems. If only purpose is to hide the score variable to the outside (private variable)
// then we don't need to declare a whole function and then call it.
// We can do an immediately invoked function expression (IIFE)
// function game() {
//   var score = Math.random() * 10;
//   console.log(score >= 5);
// }
// game();

//IIFE or Immediately Invoked Function Expression. Wrap in () then use () again to call it.
// (function () {
//   var score = Math.random() * 10;
//   console.log(score >= 5);
// })();
//
// // In javascript what inside () cannot be a statement
//
// (function (goodLuck) {
//   var score = Math.random() * 10;
//   console.log(score >= 5 - goodLuck);
// })(5);


//////////////////
///// Lecture: Closures

// function retirement(retirementAge) {
//     var a = ' years left until retirement.';
//     return function(yearOfBirth) {
//         var age = 2018 - yearOfBirth;
//         console.log((retirementAge - age) + a)
//     }
// }
//
// var retirementUS = retirement(66);
// retirementUS(1990);
//
// retirement(66)(1990);


// var paycheck = 2000;                        //declare our paycheck
// function healthInsurance(benefitRate) {     //create a function that accepts the current benefit rate
//   return paycheck * benefitRate;            //calculate the benefits
// }
// console.log(healthInsurance(.2));           //log to console using benefit rate of 20% or .2




// var paycheck = 2000;                        //This is the same as before
// function healthInsurance(benefitRate) {
//   return paycheck * benefitRate;
// }
// console.log(healthInsurance(.2));
// //RESULT: 400
//
// paycheck = 3000;                            //Uh oh someone changed our variable...
// console.log(healthInsurance(.2));           //same function...
// //RESULT: 600
//
//
// function healthInsurance(paycheck) {      //This is our OUTER function
//   return function(benefitRate) {          //This is our INNER function
//     return paycheck * benefitRate;        //Inner function calculates the benefits
//   }
// }
//
// console.log(healthInsurance(2000)(.2));   //log to console using salary of 2000 and benefit rate of .2
// //RESULT: 400
//
//
// function healthInsurance(paycheck) {      //This is our OUTER function
//   return function(benefitRate) {          //This is our INNER function
//     return paycheck * benefitRate;        //Inner function calculates the benefits
//   }
// }
//
// var getHealthInsurance = healthInsurance(2000);
// /*
//     Note: I'm calling this^ a variable but it's really the inner function with the paycheck
//     value passed in. Written out it would look like this:
//     var getHealthInsurance = function(benefitRate) {
//       return 2000 * benefitRate;
//     }
// */
//
// console.log(getHealthInsurance(.2));
// //RETURNS: 400
//
//
// function healthInsurance(paycheck) {      //This is our OUTER function
//   return function(benefitRate) {          //This is our INNER function
//     return paycheck * benefitRate;        //Inner function calculates the benefits
//   }
// }
//
// var getHealthInsurance = healthInsurance(4000);
//
// var paycheck = 5000;                     //Introduced a new paycheck variable!
//
// console.log(getHealthInsurance(.2));
// console.log(healthInsurance(paycheck)(.2))
// console.log(getHealthInsurance(.2));

// function retirement(retirementAge) {
//     var a = ' years left until retirement.';
//     return function(yearOfBirth) {
//         var age = 2016 - yearOfBirth;
//         console.log((retirementAge - age) + a);
//     }
// }
//
// var retirementUS = retirement(66);
// retirementUS(1990);
//
// retirement(66)(1990);
//
// function interviewQuestion(job) {
//     if (job === 'designer') {
//         job = 'pookie'
//         return function(name) {
//             console.log(name + ', can you please explain what UX design is?' + job);
//         }
//     } else if (job === 'teacher') {
//         return function(name) {
//             console.log('What subject do you teach, ' + name + '?' + job);
//         }
//     } else {
//         return function(name) {
//             console.log('Hello ' + name  + ', what do you do?' + job);
//         }
//     }
// }
//
// var teacherQuestion = interviewQuestion('teacher');
// var designerQuestion = interviewQuestion('designer');
//
// teacherQuestion('Tony');
// designerQuestion('Pat');
//
// interviewQuestion('teacher')('Mark');
// interviewQuestion('designer')('');

// //closer rewrite
// function interviewQuestion(job) {
//     return function(name) {
//         if (job === 'designer'){
//             console.log(name + ', can you please explain what UX design is?');
//         } else if (job === 'teacher') {
//             console.log('What subject do you teach, ' + name + '?');
//         } else {
//             console.log('Hello ' + name  + ', what do you do?');
//         }
//     }
// }

// interviewQuestion('designer')('Ton');
// interviewQuestion('teacher')('Pat')
// interviewQuestion()('Toop')


////////////////////

//// Lecture: Bind, call and apply
//
// var john = {
//     name: 'John',
//     age: 26,
//     job: 'teacher',
//     presentation: function(style, timeOfDay) {
//         if (style === 'formal') {
//             console.log('Good ' + timeOfDay + ', Ladies and gentlmen! I\'m ' + this.name + ', I\'m a ' + this.job + ' and I\'m ' + this.age + ' years old.');
//         }  else if (style === 'friendly') {
//             console.log('Hey! What\'s up? I\'m ' + this.name + ', I\'m a ' + this.job + ' and I\'m ' + this.age + ' years old. Have a nice ' + timeOfDay + '.');
//         }
//     }
// }
// var emily = {
//     name: 'Emily',
//     age: 35,
//     job: 'designer'
// };
//
// john.presentation('formal', 'morning');
//
// //first set this variable so it can be used for emily
// john.presentation.call(emily, 'friendly', 'afternoon');

//this one works with array; since our function does NOT accept arrays it will not work
// john.presentation.apply(emily, ['friendly', 'afternoon']);

//bind does not call function, but it creates a copy of the function. You will need to store it and you can
// use preset arguments

// var johnFriendly = john.presentation.bind(john, 'friendly');
//
// johnFriendly('morning')
// johnFriendly('night')
//
// var emilyFormal = john.presentation.bind(emily, 'formal');
// emilyFormal('afternoon')
//
//
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
// function isFullAge(limit, el) {
//   return el >= limit;
// }
//
// var ages = arrayCalc(years, calculateAge);
//
// var fullJapan = arrayCalc(ages, isFullAge.bind(this, 20));
// console.log(this);
// console.log(ages);
// console.log(fullJapan);



////////////
//// coding Challenge


/*
---------- Let's build a fun quiz game in the console! -------------

1. Build a function constructor called Question to describe a question. A guest should include:
a) question itself
b) the answers from which the paly can choose the correct one ( choose an adequete data structre here, array, objects, etc.)
c) correct answer (I would use a number for this)

2. Create a couple of questions using the constructor

3. Store them all inside an array

4. Select one random question and lot it on the console, together with the possible answers (each questions
should have a number) (hint: write a method for the Question objects for this task).

5. Use the 'prompt' function to ask the user for the correct answer. This users should
input the number of the correct answer such as you displayed it on Task 4.

6. Check if the answer is correct and print to the console whether the answer is correct or not (Hint: write another mothod for this.)

7. Suppose this code would be a plugin for other programmers to use in their code. So maker sure that all your code
is private and doesn't interfere with the other programmer's code (Hint: we learned a special technique to do exactly that)


------------- Expert version! Woot Woot! -----------

8. After you display the result, display the next random question.


*/
//
// function Question(number) {
//   number
// }
//
// var answer = prompt("Please enter you name");
// console.log(answer)

/*
(function(){
    function Question(question, answers, correct) {
        this.question = question;
        this.answers = answers;
        this.correct = correct;
    }

    Question.prototype.displayQuestion = function() {
        console.log(this.question);
        for (var i = 0; i < this.answers.length; i++) {
            console.log(i + ': ' + this.answers[i]);
        }
    }

    Question.prototype.checkAnswer = function(ans) {
        if (ans === this.correct) {
            console.log('Correct answer!')
        } else {
            console.log('Wrong answer; Please try again.')
        }
    }

    var q1 = new Question('Is Javascript the coolest programming language in the world?', ['Yes', 'No'], 0);
    var q2 = new Question('What is the name of this course\'s instructor?', ['John', 'Micheal', 'Jonas'], 2);
    var q3 = new Question('How do you best describe coding?', ['Boring', 'Hard', 'Fun', 'Tedious'], 2);

    var questions = [q1, q2, q3];

    var n = Math.floor(Math.random() * questions.length)

    questions[n].displayQuestion();

    var answer = parseInt(prompt('Please select the correct answer.'));

    questions[n].checkAnswer(answer);
})();
*/

//expert version

(function(){
    function Question(question, answers, correct) {
        this.question = question;
        this.answers = answers;
        this.correct = correct;
    }

    Question.prototype.displayQuestion = function() {
        console.log(this.question);
        for (var i = 0; i < this.answers.length; i++) {
            console.log(i + ': ' + this.answers[i]);
        }
    }

    Question.prototype.checkAnswer = function(ans) {
        if (ans === this.correct) {
            console.log('Correct answer!')
        } else {
            console.log('Wrong answer; Please try again.')
        }
    }

    var q1 = new Question('Is Javascript the coolest programming language in the world?', ['Yes', 'No'], 0);
    var q2 = new Question('What is the name of this course\'s instructor?', ['John', 'Micheal', 'Jonas'], 2);
    var q3 = new Question('How do you best describe coding?', ['Boring', 'Hard', 'Fun', 'Tedious'], 2);

    var questions = [q1, q2, q3];

    function score() {
        var sc = 0;
        return function(correct) {
            if (correct) {
                sc++;
            }
            return score;
        }
    }
    var keepScore = score();

    function nextQuestion() {
        var n = Math.floor(Math.random() * questions.length)

        questions[n].displayQuestion();

        var answer = prompt('Please select the correct answer.');

        if(answer !== 'exit') {
            questions[n].checkAnswer(parseInt(answer), keepScore);
            nextQuestion();
        }
    }

    nextQuestion();

})();
