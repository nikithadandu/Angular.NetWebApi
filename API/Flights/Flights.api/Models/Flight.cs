﻿using Microsoft.VisualBasic;
using System.ComponentModel.DataAnnotations;

namespace Flights.API.Models
{
    public class Flight
    {
        [Key]
        public System.Guid Id { get; set; }
        public string ModelName { get; set; }
        public string SerialNumber { get; set; }
        public string RegistrationNumber { get; set; }
        public string RegistrationStatus { get; set; }
        public DateTime RegistrationDate { get; set; }

    }
}
