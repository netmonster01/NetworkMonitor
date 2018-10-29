using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.DependencyInjection;
using NetworkMonitorApi.Core;
using NetworkMonitorApi.Models;
using System;
using System.Linq;
using System.Threading.Tasks;

namespace NetworkMonitorApi.Data
{
    public static class SeedData
    {

        public static async Task InitializeAsync(IServiceProvider serviceProvider)
        {
            string adminEmail = "admin@netcms.com";
            string adminPassword = "P@ssword1";

            var context = serviceProvider.GetRequiredService<ApplicationDbContext>();
            var userManager = serviceProvider.GetRequiredService<UserManager<ApplicationUser>>();
            var roleManager = serviceProvider.GetRequiredService<RoleManager<IdentityRole>>();
            var rolesRepository = serviceProvider.GetRequiredService<IRolesRepository>();
            var usersRepository = serviceProvider.GetRequiredService<IUsersRepository>();

            ApplicationUser adminUser = new ApplicationUser();
            // 1. check if admin user exists.
            try
            {
                adminUser = userManager.Users.SingleOrDefault(r => r.Email == adminEmail);

                // if not create the admin user.
                if (adminUser == null)
                {
                    ApplicationUser admin = new ApplicationUser
                    {
                        FirstName = "admin",
                        LastName = "admin",
                        Email = adminEmail,
                        UserName = adminEmail
                    };

                   var result = await userManager.CreateAsync(admin, adminPassword);

                    if(!result.Succeeded)
                    {
                        throw new Exception(string.Format("failed with error {0}. ", result.Errors.FirstOrDefault()));

                    }
                }
            }
            catch (Exception ex)
            {

                throw;
            }

            // 2 check if roles are created 
            context.Database.EnsureCreated();
            if (!context.Roles.Any())
            {
                // if not create them.
              bool didCreateRoles =  await rolesRepository.CreateInitialRoles();
            }

            // 3. check if admin user has admin role.
            var adminUserWithRoles =  usersRepository.GetAllUsersAsync().FirstOrDefault(c=>c.Email == adminEmail);
            if (adminUserWithRoles != null && !adminUserWithRoles.Roles.Any())
            {
                bool didCreate = await rolesRepository.AssignRole(adminUserWithRoles.Email, "Admin");
            }
        }
    }
}
