using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace NetworkMonitorApi.Models
{
    public class User
    {
        public string Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string UserName { get; set; }
        public string Password { get; set; }
        public string Token { get; set; }
        public string Email { get; set; }
        public List<string> Roles { get; set; }

        public bool IsAdmin { get {
                return Roles == null ? false : Roles.Any();// Roles = null?? || Roles.Any();
            } }
    }
}
