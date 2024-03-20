//number prime or not
//Create a function that checks if a given number is prime.
function prime(num){
    //the prime number is not less than the 1
    if(num<=1){
        return false;
    }
        for(i=2;i<=Math.sqrt(num);i++){//the prime number not divided the other numbers
            if(num%i===0){
                return false;
            }
        
    }  
    return true;
}

let number=4;
let result=prime(number);
console.log("the prime no is:",result);
//when the number array to pass tha time
let arrayNumber=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
arrayNumber.forEach(val =>{
if(prime(val)){
    console.log("prime number is:",val);
}else{
    console.log("Not prime number is:",val); 
}
});

//when you find the prime number upto 100 then use
let numr=2;
let cout=0;
while(cout<50){
    if(prime(numr)){
        console.log("1-100 prime no is::",numr);
        cout++;
    }
    numr++
}