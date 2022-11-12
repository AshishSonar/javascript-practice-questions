// from array extract string values and put it into new array

let arr1 = [1, 2, "ashish", true, 5, "sonar", false, "Hello"]
let arr2= []

for (let element of arr1) {
    if (typeof element === "string") {
        arr2.push(element)
    }
}

console.log(arr2)