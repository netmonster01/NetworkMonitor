﻿using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.DependencyInjection;
using NetworkMonitorApi.Core;
using NetworkMonitorApi.Data;
using NetworkMonitorApi.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using static NetworkMonitorApi.CustomEnums;

namespace NetworkMonitorApi.Repositories
{
    public class UsersRepository : IUsersRepository
    {
        private readonly IServiceProvider _serviceProvider;
        private readonly ApplicationDbContext _dbContext;
        private readonly ILoggerRepository _loggerRepository;
        public UsersRepository(IServiceProvider serviceProvider)
        {
            _serviceProvider = serviceProvider;
            _dbContext = serviceProvider.GetRequiredService<ApplicationDbContext>();
            _loggerRepository = _serviceProvider.GetRequiredService<ILoggerRepository>();
        }

        public List<User> GetAllUsersAsync()
        {
            List<User> users = new List<User>();
            _loggerRepository.Write(LogType.Info, string.Format("GetAllUsersAsync called:"));
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
                    Roles = GetRolesByEmail(user.Email),
                    IsAdmin = IsAdmin(user.Email)

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
                _loggerRepository.Write(ex);
            }
            return users;
        }

        private bool IsAdmin(string email)
        {
            var roles = GetRolesByEmail(email);
            if(roles.Any() && roles.Contains("Admin"))
            {
                return true;
            }
            return false;
            //return GetRolesByEmail(email) != null ?  
        }

        public async Task<bool> UpdateProfileAsync(User user)
        {
            if(user == null || user.UserName == null)
            {
                throw new Exception("user is required");

            }

            bool didCreate = false;
            try
            {
                var profile = _dbContext.Users.Where(c => c.UserName == user.UserName).FirstOrDefault();
                if ( profile != null)
                {
                    ApplicationUser userToUpdate = new ApplicationUser
                    {
                        Email = profile.Email,
                        FirstName = profile.FirstName,
                        LastName = profile.LastName,
                        UserName = profile.UserName,
                        AvatarImage = profile.AvatarImage
                    };
                    _dbContext.Users.Update(userToUpdate);
                    await _dbContext.SaveChangesAsync();
                    didCreate = true;
                }
            }
            catch (Exception ex)
            {
                _loggerRepository.Write(ex);
            }

            return didCreate;
        }

        private List<string> GetRolesByEmail(string email)
        {
            List<string> roles = new List<string>();
            try
            {
                roles = (from ur in _dbContext.UserRoles
                         join r in _dbContext.Roles on ur.RoleId equals r.Id
                         join u in _dbContext.Users on ur.UserId equals u.Id
                         where u.Email == email
                         select (r.Name)).ToList();
            }
            catch (Exception)
            {

            }
            return roles;
        }
    }
}
