using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;


namespace RentARide.Models
{
    public class Locations
    {
        [Key]
        public int locationId { get; set; }
        public string locationName { get; set; }
        public string locationAddress { get; set; }
    }
}
