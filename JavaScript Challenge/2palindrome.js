//2)

function palindrome(string) {
    const reverse = string.split("").reverse().join("")
  
    return reverse === string ? true : false
  }
  