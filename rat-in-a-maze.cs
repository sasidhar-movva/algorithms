/******************************************************************************

https://www.geeksforgeeks.org/rat-in-a-maze-backtracking-2/

*******************************************************************************/
using System;
class HelloWorld {
    static int SizeOfMatrix = 5;
  
  static void Main() {
      var inputMatrix = new int[,] {
                               {1, 0, 0, 0, 0},
                               {1, 1, 0, 1, 0},
                               {0, 1, 1, 1, 0},
                               {0, 0, 0, 1, 0},
                               {1, 1, 1, 1, 1}};

        var outMatrix = new int[SizeOfMatrix,SizeOfMatrix];
        FindPath(inputMatrix, outMatrix, 0,0);
        for(int i=0; i<SizeOfMatrix; i++) {
            for(int j=0; j<SizeOfMatrix; j++) {
                Console.Write(outMatrix[i,j] + " ");
            }
            Console.WriteLine();
        }
        
  }
  
  static bool FindPath(int[,] inputMatrix, int[,] outMatrix, int rowIndex, int colIndex) {
      if (rowIndex == SizeOfMatrix-1 && colIndex == SizeOfMatrix-1) {
          outMatrix[rowIndex, colIndex] = 1;
          return true;
      }
      
      if(inputMatrix[rowIndex, colIndex] ==0) {
          return false;
      } 
      else {
          outMatrix[rowIndex, colIndex] =1;
          if (FindPath(inputMatrix, outMatrix, rowIndex, colIndex+1) || FindPath(inputMatrix, outMatrix, rowIndex+1, colIndex)) {
              return true;
          } 
          else {
               outMatrix[rowIndex, colIndex] =1;
               return false;
          }
      }
      
      
  }
  
}
