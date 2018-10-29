using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using NetworkMonitorApi.Models;
using Microsoft.Extensions.Configuration;
using NetworkMonitorApi.Core;
using NetworkMonitorApi.Dtos;

namespace NetworkMonitorApi.Repositories
{
    public class RoleRepository : IRolesRepository
    {
  
        private readonly IServiceProvider _serviceProvider;

        public RoleRepository(IConfiguration configuration, IServiceProvider serviceProvider)
        {
            _serviceProvider = serviceProvider;
        }

        public async Task<bool> AssignRole(string userName, string roleName)
        {
            bool bDidAdd = false;
            var userManager = _serviceProvider.GetRequiredService<UserManager<ApplicationUser>>();

            var user = await userManager.FindByEmailAsync(userName);
           
            var  status = await userManager.AddToRoleAsync(user, roleName);
            if (status.Succeeded)
            {
                bDidAdd = true;
            }

            return bDidAdd;
        }

        public async Task<bool> CreateInitialRoles()
        {
            bool didCreateRoles = false;
            // adding custom roles
            var roleManager = _serviceProvider.GetRequiredService<RoleManager<IdentityRole>>();
            var userManager = _serviceProvider.GetRequiredService<UserManager<ApplicationUser>>();
            string[] roleNames = { "Admin", "Reader", "Author" };
            IdentityResult roleResult;

            foreach (var roleName in roleNames)
            {
                // creating the roles and seeding them to the database
                var roleExist = await roleManager.RoleExistsAsync(roleName);
                if (!roleExist)
                {
                    roleResult = await roleManager.CreateAsync(new IdentityRole { Name = roleName});
                }
                didCreateRoles = true;
            }
            return didCreateRoles;
            // check if primary user has access.
            //var user = await userManager.FindByEmailAsync("test@gmail.com");
        }

        public List<RoleDto> GetAllRoles()
        {
            List<RoleDto> roles = new List<RoleDto>();

            try
            {
                var roleManager = _serviceProvider.GetRequiredService<RoleManager<IdentityRole>>();
                roles = roleManager.Roles.Select(role => new RoleDto
                {
                    Id = role.Id,
                    Name = role.Name
                }).ToList();
            }
            catch (Exception ex)
            {

            }
            return roles;
        }

        public async Task<List<string>> GetUserRolesAsync(string userName)
        {
            List<string> userRoles = new List<string>();
            ApplicationUser user = new ApplicationUser {
                UserName = userName
            };

            try
            {
                var userManager = _serviceProvider.GetRequiredService<UserManager<ApplicationUser>>();
                var roles = await userManager.GetRolesAsync(user);
                if (roles.Any())
                {
                    userRoles = roles.Select(x => x).ToList();
                }
            }
            catch (Exception ex)
            {
                return null;
            }

            return userRoles;
        }
    }
}
