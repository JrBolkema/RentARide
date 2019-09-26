﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace RentARide.Model
{
	public class Vehicle
	{
		public string Make { get; set; }
		public string Model { get; set; }
		public int Year { get; set; }
		public string Color { get; set; }
		public double Price { get; set; }

		public Vehicle(string make,string model, int year, string color, double price)
		{
			Make = make;
			Model = model;
			Year = year;
			Color = color;
			Price = price;
		}


	}
}
