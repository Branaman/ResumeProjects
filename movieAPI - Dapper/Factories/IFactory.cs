using movieAPI.Models;
using System.Collections.Generic;
namespace movieAPI.Factories
{
    public interface IFactory<T> where T : BaseEntity
    {
    }
}