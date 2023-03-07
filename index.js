//Question 1
//Mutating array methods modify the original array directly 
//while non mutating array methods return a new array without modifying the original
//Mutating array methods
//push(): adds one or more elements to the end of an array and modifies the original array

//pop(): removes the last element from an array and modifies the original array.

//splice(): removes, adds or replaces elements from an array and modifies the original array.

//shift(): removes the first element from an array and modifies the original array

//sort(): sorts the elements of an array in place and modifies the original array.

//Non - mutating array methods
//concat(): concatenates two or more arrays and returns a new array.Example:

//slice(): returns a shallow copy of a portion of an array selected from start to end.

//map(): creates a new array with the results of calling a provided

//function on every element in the array.

//filter(): creates a new array with all the elements that pass the test implemented by the provided

//function.reduce(): executes a reducer function on each element of the array, resulting in a single output value

//Question 2
let languages = ["C#", "Javascript", "Ruby", "PHP", "Python"];
languages.push = 'Kotlin'
languages.splice(3, 0, 'Java')
languages.shift()
languages.unshift('Scala')
languages.unshift('Swift')
languages.splice(5, 1, "Go", "Rust")
console.log(languages);


//Question 3 the output is going to be Appple, Mango, Banana 
let fruits = ['Apple', 'Mango', 'Banana'];

function changefruit(fruits) {
    fruits[2] = 'Orange';
    return fruits
} //when you write the following  line outside the function only then orange will be added to the  function

fruits[2] = 'Orange'
    //output Apple, Mango, Orange 
console.log(fruits)
    //Question 4
function maxi(numarr) {
    var maximum = numarr[0]
    for (var i = 1; i < numarr.length; i++) {
        var currentnum = numarr[i]
        if (currentnum > maximum) {
            maximum = currentnum

        }

    }
    return maximum
}

console.log(maxi([4, 5, 10, -2]));

//Question 5

const originalArray = [5, 10, 15]

function valTimesIndex(originalArray) {
    const timesArray = originalArray.map((value, index) => value * index);
    return timesArray;
}
console.log(valTimesIndex(originalArray));