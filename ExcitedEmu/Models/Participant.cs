using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
 
namespace ExcitedEmu.Models
{
    public class Participant : BaseEntity
    {
        [Required]
        public string name { get; set; }
    }
}