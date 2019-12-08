using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;

namespace RentARide.Models
{
    public class Employees
    {
        [Key]
        public int employeeId { get; set; }
        public string employeeName { get; set; }
        public string userName { get; set; }
        public string employeePassword { get; set; }
        public string position { get; set; }
    }
}
