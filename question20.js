// 20. Write a code which can give grades to students according to theirs scores:
//     - 80-100, A
//     - 70-89, B
//     - 60-69, C
//     - 50-59, D
//     - 0-49, F

let score = 90

if (score >= 80) {
    console.log(`Your grade is A`)
} else if(score >= 79) {
    console.log(`Your grade is B`)
}else if(score >= 69) {
    console.log(`Your grade is C`)
}else if(score >= 59) {
    console.log(`Your grade is D`)
}else if(score >= 49) {
    console.log(`Your grade is E`)
}else {
    console.log(`Your grade is F`)
}