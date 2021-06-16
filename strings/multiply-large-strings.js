//https://practice.geeksforgeeks.org/problems/multiply-two-strings/1/

const str1 = '4249994981639334615617229281247863772372537681364035850998024901200639083873';
const str2 = '00503180179103594846929030337949';

console.log(multiplyStrings(str1, str2));

function multiplyStrings(a, b) {
    let result = '';
    for (let index = a.length - 1; index >= 0; index--) {
        const numberInFirstString = a.charAt(index);

        if (isNaN(numberInFirstString)) {
            continue;
        }

        let tempResult = [];
        let currentCarry = 0;
        let previousAppendNumbersIndex = a.length - 1 - index;

        for (let t = 0; t < previousAppendNumbersIndex; t++) {
            tempResult.unshift(+result.charAt(result.length - 1 - t));
        }

        let resultPadding = 1;

        for (let secondStringIndex = b.length - 1; secondStringIndex >= 0; secondStringIndex--) {
            const numberInSecondString = b.charAt(secondStringIndex);

            if (isNaN(numberInSecondString)) {
                continue;
            }

            let temp = numberInSecondString * numberInFirstString;

            if (!isNaN(result.charAt(result.length - previousAppendNumbersIndex - resultPadding))) {
                temp = currentCarry + temp + (+result.charAt(result.length - previousAppendNumbersIndex - resultPadding));
            }

            tempResult.unshift(temp % 10);

            currentCarry = Math.floor(temp / 10);

            resultPadding++;
        }

        tempResult.unshift(currentCarry);

        result = tempResult.join().replace(/,/g, '');
    }

    if (result == 0) {
        return 0;
    }

    let isZerosAtBeginning = result[0] === '0';

    while (isZerosAtBeginning) {
        result = result.substring(1);
        isZerosAtBeginning = result[0] === '0';
    }

    if (a[0] === '-' && b[0] === '-') {
        return result;
    } else if (a[0] === '-' || b[0] === '-') {
        return `-${result}`;
    } else {
        return result;
    }
}
