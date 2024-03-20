function factorial(num) {
    //First, we check if the given number is either 0 or 1. 
    //Since the factorial of 0 and 1 is defined to be 1, we simply return 1 in these cases.
    if (num === 0 || num === 1) {
      return 1;
    }
   // For any other positive number greater than 1, we use recursion to calculate the factorial. 
    //We multiply the given number (num) with the factorial of the number one less than it (num - 1).
    return num * factorial(num - 1);
  }
  
  // Example usage
  console.log(factorial(0)); // Output: 120

  

// 

// We keep recursively calling the factorial function with decreasing values of num until
// we reach the base case (0 or 1), at which point the recursion stops and the result is calculated.

// The base case ensures that the recursion terminates and prevents an infinite loop.
