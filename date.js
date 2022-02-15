
const myFavouriteDate = new Date('1971-12-16');
// console.log(myFavouriteDate);

const anotherdate = new Date(1971, 3, 26, 11, 50, 40, 80);
// console.log(anotherdate);

if (myFavouriteDate.getTime() < anotherdate.getTime()) {
    console.log("myFavouriteDate is earlier");
}