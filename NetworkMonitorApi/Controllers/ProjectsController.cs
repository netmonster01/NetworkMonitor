using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using NetworkMonitorApi.Core;
using NetworkMonitorApi.Data;
using NetworkMonitorApi.Models;

namespace NetworkMonitorApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProjectsController : ControllerBase
    {
        private readonly IProjectRepository _projectRepository;

        public ProjectsController(IProjectRepository projectRepository)
        {
            _projectRepository = projectRepository;
        }

        // GET: api/Projects
        [HttpGet]
        public IEnumerable<Project> GetProjects()
        {
            return _projectRepository.GetProjects();
        }

        //// GET: api/Projects/5
        //[HttpGet("{id}")]
        //public async Task<IActionResult> GetProject([FromRoute] int id)
        //{
        //    if (!ModelState.IsValid)
        //    {
        //        return BadRequest(ModelState);
        //    }

        //    var project = await _context.Projects.FindAsync(id);

        //    if (project == null)
        //    {
        //        return NotFound();
        //    }

        //    return Ok(project);
        //}

        // POST: api/Projects
        [HttpPost]
        public async Task<IActionResult> PostProject([FromBody] Project project)
        {
            bool didCreate = false;
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            didCreate = await _projectRepository.AddProjectAsync(project);

            return Ok(didCreate);
        }

        //// DELETE: api/Projects/5
        //[HttpDelete("{id}")]
        //public async Task<IActionResult> DeleteProject([FromRoute] int id)
        //{
        //    if (!ModelState.IsValid)
        //    {
        //        return BadRequest(ModelState);
        //    }

        //    var project = await _context.Projects.FindAsync(id);
        //    if (project == null)
        //    {
        //        return NotFound();
        //    }

        //    _context.Projects.Remove(project);
        //    await _context.SaveChangesAsync();

        //    return Ok(project);
        //}
    }
}