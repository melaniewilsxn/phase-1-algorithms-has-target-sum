function hasTargetSum(array, target) {
  let foundTarget = false
  for (let i = 0; i<array.length; i++){
    for (let j = i+1; j<array.length; j++){
          if(array[i] + array[j] === target){
            foundTarget = true;
          }
    }
  }
  return foundTarget;
}

/* 
  Write the Big O time complexity of your function here
*/

/* 
  Add your pseudocode here
*/

/*
  Iterate through array and see if sum of any two numbers in an array equal the target
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
