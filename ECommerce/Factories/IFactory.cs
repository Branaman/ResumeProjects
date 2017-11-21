using ECommerce.Models;
using System.Collections.Generic;
namespace ECommerce.Factories
{
    public interface IFactory<T> where T : BaseEntity
    {
    }
}