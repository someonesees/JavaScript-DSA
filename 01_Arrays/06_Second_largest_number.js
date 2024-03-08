/*
Question 1 - Second Largest Number
Given an array Arr of size N, print Second Largest
distinct element from array

Input: [12,35,1,10,34,1] - Output: 34
Input: [10,5,10] - Output: 5
*/

//--------------------------------------Bruteforce approach---------------------------------------

// function secondLargest(arr){
//     const uniqueArr=Array.from(new Set(arr))    //time complexity: O(n)
//     uniqueArr.sort((a,b)=>{
//         return b-a;                  //time complexity: O(log n)
//     })
//     if(uniqueArr.length>=2){
//         return uniqueArr[1]
//     }
//     else{
//         return -1;
//     }
    
// }
// console.log( secondLargest([10,5,10]))     //Time complexity of this approach is: O(nlogn)


//-----------------------------Optimise Approach---------------------------------------------

function secondLargest(arr){
    let Largest=Number.NEGATIVE_INFINITY;
    let secondLargest= Number.NEGATIVE_INFINITY;
    for (let i = 0; i < arr.length; i++) {         //O(n)
        if(arr[i]>Largest){
            secondLargest=Largest;
            Largest=arr[i];
        }
        else{
            if(arr[i]!=Largest && arr[i]>secondLargest){
                secondLargest=arr[i]
            }
        }
        
    }
    return secondLargest
}

console.log(secondLargest([12,35,1,10,34,1]));    //Time complexity: O(n) //Space Complexity:O(1)