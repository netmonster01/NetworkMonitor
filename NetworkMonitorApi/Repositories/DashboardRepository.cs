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
                // get errors
                dashboard.Errors = _applicationDbContext.Logs.Where(e => e.LogType == LogType.Error && e.DateCreated >= DateTime.Now.AddHours(-24)).Count();

                // get users
                dashboard.Users = _applicationDbContext.Users.Count();

                // get comments
                dashboard.Comments = _applicationDbContext.Posts.LastOrDefault().Comments.Count();
            }
            catch (Exception ex )
            {
                _loggerRepository.Write(ex);
            }

            return dashboard;
        }
    }
}
