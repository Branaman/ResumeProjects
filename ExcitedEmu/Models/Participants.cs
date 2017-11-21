using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
 
namespace ExcitedEmu.Models
{
    public class Participants : BaseEntity
    {
        public int activities_idactivites { get; set; }
        public int users_idusers { get; set; }
    }
}