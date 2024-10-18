export const isPalindrome = (string) => {
  let length = string.length;
  for (let i = 0; i < length / 2; i++) {
    if (string[i] !== string[length - 1 - i]) {
      return " Not Palindrome";
    }
  }
  return "Palindrome";
};
