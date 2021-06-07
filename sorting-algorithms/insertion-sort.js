const input = [12, 11, 13, 5, 6, 7];

insertionSort(input, 1)

console.log(input);

function insertionSort(input, currentIndex) {
  if (currentIndex === input.length) {
    return;
  }

  if (input[currentIndex] > input[currentIndex - 1]) {
    insertionSort(input, currentIndex + 1);;
  }

  let temp = input[currentIndex];
  let j = currentIndex-1;

  while (j >= 0 && temp < input[j]) {
    input[j+1] = input[j];
    j--;
  }
  input[j+1] = temp;

  insertionSort(input, currentIndex + 1);
}
