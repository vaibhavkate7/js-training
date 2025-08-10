function checkCharacterIsVowelOrNot(str) {
  if (typeof (str) == "string") {
    if ((str == "a") || (str == "e") ||
      (str == "i") || (str == "o") || (str == "u")) {
      console.log("given char is vowel")
    } else {
      console.log("give is Not vowel")
    }
  } else {
    console.log("invalid character")
  }
}
checkCharacterIsVowelOrNot("a")
