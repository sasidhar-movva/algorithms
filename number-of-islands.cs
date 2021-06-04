//https://practice.geeksforgeeks.org/problems/find-the-number-of-islands/1/

using System;
using System.Collections.Generic;

namespace ConsoleApp1
{
    class Program
    {
        static readonly int rowSize = 2;
        static readonly int colSize = 7;

        static void Main()
        {
            var input = new int[,] { { 0, 1, 1, 1, 0, 0, 0 }, { 0, 0, 1, 1, 0, 1, 0 } };
            var connectedList = new List<HashSet<string>>();

            var count = CalculateNumberOfIslands(input, 0, 0, connectedList);
            Console.WriteLine($"Hello World {count}");
            Console.ReadLine();
        }

        static int CalculateNumberOfIslands(int[,] input, int rowIndex, int colIndex, List<HashSet<string>> connectedList)
        {
            if (rowIndex == rowSize)
            {
                return connectedList.Count;
            }

            if (input[rowIndex, colIndex] == 0)
            {
                if (colIndex == colSize - 1)
                {
                    return CalculateNumberOfIslands(input, rowIndex + 1, 0, connectedList);
                }
                return CalculateNumberOfIslands(input, rowIndex, colIndex + 1, connectedList);
            }

            if (input[rowIndex, colIndex] == 1)
            {
                if (connectedList.Count == 0)
                {
                    connectedList.Add(new HashSet<string>() { $"{rowIndex}, {colIndex}" });
                }
                else
                {
                    ProceesNodeConnectedToLand(rowIndex, colIndex, connectedList);
                }
            }
            if (colIndex == colSize - 1)
            {
                CalculateNumberOfIslands(input, rowIndex + 1, 0, connectedList);
            }
            else
            {
                CalculateNumberOfIslands(input, rowIndex, colIndex + 1, connectedList);
            }
            return connectedList.Count;
        }

        static bool ProceesNodeConnectedToLand(int rowIndex, int colIndex, List<HashSet<string>> connectedList)
        {
            foreach (var item in connectedList)
            {

                if (item.Contains($"{rowIndex}, {colIndex + 1}") || item.Contains($"{rowIndex + 1}, {colIndex}") ||
                    item.Contains($"{rowIndex + 1}, {colIndex + 1}") || item.Contains($"{rowIndex - 1}, {colIndex - 1}") ||
                    item.Contains($"{rowIndex + 1}, {colIndex - 1}") || item.Contains($"{rowIndex - 1}, {colIndex + 1}") ||
                    item.Contains($"{rowIndex}, {colIndex - 1}") || item.Contains($"{rowIndex - 1}, {colIndex}"))
                {
                    item.Add($"{rowIndex}, {colIndex}");
                    return true;
                }
            }
            connectedList.Add(new HashSet<string>() { $"{rowIndex}, {colIndex}" });

            return false;
        }
    }
}
