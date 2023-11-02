// Задача 1
function calculateDistance(x1, x2) {
    return Math.abs(x2 - x1);
  }
  
  console.log(calculateDistance(0, 5)); // 5
  console.log(calculateDistance(-3, 2)); // 5
  
  // Задача 2
  function calculateSegmentProduct(A, B, C) {
    const AC = Math.abs(C - A);
    const BC = Math.abs(C - B);
    return AC * BC;
  }
  
  console.log(calculateSegmentProduct(0, 5, 2)); // 6
  console.log(calculateSegmentProduct(-1, 12, 7)); // 40
  
  // Задача 3
  function calculateKilobytes(fileSizeInBytes) {
    const kilobytes = Math.floor(fileSizeInBytes / 1024);
    return kilobytes;
  }
  
  console.log(calculateKilobytes(2048)); // 2
  console.log(calculateKilobytes(5000)); // 4
  
  // Задача 4
  function calculateSegments(lengthA, lengthB) {
    const segments = Math.floor(lengthA / lengthB);
    return segments;
  }
  
  console.log(calculateSegments(10, 3)); // 3
  console.log(calculateSegments(15, 4)); // 3
  
  // Задача 5
  function calculateDigitSum(twoDigitNumber) {
    const tens = Math.floor(twoDigitNumber / 10);
    const ones = twoDigitNumber % 10;
    const digitSum = tens + ones;
    return digitSum;
  }
  
  console.log(calculateDigitSum(47)); // 11
  console.log(calculateDigitSum(89)); // 17
  
  // Задача 6
  function swapHundredsAndTens(threeDigitNumber) {
    const hundreds = Math.floor(threeDigitNumber / 100);
    const tens = Math.floor((threeDigitNumber / 10) % 10);
    const ones = threeDigitNumber % 10;
    const newNumber = tens * 100 + hundreds * 10 + ones;
    return newNumber;
  }
  
  console.log(swapHundredsAndTens(123)); // 213
  console.log(swapHundredsAndTens(987)); // 897
  
  // Задача 7
  function getHundredsDigit(number) {
    if (number > 999) {
      const hundredsDigit = Math.floor((number / 100) % 10);
      return hundredsDigit;
    } else {
      return 0;
    }
  }
  
  console.log(getHundredsDigit(1234)); // 2
  console.log(getHundredsDigit(9876)); // 7
  console.log(getHundredsDigit(500)); // 3

