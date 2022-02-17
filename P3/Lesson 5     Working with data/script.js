"use strict";

const now = new Date();

console.log(now);

console.log(now.getFullYear());   

console.log(now.getMonth());

console.log(now.getDate());

console.log(now.getDay());


console.log(now.getUTCHours());


console.log(now.getTimezoneOffset());


console.log(now.getTime());

//2

console.log(now.setHours(3, 43));
console.log(now);

now.setFullYear(2021, 11, 28);
console.log(now);

let start = new Date();

for (let i = 0; i  < 100000; i++){
  let some = i * 3;
}

let end = new Date();


alert(`цикл отработался за ${end.getMilliseconds() - start.getMilliseconds()} милисекунд`);



