// 12. Use the Date object to do the following activities
//     - What is the year today?
//     - What is the month today as a number?
//     - What is the date today?
//     - What is the day today as a number?
//     - What is the hours now?
//     - What is the minutes now?
//     - Find out the numbers of seconds elapsed from January 1, 1970 to now.

const a = new Date();

console.log(a)  
console.log(a.getFullYear())  
console.log(a.getMonth())  
console.log(a.getDate()) 
console.log(a.getDay()) 
console.log(a.getHours())  
console.log(a.getMinutes())
console.log(a.getTime())

//for ref: https://futurestud.io/tutorials/get-number-of-seconds-since-epoch-in-javascript
let b = Math.round(a.getTime() / 1000) // converting miliseconds to seconds
console.log(b)





