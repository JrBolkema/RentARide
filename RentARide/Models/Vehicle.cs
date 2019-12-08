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
		public int vehicleId { get; set; }
		public string vinNumber { get; set; }
		public string make { get; set; }
		public string model { get; set; }
		public int vehicleYear { get; set; }
		public decimal dailyRate { get; set; }
		public int currentLocation{ get; set; }
		public string vehicleType { get; set; }
		public string fleetStatus { get; set; }
        public DateTime created { get; set; }
        public int createdBy { get; set; }
        public DateTime modified { get; set; }
        public int modifiedBy { get; set; }
    }
}
