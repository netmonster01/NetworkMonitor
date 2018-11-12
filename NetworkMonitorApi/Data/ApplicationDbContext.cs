using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using NetworkMonitorApi.Models;
using System;
using static NetworkMonitorApi.CustomEnums;

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

            // converter for base64 to byte[]
            ValueConverter<string, byte[]> imageConverter = new ValueConverter<string, byte[]>(
                                    v => Convert.FromBase64String(v),
                                    v => Convert.ToBase64String(v));

            builder
                .Entity<ApplicationUser>()
                .Property(e => e.AvatarImage)
                .HasConversion(imageConverter);

            builder
                .Entity<Project>()
                .Property(e => e.ThumbnailImage)
                .HasConversion(imageConverter);


           EnumToStringConverter<LogType> logTypeConverter = new EnumToStringConverter<LogType>();

           builder
                .Entity<Log>()
                .Property(e => e.LogType)
                .HasConversion(logTypeConverter);

        }
        //builder.Entity<Setting>().HasAlternateKey(u => u.Key);
        // Customize the ASP.NET Core Identity model and override the defaults if needed.
        // For example, you can rename the ASP.NET Core Identity table names and more.
        // Add your customizations after calling base.OnModelCreating(builder);

        public DbSet<SpeedTestResults> SpeedTestResults { get; set; }
        public DbSet<Blog> Blogs { get; set; }
        public DbSet<Post> Posts { get; set; }

        public DbSet<Comment> Comments { get; set; }

        public DbSet<ImageLibrary> ImageLibrary { get; set; }
        public DbSet<Alias> Aliases { get; set; }

        public DbSet<Log> Logs { get; set; }

        public DbSet<Setting> Settings { get; set; }

        public DbSet<Vote> Votes { get; set; }

        public DbSet<Project> Projects { get; set; }
    }
}
