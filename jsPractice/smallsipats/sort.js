//	Create a function that sorts an array of objects based on a specific property.

function sort(val){
    val.sort();
    return val;
}
let ary=['nilam','abhi','kunal','neev'];
let result=sort(ary);
console.log("sorted array:",result);