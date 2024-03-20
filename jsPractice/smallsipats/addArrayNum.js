//1.Write a function that takes an array of numbers and returns the sum of all the numbers.

function addNumber(add){
    let sum=0;
for(let i=0;i<add.length;i++){
     sum+=ary[i];
}
return sum;
}
let ary=[3,2,4];
let result=addNumber(ary);
console.log(result);

console.log('using forEach..........');
let num=[50,1,50,100];
let sum=0;
num.forEach(ale => {
    sum+=ale;
});
console.log(sum);