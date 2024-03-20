//Question: Write a function that takes an 
//array of numbers as input and returns the maximum number in the array.
function maxNum(num){
  
    let max=[];
    for(let i=0;i<num.length;i++){
        for(let j=1;j<num.length;j++){
            if(num[i]>num[j]){
                max=num[i];
                break;
        }
        if(num[i]<num[j]){
         max=num[j];
         break;
        }
      
    }
   
    }
    return max;
}

let arry=[10,5000,100,50,5000];
// let maxn=Math.max(...arry);
// console.log(maxn);
//maxNum()=arry;
let result=maxNum(arry);
console.log('max number0',result);