//2.	Implement a function that reverses a string
function reverseString(char){
    let sry=char.split('');
 let temp;
    for(let i=0;i<sry.length;i++){
        for(let j=i;j<sry.length;j++){
            temp=sry[i];
            sry[i]=sry[j];
            sry[j]=temp;
        }
    }
    let ress=sry.join('');
    return ress;
}
let sRname='nilam';
let val;
let res=reverseString(sRname);
console.log("with function",res);

console.log('::::::::::::::::with reverse methods:::::::::::::::');

function withMethodString(str){
    let data;
    let aryConvert=str.split('');
    aryConvert.reverse();
    let final=aryConvert.join('');
return final;
}
let sWithMethod='Nilam Vaibhav More';
console.log("original string",sWithMethod);
let finalResult=withMethodString(sWithMethod);
console.log("revrese string:",finalResult);





let sName=['nilam','neev','vaibhav','sulbha','pritam'];
console.log('origanal',sName);
let temp;
//let temp=sName.split('');
//console.log('the string into arry',temp);
for(let i=0;i<sName.length;i++){
    for(let j=i;j<sName.length;j++){

             temp=sName[i];
            sName[i]=sName[j];
            sName[j]=temp;
     
    }
}
//with array method:reverse
console.log( 'the strimg in',sName);
let withMethod=['nilam','neev','vaibhav','sulbha','pritam'];
let result=withMethod.reverse();
console.log('with method',result);

