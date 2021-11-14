using System;
using System.Collections.Generic;

namespace ConsoleApp1
{
    class Program
    {
        static void Main(string[] args)
        {
            List<string> userArray = new List<string>();
            string userString = "";

            do {
                userString = Convert.ToString(Console.ReadLine());
                userArray.Add(userString);
            } while (userString != "");

            Console.WriteLine("Найти подстроку: ");
            userString = Convert.ToString(Console.ReadLine());

            Console.WriteLine("Подстрока есть в строках: ");
            for (int stringIndex = 0; stringIndex < userArray[stringIndex].Length; ++stringIndex) {
                if(userArray[stringIndex].Contains(userString)) {
                    Console.WriteLine((stringIndex + 1) + ", ");
                }
            }
        }
    }
}
