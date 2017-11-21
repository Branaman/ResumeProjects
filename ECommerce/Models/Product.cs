using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
 
namespace ECommerce.Models
{
    public class Product : BaseEntity
    {
        [Required]
        public string name { get; set; }
        [Required]
        public string image {get;set;}
        [Required]
        public string description {get;set;}
        public int quantity {get;set;}
        public int idproducts {get;set;}
    }
}