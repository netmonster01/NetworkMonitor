﻿using NetworkMonitorApi.Core;
using NetworkMonitorApi.Data;
using NetworkMonitorApi.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace NetworkMonitorApi.Repositories
{
    public class ProjectRepository : IProjectRepository
    {

        private readonly ILoggerRepository _loggerRepository;
        private readonly ApplicationDbContext _applicationDbContext;
        public ProjectRepository(ApplicationDbContext applicationDbContext, ILoggerRepository loggerRepository)
        {
            _applicationDbContext = applicationDbContext;
            _loggerRepository = loggerRepository;
        }

        public bool AddProject()
        {
            throw new NotImplementedException();
        }

        public Project GetProject(int projectID)
        {
            throw new NotImplementedException();
        }

        public Project GetProject(string projectName)
        {
            throw new NotImplementedException();
        }

        public List<Project> GetProjects()
        {
            List<Project> projects = new List<Project>();
            try
            {
                projects = _applicationDbContext.Projects.ToList();
            }
            catch (Exception ex)
            {

                _loggerRepository.Write(ex);
            }

            return projects;
        }
    }
}
