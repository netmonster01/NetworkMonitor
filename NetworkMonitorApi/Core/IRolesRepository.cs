using NetworkMonitorApi.Dtos;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace NetworkMonitorApi.Core
{
    public interface IRolesRepository
    {
        Task<bool> CreateInitialRoles();
        List<RoleDto> GetAllRoles();
        Task<bool> AssignRole(string userName, string roleName);
        Task<List<string>> GetUserRolesAsync(string userName);
    }
}
