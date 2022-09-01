//JS The Easier Parts - Variables, Data Types, and Control Flow

/* ========== *
* Challenge 1 *
* =========== /


//Uncomment the lines below to test your code
//console.log(typeof 7.0 === "number")
//console.log(typeof 22 === "number")
//console.log(typeof true === "boolean")

//var myVar;
//console.log(typeof myVar === "undefined")

//myVar = "Meimei"
//console.log(typeof myVar === "string")

//Comment them back out with two forward slashes at the beginning once you have finished


/ ========== *
* Challenge 2 *
* =========== /

//Solution 1 --- SPLICE/SLICE
// function buildSentence(word1, word2, word3) {
//   let newLetter = word1[0].toUpperCase();
//   let newSentence = newLetter + word1.split('').splice(1, word1.length - 1).join('') + ' ' + word2 + ' ' + word3 + '.';
//     return newSentence;
// }

//Solution 2 ---- REPLACE METHOD
// function buildSentence(word1, word2, word3) {
//   let newLetter = word1[0].toUpperCase();
//   let newSentence = word1.replace(word1[0], newLetter) + ' ' + word2 + ' ' + word3 + '.';
//     return newSentence;
// }


// console.log(buildSentence("coding", "is", "awesome")) //=> "Coding is awesome."
// console.log(buildSentence("we're", "number", "1")) //=> "We're number 1."


/ ========== *
* Challenge 3 *
* =========== */


// function lastLetter(word) {
//   return word[word.length -1];
//   //your code goes here...
// }

// //Uncomment the lines below to test your code
// console.log(lastLetter("hello")) //=> "o"
// console.log(lastLetter("goodbye!")) //=> "!"
// console.log(lastLetter("ZeltoiD")) //=> "D"

/* ========== *
* Challenge 4 *
* =========== /

//declare a function buildGreeting
//use if conditional statements
function buildGreeting(time, name) {
  //your code goes here...
    if (time > 0 && time <= 11) {
    return Good Morning, ${name}!
  }
  else if (time >= 12 && time <= 16) {
    return Good Afternoon, ${name}!
  }
  else if (time >= 17 && time <= 23) {
    return Good Evening, ${name}!
  }
  else {
    return That's not a real time, ${name}. Maybe you need some sleep!
  }
}


// console.log(buildGreeting(8, "Maggie")); //=> "Good Morning, Maggie!"
// console.log(buildGreeting(12, "John")); //=> "Good Afternoon, John!"
// console.log(buildGreeting(22, "Stacey")); //=> "Good Evening, Stacey!"
// console.log(buildGreeting(31, "Derrick")); //=> "That's not a real time, Derrick. Maybe you need some sleep!"


/ ========== *
* Challenge 5 *
* =========== */
// Solution 1: LOOPS
// function indexOf(str1, str2) {
//   for (let i = 0; i < str1.length; i++) {
//     if (str1[i] === str2[0]) {
//       for (let j = 0; j < str2.length; j++) {
//             if (str1[i + j] !== str2[j]) {
//           return - 1
//         }
//       }
//         return i;
//       } 
//   }
// }


//Solution 2: RECURSION :(LOOK AT LATER)
// function indexOf(str1, str2, count1 = 0, count2 = 0) {
//   if (str1[count1] === str2[count2]) {
//     if (str1[count1] !== str2[count2]) {
//       return -1;
//     } else {
//         return indexOf(str1, str2, count1 + count2, count2 + 1)
//     }
//   }
//   else if (str1.length === count) {
//     return count;
//   }
//   // else {
//   //   return indexOf(str1, str2, count += 1)}
// }

// console.log( indexOf("CodeSmith", "Smith"))
// console.log( indexOf("hello", "ll") === 2 )
// console.log( indexOf("zebra", "z") === 0 )
// console.log( indexOf("banana", "B") === -1 )


//indexOf method??
// let greeting = 'hello'
// console.log(greeting.indexOf('lo')) // -> 2

