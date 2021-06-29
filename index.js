function highAndLow(numbers){
  // ...
  //given is a string of numbers seperated by space
  //return the highest and lowest number
  //examples
  let array = numbers.split(" ").sort((a,b) => a-b);
  let result = "";
  // console.log(array, " is this array");
  return result + array[array.length-1] + " " + array[0];
}
console.log(highAndLow("4 5 29 54 4 0 -214 542 -64 1 -3 6 -6"), " should be ", "542 -214");