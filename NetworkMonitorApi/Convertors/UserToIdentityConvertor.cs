using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using NetworkMonitorApi.Core;
using NetworkMonitorApi.Models;

namespace NetworkMonitorApi.Convertors
{
    public class UserToIdentityConvertor : IConverter<User, ApplicationUser>
    {
        public ApplicationUser Convert(User source_object)
        {
            return new ApplicationUser {
                AvatarImage = source_object.AvatarImage,
                Email = source_object.Email,
                FirstName = source_object.FirstName,
                LastName = source_object.LastName,
                Id = source_object.Id,
                Roles = source_object.Roles,
                UserName = source_object.UserName
            };
        }
    }
}
