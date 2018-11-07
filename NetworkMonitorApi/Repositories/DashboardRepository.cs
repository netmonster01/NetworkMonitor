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
    public class DashboardRepository : IDashboardRepository
    {
        private readonly ApplicationDbContext _applicationDbContext;
        private readonly IServiceProvider _serviceProvider;
        private readonly ILoggerRepository _loggerRepository;

        public DashboardRepository(IServiceProvider serviceProvider)
        {
            _serviceProvider = serviceProvider;
            _applicationDbContext = _serviceProvider.GetRequiredService<ApplicationDbContext>();
            _loggerRepository = _serviceProvider.GetRequiredService<ILoggerRepository>();
        }

        public Dashboard GetDashboard()
        {
            Dashboard dashboard = new Dashboard();
            try
            {
                // get errors count
                dashboard.Errors = _applicationDbContext.Logs.Where(e => e.LogType == LogType.Error && e.DateCreated >= DateTime.Now.AddHours(-24)).Count();

                // get users count
                dashboard.Users = _applicationDbContext.Users.Count();

                // get lastest post comments count
                var lastPost = _applicationDbContext.Posts.LastOrDefault();
                var commentCount = _applicationDbContext.Comments.Where(c => c.PostId == lastPost.PostId).Select(c => c).Count();
                dashboard.Comments = commentCount; //.Comments.Count();

                //get posts count
                dashboard.Posts = _applicationDbContext.Posts.Count();
            }
            catch (Exception ex )
            {
                _loggerRepository.Write(ex);
            }

            return dashboard;
        }
    }
}
