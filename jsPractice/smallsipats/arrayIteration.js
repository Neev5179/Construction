//Sum of array elements: Write a function that takes an array of numbers as input and
// returns the sum of all the elements in the array using the array iteration method. 
//(Example: Input: [1, 2, 3, 4], Output: 10)

let numbers=[1, 2, 3, 4];
let sum=0;
numbers.forEach(val=>{
    sum+=val;
});
console.log("sum of the array::",sum);

//Filter even numbers: Write a function that takes an array of numbers as input and 
//returns a new array containing only the even numbers using the array iteration method. 
//(Example: Input: [1, 2, 3, 4, 5, 6], Output: [2, 4, 6])

let evennum=[1, 2, 3, 4, 5, 6];
let even=[];
evennum.filter(num=>{
    if(num % 2==0){ 
        even.push(num);
    }
   
});
console.log("the Even no is::",even);

//Find maximum value: Write a function that takes an array of numbers as input
// and returns the maximum value in the array using the array iteration method. 
//(Example: Input: [10, 5, 8, 20], Output: 20)

let ary = [10, 5, 8, 20];
let maxNum = [];

ary.forEach(num => {
  if (!maxNum.length || num > maxNum[0]) {
    maxNum = [num];
  } else if (num === maxNum[0]) {
    maxNum.push(num);
  }
});

console.log("The max number is:", maxNum);

// Check if all elements satisfy a condition: Write a function that takes an array of numbers as 
// input and returns true if all the elements in the array are greater than zero, and false otherwise, 
// using the array iteration method. (Example: Input: [1, 2, 3, 4], Output: true | Input: [1, -2, 3, 4], 
//     Output: false)
function array(ary){
  return ary.every(num => num > 0)

}
let numberArry=[1,2,3,4];

console.log( "the array of numbers grster than Zero:",array(numberArry));
console.log( "the array of numbers grster than Zero:",array([-5,5,6]));


//Count occurrences of a certain element: Write a function that takes an array of strings input 
//and returns the number of times a specific word appears in the array using the array iteration method. 
//(Example: Input: ["apple", "banana", "apple", "orange"], "apple", Output: 2)

// function occurance(ary){
//   let count={};
//   ary.every(ele=>{
//     if(ele[count]){
//        ele[count]++;
//     }else{
//       ele[count]=1;
//     }

//   });
//   return count;
// }
// let arry=["apple", "banana", "apple", "orange"];
// let result=occurance(arry);
// console.log("the occurance Presnt:",result);
function occurance(element){
  let count=[];
  element.forEach(val =>{
    if(count[val]){
      count[val]++;
    }else{
      count[val]=1
    }
  });
  return count;
}
let arry=["apple", "banana", "apple", "orange"];
let result=occurance(arry);
console.log("the occurance Presnt:",result);

//Reverse a string: Write a function that takes a string as input and returns the reverse 
//of that string. (Example: Input: "hello", Output: "olleh")

function revers(str){
  let arystr=str.split('');
  return arystr.reverse();
}
let string='hello';
let res=revers(string);
console.log(res.join(''));

//Remove duplicates from an array: Write a function that takes an array as input and returns 
//a new array with the duplicates removed. (Example: Input: [1, 2, 2, 3, 4, 4, 5], Output: [1, 2, 3, 4, 5])
function duparry(num){
  let dup=true;
  let res=[];
  num.filter(itam=>{
   if(res.includes(itam)!==dup){
    res+=itam;
   }
  });
  return res;
}
let dupNumber= [1, 2, 2, 3, 4, 4, 5];
let removeDup=duparry(dupNumber);
console.log("the remove dup array::",removeDup);

//Check if two arrays are equal: Write a function that takes two arrays as input and returns 
//true if they are equal (i.e., have the same elements in the same order), and false otherwise.
// (Example: Input: [1, 2, 3], [1, 2, 3], Output: true)
function eualArry(num1,num2){
  if(num1.length!==num2.length){
    return false;
  }
//   for(let i=0;i<num1.length;i++){
//     if(num1[i]!==num2[i]){
//       return false
//     }
// }
  num1.filter((element,index )=>element===num2[index])
 return true;
}
let a1 = [1, 2, 3];
let a2 =[1, 2, 3];
let res1=eualArry(a1,a2);
console.log('::',res1);


 
