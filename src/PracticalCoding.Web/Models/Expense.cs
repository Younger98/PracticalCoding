using System;
using System.ComponentModel.DataAnnotations;

namespace PracticalCoding.Web.Models
{
    public class Expense
    {
        public int Id { get; set; }

        [Required]
        public DateTime Date { get; set; }

        [Required]
        [StringLength(200)]
        public string Description { get; set; }

        [Required]
        [Range(0.01, double.MaxValue, ErrorMessage = "Amount must be greater than 0")]
        public decimal Amount { get; set; }

        [StringLength(50)]
        public string Category { get; set; }
    }
}
