//Create a function that checks if a given string is a palindrome.
function palidromeCheck(str){
    console.log(str);
    let pol=str.replace(/[^a-zA-Z0-9]/g,'').toLowerCase();//the string have some space and sone splecial charactor remove and it make upercase or lowercase
    console.log(pol);
    return pol===pol.split('').reverse().join('');// palindrome::to check the string are read forward and back word that time string same as both said
   
}
let StringVal='nilam';
let result=palidromeCheck(StringVal);
console.log('string are read :',result);