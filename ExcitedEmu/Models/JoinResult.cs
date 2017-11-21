using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
 
namespace ExcitedEmu.Models
{
    public class JoinResult : BaseEntity
    {
        [Required]
        public string description { get; set; }
        [Required]
        public string title { get; set; }
        [Required]
        public DateTime date { get; set; }
        [Required]
        public string duration {get;set;}
        [Required]
        public string coordinator {get;set;}
        public int coordinatorID {get;set;}
        
        [Required]
        public int idactivities {get;set;}
        [Required]
        public int participants {get;set;}
    }
}