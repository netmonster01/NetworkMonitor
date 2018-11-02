using System;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.DependencyInjection;
using NetworkMonitorApi.Core;
using NetworkMonitorApi.Data;
using NetworkMonitorApi.Models;
using static NetworkMonitorApi.CustomEnums;

namespace NetworkMonitorApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Produces("application/json")]
    [Consumes("application/json", "application/json-patch+json", "multipart/form-data")]
    public class FileUploadController : ControllerBase
    {
        private readonly IServiceProvider _serviceProvider;
        private readonly ILoggerRepository _loggerRepository;
        private readonly IUsersRepository _userRepository;
        private readonly ApplicationDbContext _db;
        private readonly IConverter<ApplicationUser, User> _mapper;
        private readonly UserManager<ApplicationUser> _userManager;

        public FileUploadController(IServiceProvider serviceProvider)
        {
            _serviceProvider = serviceProvider;
            _loggerRepository = _serviceProvider.GetRequiredService<ILoggerRepository>();
            _db = _serviceProvider.GetRequiredService<ApplicationDbContext>();
            _serviceProvider.GetRequiredService<UserManager<ApplicationUser>>();
            _mapper = _serviceProvider.GetRequiredService<IConverter<ApplicationUser, User>>();
            _userManager = _serviceProvider.GetRequiredService<UserManager<ApplicationUser>>();
            _userRepository = _serviceProvider.GetRequiredService<IUsersRepository>();
        }

        [HttpPost]
        public async Task<IActionResult> CreateProfileImage([FromBody] string userName)
        {
            if (string.IsNullOrEmpty(userName))
            {
                return StatusCode(500, "userName required.");
            }
            bool didSave = false;
            var file = Request.Form.Files[0];
            var user = _userManager.Users.Where(c=>c.UserName == userName).FirstOrDefault();

            if(user == null)
            {
                return StatusCode(500, "user not found");
            }

            // Convert.FromBase64String(user.AvatarImageBas64);

            //BlogImage image = new BlogImage
            //{
            //    Title = file.FileName.Replace(" ", "-")
            //};
          
            // var blogsRepo = _serviceProvider.GetRequiredService<IBlog>();
            try
            {
                using (var memoryStream = new MemoryStream())
                {
                    await file.CopyToAsync(memoryStream);
                    user.AvatarImage = memoryStream.ToString();
                    await _userRepository.UpdateProfileAsync(user);
                    _loggerRepository.Write(LogType.Info, "Added user Image");
                    didSave = true;
                }
            }
            catch (Exception ex)
            {
                _loggerRepository.Write(ex);
            }
            //blogsRepo.

            return Ok(didSave);
        }
    }
}