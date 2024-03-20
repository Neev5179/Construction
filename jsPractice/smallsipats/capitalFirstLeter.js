	//Write a function that takes a string as input and capitalizes the first letter of each word.
function capitalString(str){
     let firsts=str.split(' ');
     
     let capitalString= firsts.map(first =>{
        let firstLeter=first.charAt(0).toUpperCase(); 
        let  res=first.slice(1);
        return firstLeter + res;
    });
   let funcResult=capitalString.join(' ');
   return funcResult;
}
let stringVal='neev vaibhav more';
let finalResult=capitalString(stringVal);
console.log("result is:",finalResult);



