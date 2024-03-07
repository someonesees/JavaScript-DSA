//unshift
let arr0=[1,2,3,4,5];
arr0.unshift("Banana", "Apple")     //unshift method insert the passed value at the begining of the array-like object

arr0.unshift([-1,-2])      //we can pass the array or multiple array also.  
arr0.unshift(1)
arr0.unshift(2)
arr0.unshift(3)         //if we pass the value in multiple line so the last line will be at tha first place

console.log(arr0);      // unshift has linear time complexity which is: O(n); Performance is slow


//shift

let arr1=["Orange","Mango","Apple","Banana"]
arr1.shift();           //here shift remove the very first element from the array
console.log(arr1);      //shift has linear time complexity which is: O(n); Performance is slow

