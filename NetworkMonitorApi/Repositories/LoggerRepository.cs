using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.DependencyInjection;
using NetworkMonitorApi.Core;
using NetworkMonitorApi.Data;
using NetworkMonitorApi.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.CompilerServices;
using System.Threading.Tasks;
using static NetworkMonitorApi.CustomEnums;

namespace NetworkMonitorApi.Repositories
{
    public class LoggerRepository : ILoggerRepository
    {
        private IServiceProvider _serviceProvider;
        private ApplicationDbContext _applicationDbContext;
        private UserManager<ApplicationUser> _userManager;
        private readonly IHttpContextAccessor _accessor;

        public LoggerRepository(IServiceProvider serviceProvider, IHttpContextAccessor accessor)
        {
            _serviceProvider = serviceProvider;
            _applicationDbContext = _serviceProvider.GetRequiredService<ApplicationDbContext>();
            _userManager = _serviceProvider.GetRequiredService<UserManager<ApplicationUser>>();
            _accessor = accessor;
        }
        public void Write(Log log)
        {
            log.UserId = _accessor.HttpContext.User?.Identity?.Name;
            _applicationDbContext.Logs.Add(log);
            _applicationDbContext.SaveChangesAsync();
        }


        public void Write(Exception ex, [CallerMemberName] string memberName = "", [CallerFilePath] string sourceFilePath = "", [CallerLineNumber] int sourceLineNumber = 0)
        {
            Log log = new Log
            {
                DateCreated = DateTime.Now,
                UserId = _accessor.HttpContext.User?.Identity?.Name,
                Source = string.Format("Source:{0} LineNumber:{1}", sourceFilePath, sourceLineNumber),
                LogType = CustomEnums.LogType.Error,
                Message = ex.Message
            };

            _applicationDbContext.Logs.Add(log);
            _applicationDbContext.SaveChangesAsync();
        }

        public void Write(LogType type, string message, [CallerMemberName] string memberName = "", [CallerFilePath] string sourceFilePath = "", [CallerLineNumber] int sourceLineNumber = 0)
        {
            Log log = new Log
            {
                DateCreated = DateTime.Now,
                UserId = _accessor.HttpContext.User?.Identity?.Name,
                Source = string.Format("Source:{0} LineNumber:{1}", sourceFilePath, sourceLineNumber),
                LogType = type,
                Message = message
            };

            _applicationDbContext.Logs.Add(log);
            _applicationDbContext.SaveChangesAsync();
        }
    }
}
