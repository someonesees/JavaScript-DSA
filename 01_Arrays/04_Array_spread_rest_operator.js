//-----------------------Spread Operator--------------------------------
const num0=[1,2,3,4,6];
const fruit0=["Apple","Mango","Orange"]
const spreadArray=[...num0,...fruit0]                  //it give one final array from 2 or more array
console.log(spreadArray);                              //its make shallow copy of an array


//-----------------------Rest Operator -----------------------------------

function sum(...number){ //Rest opertor as many as parameter pass it will take without defining
    return number;
}
console.log(sum(num0,fruit0));