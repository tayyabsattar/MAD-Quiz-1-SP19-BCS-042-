let myArr = ["a", "b", "c", "d,e,f", "a,b,c"];
let uniqueArr = Array.from(new Set(myArr));
console.log(uniqueArr);