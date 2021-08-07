// Question3
function isCharacterAVowel(character) {
  let vowels = "aeiou";
  if (character.length > 1) return "Provide a character with length 1";
  if (vowels.includes(character)) {
    return true;
  } else {
    return false;
  }
}
console.log(isCharacterAVowel("a"));
console.log(isCharacterAVowel("d"));
console.log(isCharacterAVowel("u"));
console.log(isCharacterAVowel("z"));
