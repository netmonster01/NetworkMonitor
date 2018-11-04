using System;
using System.Collections.Generic;
using System.IO;
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
    public class BlogsController : ControllerBase
    {
        private readonly IBlog _blogRepository;
     

        public BlogsController(IBlog blogRepository)
        {
            _blogRepository = blogRepository;
        }

        // GET: api/Blogs
        [HttpGet]
        public IEnumerable<Blog> GetBlogs()
        {
            return _blogRepository.GetBlogs();
        }

        [HttpGet]
        [Route("Posts")]
        public IActionResult GetPosts()
        {
            var posts = _blogRepository.GetPosts();

            return Ok(posts);
        }

        [HttpGet]
        [Route("LatestPost")]
        public IActionResult GetLatestPosts()
        {
            var lastPost = _blogRepository.GetLatestPost();

            return Ok(lastPost);
        }

        [HttpPost]
        [Route("Post")]
        public async Task<IActionResult> CreatePostAsync(Post post)
        {
            var posts = await _blogRepository.CreatePostAsync(post);

            return Ok(posts);
        }

        [HttpPost]
        [Route("Comment")]
        public async Task<IActionResult> CreateCommentAsync(Comment comment)
        {
            var posts = await _blogRepository.CreateCommentAsync(comment);

            return Ok(posts);
        }

        // GET: api/Blogs/5
        [HttpGet("{id}")]
        public IActionResult GetBlog([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var blog =  _blogRepository.GetBlog(id);

            if (blog == null)
            {
                return NotFound();
            }

            return Ok(blog);
        }

        //// PUT: api/Blogs/5
        //[HttpPut("{id}")]
        //public async Task<IActionResult> PutBlog([FromRoute] int id, [FromBody] Blog blog)
        //{
        //    bool results = false;
        //    if (!ModelState.IsValid)
        //    {
        //        return BadRequest(ModelState);
        //    }

        //    if (id != blog.BlogId)
        //    {
        //        return BadRequest();
        //    }
        //    try
        //    {
        //        results = await _blogRepository.CreateBlog(blog);
        //        return Ok(results);
        //    }
        //    catch (Exception)
        //    {
        //        return NoContent();
        //    }
           
        //}

        // POST: api/Blogs
        [HttpPost]
        public async Task<IActionResult> PostBlog([FromBody] Blog blog)
        {
            bool results = false;
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            try
            {
                if(!BlogExists(blog.Title))
                {
                    results = await _blogRepository.CreateBlog(blog);
                }
               
                return Ok(results);
            }
            catch (Exception)
            {
                return NoContent();
            }
        }

        //// DELETE: api/Blogs/5
        //[HttpDelete("{id}")]
        //public async Task<IActionResult> DeleteBlog([FromRoute] int id)
        //{
        //    if (!ModelState.IsValid)
        //    {
        //        return BadRequest(ModelState);
        //    }

        //    var blog = await _context.Blogs.FindAsync(id);
        //    if (blog == null)
        //    {
        //        return NotFound();
        //    }

        //    _context.Blogs.Remove(blog);
        //    await _context.SaveChangesAsync();

        //    return Ok(blog);
        //}

        [HttpPost("UploadFiles")]
        public async Task<IActionResult> Post([FromBody]IFormFile file)
        {
            long size = file.Length;

            // full path to file in temp location
            var filePath = Path.GetTempFileName();

            //foreach (var formFile in files)
            //{
                if (file.Length > 0)
                {
                    using (var stream = new FileStream(filePath, FileMode.Create))
                    {
                        await file.CopyToAsync(stream);
                    }
                }
           // }

            // process uploaded files
            // Don't rely on or trust the FileName property without validation.

            return Ok(new { size, filePath });
        }


        private bool BlogExists(string title)
        {
            return _blogRepository.BlogExists(title);
        }
    }
}