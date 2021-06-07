const input = [12, 11,13,5,6,7];

selectionSort(input, 0)

console.log(input);

function selectionSort(input, currentIndex) {   
   if (currentIndex === input.length) {
     return;
   }

   let minimumIndex = currentIndex;
   for (let index = currentIndex+1; index < input.length; index++) {
     if(input[minimumIndex] > input[index]) {
      minimumIndex = index;
     }
   }

   if (minimumIndex !== currentIndex) {
     let temp = input[currentIndex];
     input[currentIndex] = input[minimumIndex];
     input[minimumIndex] = temp;
   }

   selectionSort(input, currentIndex+1);
}
