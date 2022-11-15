// 27. The following is an array of 10 students ages:
//     => const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
//     - Sort the array and find the min and max age
//     - Find the median age(one middle item or two middle items divided by two)
//     - Find the average age(all items divided by number of items)
//     - Find the range of the ages(max minus min)
//     - Compare the value of (min - average) and (max - average), use abs() method

const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]

ages.sort(function(a, b){return a - b})
console.log(ages)


function myArrayMax(arr) {
    return Math.max.apply(null, arr);
  }

let maxage = myArrayMax(ages)
console.log(`max age is ${maxage}`)

function myArrayMin(arr) {
    return Math.min.apply(null, arr);
  }

  let minage = myArrayMin(ages)
console.log(`minimum age is ${minage}`)


// find the median
const median = arr => {
  const mid = Math.floor(arr.length / 2),
    nums = [...arr].sort((a, b) => a - b);
  return arr.length % 2 !== 0 ? nums[mid] : (nums[mid - 1] + nums[mid]) / 2;
};

console.log(median(ages))

//find the average
const sum = ages.reduce((a, b) => a + b, 0);
const avg = (sum / ages.length) || 0;

console.log(`The sum is: ${sum}. The average is: ${avg}.`);

//range of ages
let range = maxage - minage
console.log(`age is ranging between ${range} years`)

//Compare the value of (min - average) and (max - average), use abs() method
let compare = Math.abs(minage - avg);
let compare2 = Math.abs(maxage - avg);

console.log(compare2)