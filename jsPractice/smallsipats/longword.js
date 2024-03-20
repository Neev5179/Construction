//15.	Write a program that finds the longest word in a sentence.
function logWordOf(word) {
    var aryWord = word.split(' ');
    var resultWord = '';
    var currentWord;
    for (var i = 0; i < aryWord.length; i++) {
        var currentWord = aryWord[i];
        if (currentWord.length > resultWord.length) {
          resultWord = currentWord;
        }
      }
    
    return resultWord;
}
var stringVal = "this is maharastra in indila";
var result = logWordOf(stringVal);
console.log("the logest word in string::", result);
