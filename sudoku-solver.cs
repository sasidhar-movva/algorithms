/******************************************************************************

https://www.geeksforgeeks.org/sudoku-backtracking-7/

*******************************************************************************/
using System;
class HelloWorld
{
    static int N=9;
  static void Main ()
  {
    var input =new int[9, 9]{ {3, 0, 6, 5, 0, 8, 4, 0, 2}, 
         {5, 2, 0, 0, 0, 0, 0, 0, 0}, 
         {0, 8, 7, 0, 0, 0, 0, 3, 1}, 
         {0, 0, 3, 0, 1, 0, 0, 8, 0}, 
         {9, 0, 0, 8, 6, 3, 0, 0, 5}, 
         {0, 5, 0, 0, 9, 0, 6, 0, 0}, 
         {1, 3, 0, 0, 0, 0, 2, 5, 0}, 
         {0, 0, 0, 0, 0, 0, 0, 7, 4}, 
         {0, 0, 5, 2, 0, 6, 3, 0, 0} };
    
    
    if(SolveSudoku(input, 0, 0)) {
           for(int i=0; i<N; i++) {
            for(int j=0; j<N; j++) {
                Console.Write(input[i,j] + " ");
            }
            Console.WriteLine();
           }
    } else {
       Console.WriteLine("No Solution exists"); 
    }
    
    		  
  }
  
  static bool SolveSudoku(int[,] input, int rowIndex, int columnIndex) {
     if (rowIndex == N-1 && columnIndex == N) {
         return true;
     }
     
     if (columnIndex == N) {
         rowIndex++;
         columnIndex = 0;
     }
     
     if (input[rowIndex, columnIndex] != 0) {
         return SolveSudoku(input, rowIndex, columnIndex+1);
     }
     
      for(int newNumber=1;newNumber<10; newNumber++) {
          if(CanNewNumberAddedAtIndex(input, newNumber, rowIndex, columnIndex)) {
              input[rowIndex, columnIndex] = newNumber;
              if (SolveSudoku(input, rowIndex, columnIndex+1))
              {
                  return true;
              }
           
          }
           input[rowIndex, columnIndex] = 0;
      }
     return false;
  }
  
  static bool CanNewNumberAddedAtIndex(int[,] input, int newNumber, int rowIndex, int columnIndex) {
      for(int i=0;i<9; i++) {
           if (newNumber == input[rowIndex, i]) {
               return false;
           }
      }
      
      for(int i=0;i<9; i++) {
           if (newNumber == input[i, columnIndex]) {
               return false;
           }
      }
      var startRowIndex = rowIndex - rowIndex%3;
      var startColIndex = columnIndex - columnIndex%3;
      
       for(int i=0; i<3; i++) {
            for(int j=0; j<3; j++) {
                 if (input[startRowIndex + i, startColIndex + j] == newNumber)
                     return false;
            }
      }
      return true;
  }
 
 }
