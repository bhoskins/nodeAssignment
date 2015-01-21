/**
 *
 */

// ---------------------
// Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript.
// ---------------------
console.log('My answers \:\)');
function max(a,b){
    "use strict";
    if ( a > b) {
      return a;
    } else {
      return b;
    }


}
console.log('The max should be 13 ', max(13,7));
console.log('______________________');
// console.assert(max(13, 15) == 15, "true" );

// ---------------------
// Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
// ---------------------

function maxOfThree(a,b,c){
    "use strict";
    //...
    if (a > b && a > c) {
      return a;
    } else if ( b > c && b > a) {
      return b;
    } else {
      return c;
    }
}

console.log('the max should be 12   ', maxOfThree(1, 10, 12));
console.log('______________________');
// console.assert(maxOfThree(5, 30, 30.1) == 30.1, "true" );

// ---------------------
// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
// ---------------------

function isVowel(char){
    "use strict";

    if ( char =="a" || char == "e" || char == "i" || char == "o" || char == "u") {
      return true;
    } else {
      return false;
    }
}


// ---------------------
// Write a function translate() that will translate a text into "rövarspråket". That is, double every consonant and place an occurrence of "o" in between. For example, translate("this is fun") should return the string "tothohisos isos fofunon".
// ---------------------
var stringPhrase = "Javascript is great IronYard is awesome";
var phrase = stringPhrase.split("");
var rovarAnswer = [];

function rovarspraket(phrase){
    "use strict";
    phrase.forEach(translate);
}

function translate(char, i) {
  if (isVowel(char)) {
    rovarAnswer.push(char);
  } else {
    rovarAnswer.push(char + "o" + char);
  }
}

rovarspraket(phrase);
console.log(rovarAnswer);

// ---------------------
// Define a function sum() and a function multiply() that sums and multiplies (respectively) all the numbers in an array of numbers. For example, sum([1,2,3,4]) should return 10, and multiply([1,2,3,4]) should return 24.
// ---------------------
"use strict";
//function callbackfn(value, index, array1)
var sumTotal = 0;
var numberSet = [ 1, 5, 10, 12];
function sum(val){
      sumTotal += val;
    }

numberSet.forEach(sum);
console.log(sumTotal, "   28 is the correct answer");


var multiplyTotal = 1;
function multiply(val){
    "use strict";
    multiplyTotal *= val;
}

numberSet.forEach(multiply);
console.log(multiplyTotal, "... the answer is 600")

// ---------------------
// Define a function reverse() that computes the reversal of a string. For example, reverse("jag testar") should return the string "ratset gaj".
// ---------------------
var string = "Javascript is amazing";
var stringArray = string.split("");
var newArray = [];

function reverse(val, ind, array1){
    "use strict";
    var length = array1.length;
    var newInd;
    newInd = Math.abs(ind - length);
    newArray[newInd] = array1[ind];
}

stringArray.forEach(reverse);
// console.log(newArray);

// ---------------------
// Write a function findLongestWord() that takes an array of words and returns the length of the longest one.
// ---------------------

var string2 = "The longest word in this supercalifragilistic sentence";
var string2Array = string2.split(" ");
var largestWord = 0;
var resultArray = [];

function findLongestWord(words){
    "use strict";
    words.forEach(function (word, i, words) {
    resultArray[i] = words[i].length;

    largestWord = Math.max.apply(Math, resultArray);
});
}
findLongestWord(string2Array);

console.log(largestWord, "   Longest Word should be 20");

// ---------------------
// Write a function filterLongWords() that takes an array of words and an integer i and returns the array of words that are longer than i.
// ---------------------
var answerArray = [];

function filterLongWords(words, i){
    "use strict";
    words.forEach(function (val, index) {
      if ( words[index].length > i) {
        answerArray.push(words[index]);
      }

    });
    console.log(answerArray);
}

filterLongWords(string2Array, 4);

// ---------------------
// Write a function charFreq() that takes a string and builds a frequency listing of the characters contained in it. Represent the frequency listing as a Javascript object. Try it with something like charFreq("abbabcbdbabdbdbabababcbcbab").
// ---------------------

function charFreq(string){
    "use strict";
    //...
}
