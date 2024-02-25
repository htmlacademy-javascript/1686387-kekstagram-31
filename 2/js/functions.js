function stringLength(string, maxLength) {
  if(string.length <= maxLength) {
    return true;
  }
  return false;
}

function isPalindrom(string) {
  if(string === string.split('').reverse().join('')) {
    return true;
  }
  return false;
}

stringLength('проверяемая строка', 20);
isPalindrom('топот');
