let values=[9,45,7,1,2,8,0,11,23,41,77];
// for (let index = 0; index < values.length; index++) {
//     const element = values[index];                      //Traditional for loop
//     console.log(`${index}: value is ${element}`);       //time complexity is: O(n) linear
// }

// let i=0;
// while(i<values.length){
//     console.log(values[i]);                     //while loop
//     i++;
// }

//-----------------------------------------Inbuilt Loops:--------------------------------------------------

//---------------------------  forEach inbuilt function-------------------------------------

// values.forEach(element => {                 //using forEach it has callback and TC is quadratic
//     console.log(element);                  //time complexity is: O(n) linear 
// });

// const result=Array.from(values)
// console.log(result);

//-----------------------Map inbuilt function---------------------------------

// values.map((item,index,array)=>console.log(item,index,array)) ---- //it return new array

//-------------------Filter inbuilt function-----------------------------------

// const filtered=values.filter((value,index,array)=>{  //it also return new array
//     return value>50      //its make shallow copy(share same reference)
// })
// console.log(filtered);

//-------------------Reduce inbuilt function------------------------------------

// const reduced=values.reduce((preValue,currValue)=>{  //its take array and reduce it down to one value
//     return preValue+currValue
// },0)//initialValue, if we pass it 2 then it will be added to sum and we don't mentioned the result will be same

// console.log(reduced);

//-------------------------passing object in array--------------------------------
let Person={
    name:"Someone",
    age:26,
    location:"India"
}

// let objectPassedArray=[1,2,3,4,5,Person]
// console.log(objectPassedArray);

// objectPassedArray.forEach((ele)=>{    //Not the best approach
//     console.log(ele)                
// })


//-----------------------Some inbuilt function--------------------------------------- 


// const element=(element)=>element%2==0;   //it return true or false 
// console.log(values.some(element));     //like in filter it gives value and in some it return boolean

// const result0=values.some((value,index,array)=>{
//     return value > 50
// })
// console.log(result0);


//---------------------------Every inbuilt function------------------------------------------

// const result1=values.every((value,index,array)=>{
//     return value >50              //its check for that every value is greater than the provided value
//                                     //if every value is greater than 50 only then it will give true else false
// })

// console.log(result1);


//---------------------------Find inbuilt function --------------------------------------------

// const result2= values.find((value,index,array)=>{
//     return value>20;                    //it returns only the first value of truthy condition
// })
// console.log(result2);

