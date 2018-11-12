using NetworkMonitorApi.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace NetworkMonitorApi.Core
{
    public interface IProjectRepository
    {
        List<Project> GetProjects();
        Project GetProject(int projectID);
        Project GetProject(string projectName);
        Task<bool> AddProjectAsync(Project project);
    }
}
