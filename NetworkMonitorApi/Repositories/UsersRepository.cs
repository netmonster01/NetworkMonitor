using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using NetworkMonitorApi.Core;
using NetworkMonitorApi.Data;
using NetworkMonitorApi.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace NetworkMonitorApi.Repositories
{
    public class UsersRepository : IUsersRepository
    {
        private readonly IServiceProvider _serviceProvider;
        private readonly ApplicationDbContext _dbContext;
        public UsersRepository(IServiceProvider serviceProvider)
        {
            _serviceProvider = serviceProvider;
            _dbContext = serviceProvider.GetRequiredService<ApplicationDbContext>();
        }

        public List<User> GetAllUsersAsync()
        {
            List<User> users = new List<User>();

            try
            {
                var userManager = _serviceProvider.GetRequiredService<UserManager<ApplicationUser>>();
                var roleManager = _serviceProvider.GetRequiredService<RoleManager<IdentityRole>>();

                users = userManager.Users.Select(user => new User
                {
                    Id = user.Id,
                    FirstName = user.FirstName,
                    LastName = user.LastName,
                    UserName = user.UserName,
                    Email = user.Email,
                    Roles = GetRolesByEmail(user.Email)
                }).ToList();

                //users = userManager.Users.Include(u => u.UserRoles).Select(user => new User {
                //    Id = user.Id,
                //    FirstName = user.FirstName,
                //    LastName = user.LastName,
                //    UserName = user.UserName,
                //    Email = user.Email,
                //}).ToList();

                //// loop
             
                //try
                //{
                //    foreach (var user in users)
                //    {

                //        ApplicationUser u = new ApplicationUser { UserName = user.UserName };

                //        var usr = userManager.FindByEmailAsync(user.Email);
                //        //var r = userManager.Users.Select(u=> u.r)
                //        //usr.Rol
                //        //user.Roles = await roleManager.get
                //    }
                //}
                //catch (Exception)
                //{
                //    // empty may not even need this.
                //}
            }
            catch (Exception ex)
            {

            }
            return users;
        }

        private List<string> GetRolesByEmail(string email)
        {
            var roles = (from ep in _dbContext.UserRoles
                         //
                         join r in _dbContext.Roles on ep.RoleId equals r.Id
                         join u in _dbContext.Users on ep.UserId equals u.Id
                         where u.Email == email
                         select (r.Name)
                                      ).ToList();
            return roles;
        }
    }
}
