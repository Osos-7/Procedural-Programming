// var str = "Hello from go my code"
// let vowels=['a','e','i','o','u']
// var counter_words = 0;
// var counter_vowels=0;

// for(let i=0 ;i<str.length;i++){
//     if(str[i] == " ")
//     counter_words++
// }
// counter_words ++

// for(let letter of str.toLowerCase()){
//     if(vowels.includes(letter))
//     counter_vowels ++
// }

// console.log(counter_words)
// console.log(counter_vowels)





// 2nd Task


var set1=[1,3,5]
var set2=[2,4,5,1]
var sum=0;
let i=0;
let j=0;

var array3 = set1.filter(function(obj){
    return set2.indexOf(obj) == -1
})
var array4 = set2.filter(function(obj){
    return set1.indexOf(obj) == -1
})

console.log(array3)
console.log(array4)