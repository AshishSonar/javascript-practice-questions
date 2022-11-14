// 21. Check if the season is Autumn, Winter, Spring or Summer. If the user input is :
//     - September, October or November, the season is Autumn.
//     - December, January or February, the season is Winter.
//     - March, April or May, the season is Spring
//     - June, July or August, the season is Summer

let season = "December"

if (season == "September" || season == "October" || season == "November") {
    console.log("the season is Autumn.")
} else if(season == "December" || season == "January" || season == "February") {
    console.log("the season is Winter.")
} else if(season == "March" || season == "April" || season == "May") {
    console.log("the season is Spring")
} else {
    console.log("the season is Summer")
}