// let marks = [85, 97, 44, 37, 76, 60]
// let sum = 0
// for (let i of marks){
//     sum += i; 
// }
// a = marks.length;
// console.log("Average marks of the Student",sum/a);


let prices = [250, 645, 300, 900, 50]
for (let i = 0 ; i < prices.length ; i++){
prices[i] -= prices[i]/10;
console.log(`The price on ${i} item after appliying the offer is ${prices[i]}`)
}
console.log(prices);


let arr = [21, 42, 112, 44];
arr.push(34);
console.log(arr)
a = arr.pop();
console.log(arr, a)
console.log(arr.toString())
console.log(arr.concat(prices))
w = arr.unshift(34)
q = arr.slice(1, 3)
console.log(w);
console.log(q);
arr.splice()