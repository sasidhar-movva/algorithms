//https://practice.geeksforgeeks.org/problems/count-occurences-of-anagrams5839/1#

const MAX = 256;

let pat = 'ABCD';
let txt = 'BACDGABCDA';

var result = anagramSearch(pat, txt);
console.log(result);

function compare(arr1, arr2) {
  for (let index = 0; index < MAX; index++) {
   if (arr1[index] !== arr2[index]) {
     return false;
   }
  }

  return true;
}

function anagramSearch(pat, txt) {
  let patternLength = pat.length;
  let textLength = txt.length;

  let anagramCount = 0;

  let patternAsciiCount = new Array(MAX).fill(0);
  let textAsciiCount = new Array(MAX).fill(0);

  for (let index = 0; index < patternLength; index++) {
    patternAsciiCount[pat[index].charCodeAt(0)]++;
    textAsciiCount[txt[index].charCodeAt(0)]++;
  }

  for (let index = patternLength; index < textLength; index++) {
    if (compare(patternAsciiCount, textAsciiCount)) {
      anagramCount++;
    }

    textAsciiCount[txt[index].charCodeAt(0)]++;
    textAsciiCount[txt[index-patternLength].charCodeAt(0)]--;
  }

  if (compare(patternAsciiCount, textAsciiCount)) {
    anagramCount++;
  }

  return anagramCount;
}
