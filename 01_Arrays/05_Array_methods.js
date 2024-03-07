//----------------------------Concat----------------------------------

let arr0=[1,2,3,4]
let arr1=["Apple","Mango","Banana"]
let arr2=arr0.concat(arr1,["Batman","Superman"]);          //it concat it into new array 
console.log(arr2);      


//-----------------------------Slice----------------------------------------------

let superHero=["Loki","IronMan","Spiderman","Batman","Superman"]
console.log(superHero.slice(0,2)); //it include initial value and exclude last value; superhelpfull function
console.log(superHero.slice(-4));//count from reverse order; *it doesn't affect the real array


//------------------------------Splice-------------------------------------------------

let superHero0=["Loki","IronMan","Spiderman","Batman","Superman","Chota Bheem"]
// console.log(superHero0.splice(0,3));  //it also remove value from original array and remaining will be on original array

//it also use to replace the value on an particular position or add value
superHero0.splice(4,0,"Flash") 
console.log(superHero0);


//-------------------------------Fills-------------------------------------------------


let values=[1,2,3,4,5]
console.log(values.fill(0,2,3));  //it return modified array; it replace the value with 0 from index 2 to 3


//---------------------------------findIndex--------------------------------------------

let values0=[22,33,44,55,66,77,89,41,2,1,98]
console.log(values0.findIndex((item)=>item===2)); //it takes a callback and provide the index of that value if not found value return -1


//-----------------------------------flat------------------------------------------------

const numbers=[1,[2,3,[4,5]],7,8,9] //create new array with all sub arrays
console.log(numbers.flat(2)); //inside flat function we can provide depth


//-----------------------------------reverseArray------------------------------------------------

const number0=[1,2,3,4,5,6]
console.log(number0.reverse());


//---------------------------------------Sort---------------------------------------------------
const number1=[33,65,1,45,8,9,3,5]
number1.sort((a,b)=>a-b)   // return reference of same array
console.log(number1);