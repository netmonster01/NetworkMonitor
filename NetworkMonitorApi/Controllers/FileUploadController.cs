using System;
using System.IO;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.DependencyInjection;
using NetworkMonitorApi.Core;
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

        public FileUploadController(IServiceProvider serviceProvider)
        {
            _serviceProvider = serviceProvider;
            _loggerRepository = _serviceProvider.GetRequiredService<ILoggerRepository>();
        }

        [HttpPost]
        public async Task<IActionResult> AddImage()
        {
            bool didSave = false;
            var file = Request.Form.Files[0];
            BlogImage image = new BlogImage();
            image.Title = file.FileName.Replace(" ", "-");
            var blogsRepo = _serviceProvider.GetRequiredService<IBlog>();
            try
            {
                using (var memoryStream = new MemoryStream())
                {
                    await file.CopyToAsync(memoryStream);
                    image.Image = memoryStream.ToArray();
                    await blogsRepo.CreateBlogImageAsync(image);
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