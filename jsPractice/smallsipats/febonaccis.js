// //Write a program that prints the Fibonacci sequence up to a given number of terms.
function feboneccis(term){
    let sequance=[];
    if(term>=1){
        sequance.push(0);
    }
    if(term>=2){
        sequance.push(1);
    }
    for(let i =2; i<term;i++){
        let res=sequance[i-1] + sequance[i-2]
    sequance.push(res);
    }
    return sequance
}

let number=10;
let resut=feboneccis(number);
console.log('fibonacis',number);
console.log('fibonacis serise',resut.join(','));

