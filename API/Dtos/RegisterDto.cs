using System.ComponentModel.DataAnnotations;

namespace API.Dtos
{
    public class RegisterDto
    {
        [Required]
        public string DisplayName { get; set; }
        [Required]
        [EmailAddress]
        public string Email { get; set; }
        [Required]
        [RegularExpression("(?=.{8,})(?=.*\\p{Lu}.*\\p{Lu})(?=.*[!@#$&*])(?=.*[0-9])(?=.*\\p{Ll}.*\\p{Ll})", ErrorMessage = "Password must have 1 Uppercase, 1 Lowercase, 1 Number, 1 non alphanumeric and at least 6 characters")]
        public string Password { get; set; }
    }
}

// strong password 