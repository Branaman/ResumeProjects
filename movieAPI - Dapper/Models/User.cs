using System.ComponentModel.DataAnnotations;
namespace movieAPI.Models
{
    public class User : BaseEntity
    {
        [Required]
        [EmailAddress]
        public string email { get; set; }
        [Required]
        [StringLength(16, ErrorMessage = "Password must be between 5 and 16 characters", MinimumLength = 5)]
        [DataType(DataType.Password)]
        public string password { get; set; }
    }
    public class LoginUser : User
    {
        public int idusers {get;set;}
    }
    public class RegisterUser : User
    {
        [Required(ErrorMessage = "Confirm Password is required")]
        [StringLength(16, ErrorMessage = "Confirm Password must be between 5 and 15 Characters", MinimumLength = 5)]
        [DataType(DataType.Password)]
        [Compare("password", ErrorMessage = "Passwords do not Match")]
        public string ConfirmPassword { get; set; }
    }
}