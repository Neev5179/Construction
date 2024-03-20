//Implement a function that removes duplicate values from an array.
console.log('Approach 1: Using the Set data structure');
let sary=[4,5,8,5,4,2,4];
let removeDupli=[...new Set(sary)];
console.log(removeDupli);
console.log(':::::::::::::::::::::::::');

const array = [1, 2, 3, 3, 4, 4, 5];
const uniqueArray = array.filter((item, index) => array.indexOf(item) === index);
console.log(uniqueArray); // Output: [1, 2, 3, 4, 5]

console.log(':::::::::::::::::::::::::');

var arNum=[2,5,2,6];
var resultAry=[];
var charNum;
var resultAry=arNum.filter((num,remove)=>arNum.indexOf(num)===remove);
//console.log( 'Duplicate number',charNum);
console.log("the remove duplicate::",resultAry);

console.log(':::::::::::::::::::::::::');
let ary=[1,5,7,5,7];
let remo=[];
let dupp=true;
for(let i=0;i<ary.length;i++){
    if(remo.includes(ary[i])!=dupp){
        remo+=ary[i];
    }
}
console.log('in array remove duplicate',remo);