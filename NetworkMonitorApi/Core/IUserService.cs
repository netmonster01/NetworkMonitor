using NetworkMonitorApi.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace NetworkMonitorApi.Core
{
    public interface IUserService
    {
        Task<User> AuthenticateAsync(string username, string password);
        IEnumerable<User> GetAll();
    }

}
