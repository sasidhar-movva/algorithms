const input = [12, 11, 13, 5, 6, 7];
sort(input);
console.log(input);

function sort(array) {
    const length = array.length;
    for (let index = length / 2 - 1; index >= 0; index--) {
        heapify(array, length, index);
    }
    for (let index = length - 1; index > 0; index--) {
        let temp = array[0];
        array[0] = array[index];
        array[index] = temp;
        heapify(array, index, 0);
    }
}

function heapify(array, length, index) {
    let largest = index;
    let l = 2 * index + 1;
    let r = l + 1;
    if (l < length && array[l] > array[largest]) {
        largest = l;
    }
    if (r < length && array[r] > array[largest]) {
        largest = r;
    }
    if (largest !== index) {
        let swap = array[index];
        array[index] = array[largest];
        array[largest] = swap;
        heapify(array, largest);
    }
}
