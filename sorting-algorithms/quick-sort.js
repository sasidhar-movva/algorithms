const input = [12, 11, 13, 5, 6, 7];
quickSort(input, 0, input.length - 1) console.log(input);

function quickSort(array, low, high) {
    pivotIndex = high;
    let i = low,
        j = low;
    if (low < high) {
        while (j < high) {
            if (array[j] < array[pivotIndex]) {
                let temp = array[i];
                array[i] = array[j];
                array[j] = temp;
                i++;
            }
            j++;
        }
        if (j === high) {
            let temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
        quickSort(array, low, i - 1);
        quickSort(array, i + 1, high);
    }
}
