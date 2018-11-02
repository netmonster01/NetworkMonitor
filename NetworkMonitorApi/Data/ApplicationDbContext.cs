using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using NetworkMonitorApi.Models;
using System;

namespace NetworkMonitorApi.Data
{

    public class ApplicationDbContext : IdentityDbContext<ApplicationUser>
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
            : base(options)
        {
        }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);

            var converter = new  ValueConverter<string, byte[]>(
                                    v => Convert.FromBase64String(v),
                                    v => Convert.ToBase64String(v));

            builder
                .Entity<ApplicationUser>()
                .Property(e => e.AvatarImage)
                .HasConversion(converter);
            //builder.Entity<Setting>().HasAlternateKey(u => u.Key);
            // Customize the ASP.NET Core Identity model and override the defaults if needed.
            // For example, you can rename the ASP.NET Core Identity table names and more.
            // Add your customizations after calling base.OnModelCreating(builder);
        }

        public DbSet<SpeedTestResults> SpeedTestResults { get; set; }
        public DbSet<Blog> Blogs { get; set; }
        public DbSet<Post> Posts { get; set; }

        public DbSet<Comment> Comments { get; set; }

        public DbSet<BlogImage> BlogImages { get; set; }
        public DbSet<Alias> Aliases { get; set; }

        public DbSet<Log> Logs { get; set; }

        public DbSet<Setting> Settings { get; set; }
    }
}
