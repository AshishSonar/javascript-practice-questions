// 17. Create a human readable time format using the Date time object
//     - YYYY-MM-DD HH:mm
//     - DD-MM-YYYY HH:mm
//     - DD/MM/YYYY HH:mm

let a = new Date();
console.log(a);
console.log(a.toDateString());
console.log(a.toISOString());
console.log(a.toUTCString());
console.log(a.toLocaleDateString());
console.log(a.toString());

console.log(a.getFullYear());
console.log(a.getMonth());
console.log(a.getDate());
console.log(a.getDay());
console.log(a.getHours());
console.log(a.getMinutes());
console.log(a.getTime());

// YYYY-MM-DD HH:mm

console.log(
  `${a.getFullYear()}-${
    a.getMonth() + 1
  }-${a.getDate()} ${a.getHours()}:${a.getMinutes()}`
);
