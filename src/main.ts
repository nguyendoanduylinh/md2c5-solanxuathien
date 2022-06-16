function countNumber(numberArray: number[], searchValue: number): string {
  let count = 0;
  for (let number of numberArray) {
    if (number === searchValue) {
      count++;
    }
  }
  return `Số lần xuất hiện của số ${searchValue} là ${count}`;
}

let arr = [5, 6, 7, 8, 9, 0, 5, 4, 3, 2, 5, 8, 0, 0, 0, 0];

console.log(countNumber(arr, 5));
console.log(countNumber(arr, 8));
console.log(countNumber(arr, 0));
