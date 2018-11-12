﻿using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using NetworkMonitorApi.Core;
using NetworkMonitorApi.Models;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net;
using System.Text;
using System.Threading.Tasks;
using static NetworkMonitorApi.CustomEnums;

namespace NetworkMonitorApi.Data
{
    public static class SeedData
    {
        private static ApplicationDbContext _context;
        private static UserManager<ApplicationUser> _userManager;

        private static string adminEmail = "admin@netcms.com";
        private static string adminPassword = "P@ssword1";

        private static string testUserEmail = "test@gmail.com";
        private static string testUserPassword = "P@ssword1";

        private static RoleManager<IdentityRole> _roleManager;
        private static IRolesRepository _rolesRepository;
        private static IUsersRepository _usersRepository;
        private static ILoggerRepository _logRepository;


        public static string AdminGuid { get; set; }

        public static async Task InitializeAsync(IServiceProvider serviceProvider)
        {

            _context = serviceProvider.GetRequiredService<ApplicationDbContext>();
            _userManager = serviceProvider.GetRequiredService<UserManager<ApplicationUser>>();
            _roleManager = serviceProvider.GetRequiredService<RoleManager<IdentityRole>>();
            _rolesRepository = serviceProvider.GetRequiredService<IRolesRepository>();
            _usersRepository = serviceProvider.GetRequiredService<IUsersRepository>();
            _logRepository = serviceProvider.GetRequiredService<ILoggerRepository>();

            _context.Database.EnsureCreated();

            // 1. setup roles.
            await SeedRolesAsync();

            // 2 setup users.
            SeedUsers();

            // setup blog .
            await SeedBlogAsync();

            // setup default post.
            await SeedPostAsync();

            // setup comments on the defualt post.
            await SeedCommentsAsync();
        }

        public static async Task SeedBlogAsync()
        {

            try
            {
                Blog blog = _context.Blogs.Where(b => b.BlogId == 1).FirstOrDefault();

                if (blog == null)
                {
                    blog = new Blog
                    {
                        BlogId = 1,
                        Title = "Main Blog",
                        Url = "/blogs",
                        UserId = _userManager.FindByNameAsync(adminEmail).Result.Id,
                    };
                    _context.Blogs.Add(blog);
                    await _context.SaveChangesAsync();
                    _logRepository.Write(LogType.Info, "Seeded Blog.");

                }
            }
            catch (Exception ex)
            {
                _logRepository.Write(ex);
            }
        }

        public static async Task SeedPostAsync()
        {
            try
            {
                if (!_context.Posts.Any())
                {
                    Post post = new Post
                    {
                        BlogId = 1,
                        Title = "My First Blog Post.",
                        UserId = _userManager.FindByNameAsync(adminEmail).Result.Id,
                        Author = "Admin Admin",
                        Likes = 10,
                        DisLikes = 1,
                        DateCreated = DateTime.Now,
                        Content = @"<b>hello world</b><br><pre data-lang='HTML'><code>function cool(x) {return x + 1;}</code></pre><br><pre><code highlight>public class hot(string degrees){}</code></pre>"
                    };
                    _context.Posts.Add(post);
                    await _context.SaveChangesAsync();
                    //_logRepository.Write(LogType.Info, "Seeded Post.");
                }
            }
            catch (Exception ex)
            {
                throw;
            }

        }


        public static async Task SeedCommentsAsync()
        {
            try
            {
                Post post = _context.Posts.FirstOrDefault();
                post.Comments = _context.Comments.Where(c => c.PostId == post.PostId).ToList();
                if (post != null && (post.Comments == null || !post.Comments.Any()))
                {
                    List<Comment> comments = new List<Comment>();
                    Random rnd = new Random();
                    for (int i = 0; i < 5; i++)
                    {
                        comments.Add(new Comment
                        {
                            DateCreated = DateTime.Now,
                            Message = LoremIpsum(),
                            PostId = post.PostId,
                            UserId = _userManager.FindByNameAsync(testUserEmail).Result.Id,
                            UserName = testUserEmail,
                            Likes = rnd.Next(1, 15),
                            DisLikes = rnd.Next(1, 5)
                        });
                    }
                    _context.Comments.AddRange(comments.ToArray());
                    await _context.SaveChangesAsync();
                    //_logRepository.Write(LogType.Debug, "Created Comments");
                }
            }
            catch (Exception ex)
            {
                throw;
            }

        }

        public static void SeedUsers()
        {

            if (_userManager.FindByNameAsync(adminEmail).Result == null)
            {
                ApplicationUser user = new ApplicationUser();
                user.UserName = adminEmail;
                user.Email = adminEmail;
                user.FirstName = "Admin";
                user.LastName = "Admin";

                IdentityResult result = _userManager.CreateAsync
                (user, adminPassword).Result;

                if (result.Succeeded)
                {

                    _userManager.AddToRoleAsync(user,
                                        RoleType.Admin.ToString()).Wait();

                    AdminGuid = _userManager.FindByNameAsync(adminEmail).Result.Id;
                }
            }

            if (_userManager.FindByNameAsync(testUserEmail).Result == null)
            {
                ApplicationUser user = new ApplicationUser();
                user.UserName = testUserEmail;
                user.Email = testUserEmail;
                user.FirstName = "John";
                user.LastName = "Smith";

                IdentityResult result = _userManager.CreateAsync
                (user, testUserPassword).Result;

                if (result.Succeeded)
                {
                    _userManager.AddToRoleAsync(user,
                                        RoleType.Reader.ToString()).Wait();
                }
            }
        }

        /// <summary>
        /// Seed role from RoleType enum
        /// </summary>
        /// <returns></returns>
        public static async Task SeedRolesAsync()
        {
            string[] roleNames = Enum.GetNames(typeof(RoleType));

            IdentityResult roleResult;

            foreach (var roleName in roleNames)
            {
                // creating the roles and seeding them to the database
                var roleExist = await _roleManager.RoleExistsAsync(roleName);
                if (!roleExist)
                {
                    roleResult = await _roleManager.CreateAsync(new IdentityRole { Name = roleName });
                }
            }
        }

        /// <summary>
        /// Seed Projects
        /// </summary>
        /// <returns></returns>
        public static void SeedProjects()
        {

        }


        private static string LoremIpsum()
        {
            string HTML = null;
            WebRequest request = WebRequest.Create("http://lipsum.com/feed/html");
            request.Credentials = CredentialCache.DefaultCredentials;
            HttpWebResponse response = (HttpWebResponse)request.GetResponse();
            Stream dataStream = response.GetResponseStream();
            StreamReader reader = new StreamReader(dataStream);
            HTML = reader.ReadToEnd(); //se citeste codul HTMl

            //searching for Lorem Ipsum
            HTML = HTML.Remove(0, HTML.IndexOf("<div id=\"lipsum\">"));
            HTML = HTML.Remove(HTML.IndexOf("</div>"));
            HTML = HTML
                 .Replace("<div id=\"lipsum\">", "")
                 .Replace("</div>", "")
                 .Replace("<p>", "")
                 .Replace("</p>", "");

            reader.Close();
            dataStream.Close();
            response.Close();
            return HTML;
        }
    }
}
