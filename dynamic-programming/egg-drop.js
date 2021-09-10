//https://medium.com/javarevisited/super-egg-drop-problem-ac42a4b4b09a
//https://www.geeksforgeeks.org/egg-dropping-puzzle-dp-11/

let n= 2;
let k= 10;

let result = superEggDrop(n, k);
console.log(result);

function superEggDrop(eggs, floors) {
        
  let floorsDp = new Array(floors+1).fill(0).map(() => new Array(eggs+1).fill(0));
  
  for (let f=1; f<=floors; f++) {
      for (let e=1; e<=eggs; e++) {
          
        floorsDp[f][e] = 1 
              + floorsDp[f-1][e-1] 
              + floorsDp[f-1][e];
          
          if (floorsDp[f][e] >= floors) {
              return f;
          }
      }
  }
  
  return -1;
}
