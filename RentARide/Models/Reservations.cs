using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace RentARide.Models
{
    public class Reservations
    {
        [Key]
        public int reservationId { get; set; }
        public string confirmationCode { get; set; }
        public DateTime reservedDate { get; set; }
        public string customerName { get; set; }
        public string reservationStatus { get; set; }
        public DateTime pickUpDate { get; set; }
        public DateTime dropOffDate { get; set; }
        public int vehicleId { get; set; }
        public int location { get; set; }
        public int returnedLocationId { get; set; }
        public DateTime signedCheckOut { get; set; }
        public DateTime signedCheckIn { get; set; }
        public DateTime actualCheckOut { get; set; }
        public DateTime actualCheckIn { get; set; }
        public string vehicleCondition { get; set; }
        public DateTime created { get; set; }
        public int createdBy { get; set; }
        public DateTime modified { get; set; }
        public int modifiedBy { get; set; }
        public string creditCard { get; set; }
        public string securityCode { get; set; }
        public string pickupLocationId { get; set; }
    }
}
