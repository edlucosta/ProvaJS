function checkPalindrome(inputString) {
    var stringReversa = "";
    for (var i = inputString.length - 1; i >= 0; i--) { 
        stringReversa += inputString[i]; 
    }
	if (inputString == stringReversa){
      return true
    } else
    {
      return false
    }
}