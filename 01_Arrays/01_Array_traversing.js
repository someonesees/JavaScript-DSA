let values=[9,45,7,1,2,8,0,11,23,41,77];
for (let index = 0; index < values.length; index++) {
    const element = values[index];                      //Traditional for loop
    console.log(`${index}: value is ${element}`);       //time complexity is: O(n)
}


values.forEach(element => {                 //using forEach it has callback and TC is quadratic
    console.log(element);                  //time complexity is: O(n)
});
