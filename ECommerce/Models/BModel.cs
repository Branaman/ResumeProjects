using System;
namespace ECommerce.Models
{
    public abstract class BaseEntity
    {
        public DateTime created_at {get; set;}
        public DateTime updated_at {get; set;}
        public BaseEntity()
        {
            created_at = DateTime.Now;
            updated_at = DateTime.Now;
        }
    }
}