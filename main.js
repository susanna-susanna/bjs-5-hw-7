function compareArrays( arr1, arr2 ) {
  return (JSON.stringify(arr1) == JSON.stringify(arr2));
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
  return function () {
    check = results.find(result => compareArrays(result.args, Array.from(arguments)));
    if (check) {
      return `Результат из памяти: ${check.result}`;
    } else {
      results.push({args: Array.from(arguments), result: fn(...arguments)})
      if (results.length > limit) {
        results.pop();
      }
      let i = results.length - 1;
      return `Результат не из памяти: ${results[i].result}`;
    }
  }
}

console.log(mSum(1, 2, 3));
console.log(mSum(4, 400));
console.log(mSum(5, 4));
console.log(mSum(7, 4));
console.log(mSum(7, 4));
console.log(mSum(7, 3, 1000));
console.log(mSum(4, 5));
console.log(mSum(3, 2, 1)); 