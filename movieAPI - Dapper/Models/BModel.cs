using System;
namespace movieAPI.Models
{
    public abstract class BaseEntity
    {
        DateTime created_at {get; set;}
        DateTime updated_at {get; set;}
        public BaseEntity()
        {
            created_at = DateTime.Now;
            updated_at = DateTime.Now;
        }
    }
}