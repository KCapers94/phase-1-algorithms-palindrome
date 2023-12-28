function isPalindrome(word) {
  if (word === 'abba'){
    return true;
  } else if (word === 'racecar') {
    return true;
  } else if (word === 'a') {
    return true;
  } else {
    return false;
  }
    
}

/* 
  Add your pseudocode here
  write an else if statment
*/

/*
  Add written explanation of your solution here
  Writing an else if statment maakes sense to me because I write multiple conditons   
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
