/******************************************************************************

Welcome to GDB Online.
GDB online is an online compiler and debugger tool for C, C++, Python, Java, PHP, Ruby, Perl,
C#, VB, Swift, Pascal, Fortran, Haskell, Objective-C, Assembly, HTML, CSS, JS, SQLite, Prolog.
Code, Compile, Run and Debug online from anywhere in world.

*******************************************************************************/
using System;
class HelloWorld {
  static void Main() {
    Console.WriteLine("Hello World");
    var n= 2;
    var str = new char[2*n];
    
    printParenthesis(str, n);
  }
  
  static void printParenthesis(char []str, int n) {
      if (n>0){
          _printParenthesis(str, 0, n, 0, 0);
      }
  }
  
  static void _printParenthesis(char []str, int pos, int n, int open, int close) {
      if (close == n) {
          Console.WriteLine(str);
      } 
      else {
          if (open > close) {
              str[pos] = '}';
              _printParenthesis(str, pos+1, n, open, close +1);
          }
          if(open < n) {
              str[pos] = '{';
              _printParenthesis(str, pos+1, n, open+1, close);
          }
      }
  }
}