/* ========== *
* Challenge 6 *
* =========== /

//RECURSIVE SOLUTION
function letterExists(word, letter, count = 0) {
  //your code goes here...
  if (!word[count]) return false;
    if (word[count] === letter) {
    return true;
  }
  return letterExists(word, letter, count + 1);
}

// console.log(letterExists("superman", "e")) //=> true
// console.log(letterExists("starship", "S")) //=> false
// console.log(letterExists("th1s", "1")) //=> true
// console.log(letterExists("he!lo", "!")) //=> true


/ =========== *
* Challenge 7 *
* ============ /

//declare a function isPrime
//input: number
//output: boolean
//store a variable called divisor assigned the value 2
//base case: divisor reaches the same value as our number return true
//if a number is divisible by our divisor; return false
function isPrime(number, divisor = 2) {
  // your code here...
  if (number < divisor) return false;
    if (divisor === number) return true;
  if (number % divisor === 0) {
    return false;
  }
  return isPrime(number, divisor + 1)
}

// console.log(isPrime(-7)); // => false
// console.log(isPrime(2)); // => true
// console.log(isPrime(11)); // => true
// console.log(isPrime(15)); // => false
// console.log(isPrime(-3)); // => false
// console.log(isPrime(1)); // => false

/ ========== *
* Challenge 8 *
* =========== */
//SOLUTION 1: FOR LOOP
//input: number
//output: console.log list of numbers from start to end 
// function range(start, end) {
//   //your code goes here...
//   let arr = []
//     if (start < end) {
//       for (let i = start; i <= end; i++) {
//       arr.push(i);;
//     }
//   } else if (start > end) {
//     for (let j = start; j >= end; j--) {
//       arr.push(j);
//     }
//   }
//   return arr;
// }

//SOLUTION 2: RECURSION
function range(start, end, array = []) {
  if (end === start){
    array.push(start);
    return array;
  } 
  if (start < end) {
    array.push(start);
    return range(start + 1, end, array);
  }
 if (start > end) {
  array.push(start);
  return range(start - 1, end, array);
    } 
}

//Uncomment the lines below to test your code
// console.log(range(1,4)) //=> [1, 2, 3, 4]
// console.log(range(4,2)) //=> 4, 3, 2


/* =========== *
* Challenge 9 *
* ============ */

//declare a function myIndexOf
//input: array, element
//output: number (index of element in the array)
//base case: reach end of the array return -1
//use if conditionals: if element === array at the index
//store index in the parameter with the value of 0

function myIndexOf(array, ele, index = 0){
  // your code here...
    if (array[index] === undefined) return -1;
  if (array[index] === ele) return index;
  return myIndexOf(array, ele, index + 1)
}

// console.log(myIndexOf([1, 2, 3, 4, 5], 5)) //=> 4
// console.log(myIndexOf(["a", "b", "c"], "a")) //=> 0
// console.log(myIndexOf(["a", "b", "c"], "d")) //=> -1

/* =========== *
* Challenge 10 *
* ============ */
//SOLUTION 1: FOR LOOP
// function unique(array) {
//   //your code goes here...
//     let noDupes = [];
//   for (let i = 0; i < array.length; i++) {
//     if (!noDupes.includes(array[i])) {
//       noDupes.push(array[i]);
//     }
//   }
//   return noDupes;
// }

// SOLUTION 2: FILTER METHOD
// function unique(array) {
//   return array.filter((ele, index, array) => {
//     if (array.indexOf(ele) === index) {
//       return true;
//     } else {
//       return false;
//     }
//   });
// }

//Solution 2: Filter E6 notation
function unique(array) {
  return array.filter((ele, index, array) => array.indexOf(ele) === index);
}

// console.log(unique([1, 1, 2, 3, 3])) // => [1, 2, 3]
// console.log(unique(["a", "a", "c", "aa", "b", "b"])) //=> ["a", "c", "aa", "b"]


// const myArray = [1, 1, 2, 3, 3];
// console.log(myArray.indexOf(1)) // 0
