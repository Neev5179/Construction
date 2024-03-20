let reString='maharastra';
console.log(reString);
let remDup='';
let dup=true;
for(let i=0;i<reString.length;i++){
    //for(let j=0;reString.length;j++){
        if(remDup.includes(reString[i])!=dup){
            remDup+=reString[i];
        
        }
    }
//}
console.log('remove the duplicate alpha',remDup);

let sname='neev';
let sary=sname.split('').filter((char,index,ary)=>{
    return char.indexOf(ary)===index;
})//.join('');
//sary.join('');

console.log('the string remove duplicate',sary);
