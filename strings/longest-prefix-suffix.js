// https://practice.geeksforgeeks.org/problems/longest-prefix-suffix2527/1

 lps(s){ 
        let length = s.length;
 
  let i=0;
  let j= 1;
  let lps = new Array(length).fill(0);
 
  while (j <length) {
    if (s[i] === s[j]) {
      lps[j++] = ++i;
    } else if (i > 0) {
      i = lps[i-1];
    } else {
      lps[j++] = 0;
    }
  }
