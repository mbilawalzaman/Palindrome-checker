export const isPalindrome = (string) => {
  string = string.toLowerCase();
  let length = string.length;
  for (let i = 0; i < length / 2; i++) {
    if (string[i] !== string[length - 1 - i]) {
      return " Not Palindrome";
    }
  }
  return "Palindrome";
};
