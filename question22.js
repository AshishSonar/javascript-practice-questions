// 22. Write a program which tells the number of days in a month.

let month = "feb";

if (
  month == "january" ||
  month == "march" ||
  month == "may" ||
  month == "july" ||
  month == "august" ||
  month == "october" ||
  month == "december"
) {
    console.log(`Number of days in ${month} are 31 `)
} else {
    console.log(`Number of days in ${month} are 30 `)
}
