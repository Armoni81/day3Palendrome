/*function twoSum(arr, arr1){

let toArray = arr.join("")
let toArray1 = arr1.join("")
let toInt= parseInt(toArray)
let toInt1 = parseInt(toArray1)
let addedNums = toInt + toInt1
console.log(toInt+toInt1)

}

twoSum(['3','1','4','2','9','9','10'],['4','2'])  */

//The function should return true if the number 
//is a palindrome and false otherwise. 

function luckyNumber(value){
return value === parseFloat(value.toString().split('').reverse().join(''))

}
luckyNumber('191')