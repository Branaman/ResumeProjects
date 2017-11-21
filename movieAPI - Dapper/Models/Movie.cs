using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
 
namespace movieAPI.Models
{
    public class Movie : BaseEntity
    {
        [Required]
        public string poster { get; set; }
        [Required]
        public string title { get; set; }
        [Required]
        public float rating {get;set;}
        [Required]
        public DateTime released {get;set;}
        public int idmovies {get;set;}
    }
}