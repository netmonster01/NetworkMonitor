using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using NetworkMonitorApi.Core;
using NetworkMonitorApi.Dtos;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace NetworkMonitorApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    //[Authorize(Roles = Constants.Roles.Admin)]
    public class RoleController : Controller
    {
        private IRolesRepository _rolesRepository;

        public RoleController(IRolesRepository rolesRepository)
        {
            _rolesRepository = rolesRepository;
        }

        // GET: api/<controller>
        [HttpGet]
        [Route("Roles")]
        public IEnumerable<RoleDto> Get()
        {
            return _rolesRepository.GetAllRoles();
        }

        //// GET api/<controller>/5
        //[HttpGet("{id}")]
        //public string Get(int id)
        //{
        //    return "value";
        //}

        // POST api/<controller>
        [HttpPost]
        [Route("CreateRoles")]
        public void CreateRoles([FromBody]string value)
        {
            _rolesRepository.CreateInitialRoles();
        }


        [HttpPost]
        [Route("AssignRole")]
        public void CreateRoles([FromBody]RoleDto model)
        {
            _rolesRepository.AssignRole(model.UserName, model.Name);
        }

        //// PUT api/<controller>/5
        //[HttpPut("{id}")]
        //public void Put(int id, [FromBody]string value)
        //{
        //}

        //// DELETE api/<controller>/5
        //[HttpDelete("{id}")]
        //public void Delete(int id)
        //{
        //}
    }
}
