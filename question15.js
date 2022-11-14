// 15. Calculate the slope, x-intercept and y-intercept of y = 2x -2

// 2x - y = 2

// to find y intercept
let x = 0
let y = 0

// x intercept
let xinter = (2 + y) / 2
console.log(`x intercept is (${xinter}, 0)`)

// y intercept
let yinter = 2*x-2
console.log(`y intercept is (0, ${yinter})`)

//slope of the equation (y2 - y1) / (x2 - x1)  (1, 0) (0 , -2)
let slope = (yinter - y) / (x - xinter)
console.log(`slope of the line is ${slope} m/s`)

