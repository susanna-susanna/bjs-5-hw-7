function compareArrays(arr1, arr2) {
  return arr1.length !== arr2.length ? false : arr1.every((element, i) => element === arr2[i]);
}

function sum1(...args) {
  let sum = 0;
  for (let i = 0; i < args.length; i++) {
    sum +=args[i];
  }
  return sum;
}

const mSum = memorize(sum1, 5);

function memorize(fn, limit) {
  let results = [];
  return function() {
    check = results.find(result => compareArrays(result.args, Array.from(arguments)));
    if (check) {
      console.log(`Результат из памяти:`);
      return check.result;
    }

    results.push({ args: Array.from(arguments), result: fn(...arguments) })

    if (results.length > limit) {
      results.pop();
    }
    let i = results.length - 1;
    console.log(`Результат не из памяти:`)
    return results[i].result;
  }
}

//const sum = memorize((a, b) => a + b, 10)
//sum(1, 2)

console.log(compareArrays([8, 9], [6])); 
compareArrays([8, 9, 5, 4], [8, 9, 5, 4, 8, 3, 5]); 
compareArrays([9, 2, 4, 8, 2], [9, 2, 4]); 
console.log(compareArrays([1, 2, 3], [2, 3, 1])); 
console.log(compareArrays([8, 1, 2], [8, 1, 2])); 

console.log(mSum(1, 2, 3));
console.log(mSum(4, 400));
console.log(mSum(5, 4));
console.log(mSum(7, 4));
console.log(mSum(7, 4));
console.log(mSum(7, 3, 1000));
console.log(mSum(4, 5));
console.log(mSum(3, 2, 1)); 