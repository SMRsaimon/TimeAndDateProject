let today = new Date();
let day = today.getDay();
let month = today.getMonth() + 1;
let year = today.getFullYear();

let hour = today.getHours();
let minute = today.getMinutes();
let second = today.getSeconds();

if (day < 10) {
    day = `0${day}`;
}
if (month < 10) {
    month = `0${month}`;
}

const date = `${day}-${month}-${year}`;
console.log(date);

if ((hour = 13 || hour = 14)) {
    hour = 01;
}
const time = `${hour}:${minute}:${second}`;
console.log(time);

// More implement

let today = new Date();
let dd = today.getDate();

let mm = today.getMonth() + 1;
const yyyy = today.getFullYear();
if (dd < 10) {
    dd = `0${dd}`;
}

if (mm < 10) {
    mm = `0${mm}`;
}
today = `${mm}-${dd}-${yyyy}`;
console.log(today);
today = `${mm}/${dd}/${yyyy}`;
console.log(today);
today = `${dd}-${mm}-${yyyy}`;
console.log(today);
today = `${dd}/${mm}/${yyyy}`;
console.log(today);