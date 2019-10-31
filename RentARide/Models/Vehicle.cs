using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace RentARide.Models
{
	public class Vehicle
	{
		[Key]
		public int rarVehicleID { get; set; }
		public string VIN { get; set; }
		public string Make { get; set; }
		public string Model { get; set; }
		public int ModelYear { get; set; }
		public decimal salePrice { get; set; }
		public DateTime PurchaseDate { get; set; }
		public decimal PurchasePrice { get; set; }
		public string VehicleType { get; set; }
		public string FleetStatus { get; set; }






		


	}
}
