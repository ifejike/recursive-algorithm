// * Finding the leap year

function isLeapYear(year) {
    if (year % 400 === 0) {
      return true;
    } else if (year % 100 === 0) {
      return false;
    } else if (year % 4 === 0) {
      return true;
    } else {
      return false;
    }
  }
  
  // Example usage
  const yearToCheck = 2024;
  if (isLeapYear(yearToCheck)) {
    console.log(`${yearToCheck} is a leap year.`);
  } else {
    console.log(`${yearToCheck} is not a leap year.`);
  }



  // * Ticket Price Difference

  function getTicketPrice(age) {
    switch (true) {
      case (age <= 12):
        return 10;
      case (age >= 13 && age <= 17):
        return 15;
      default:
        return 20;
    }
  }
  
  // Example usage
  const userAge = 50;
  const ticketPrice = getTicketPrice(userAge);
  
  console.log(`Ticket price for ${userAge} year old: $${ticketPrice}`);

// * Fibonacci
  function fibonacci(n) {
    if (n <= 1) {
      return n;
    } else {
      return fibonacci(n - 1) + fibonacci(n - 2);
    }
  }
  
  // Example usage
  const nthTerm = 6;
  const fibonacciNumber = fibonacci(nthTerm);
  console.log(`The ${nthTerm}th Fibonacci number is: ${fibonacciNumber}`);



  // * Palindrome
  function isPalindrome(str) {
    // Remove non-alphanumeric characters and convert to lowercase
    const cleanStr = str.replace(/\W/g, "").toLowerCase();
  
    // Base Case: If the string length is 0 or 1, it's a palindrome
    if (cleanStr.length <= 1) {
      return true;
    }
  
    // Check if the first and last characters are the same
    if (cleanStr[0] !== cleanStr[cleanStr.length - 1]) {
      return false;
    }
  
    // Recursively check the remaining substring
    return isPalindrome(cleanStr.slice(1, cleanStr.length - 1));
  }
  
  // Example usage
  const testString = "Race Car";
  if (isPalindrome(testString)) {
    console.log(`${testString} is a palindrome.`);
  } else {
    console.log(`${testString} is not a palindrome.`);
  }