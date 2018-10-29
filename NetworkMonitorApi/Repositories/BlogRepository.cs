using Microsoft.Extensions.DependencyInjection;
using NetworkMonitorApi.Core;
using NetworkMonitorApi.Data;
using NetworkMonitorApi.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace NetworkMonitorApi.Repositories
{
    public class BlogRepository : IBlog
    {
        private readonly ApplicationDbContext _applicationDbContext;
        private readonly IServiceProvider _serviceProvider;

        public BlogRepository(IServiceProvider serviceProvider)
        {
            _serviceProvider = serviceProvider;
            _applicationDbContext = _serviceProvider.GetRequiredService<ApplicationDbContext>();

        }
        public async Task<bool> CreateBlog(Blog blog)
        {
            bool didCreate = false;
            try
            {
                _applicationDbContext.Blogs.Add(blog);
                await _applicationDbContext.SaveChangesAsync();
                didCreate = true;
            }
            catch (Exception)
            {

                throw;
            }
            return didCreate;
        }

        public async Task<bool> CreateComment(Comment comment)
        {
            bool didCreate = false;
            try
            {
                _applicationDbContext.Comments.Add(comment);
                await _applicationDbContext.SaveChangesAsync();
                didCreate = true;
            }
            catch (Exception)
            {

                throw;
            }
            return didCreate;
        }

        public async Task<bool> CreatePostAsync(Post post)
        {
            bool didCreate = false;
            try
            {
                _applicationDbContext.Posts.Add(post);
                await _applicationDbContext.SaveChangesAsync();
                didCreate = true;
            }
            catch (Exception)
            {

                throw;
            }
            return didCreate;
        }

        public Blog GetBlog(int blogId)
        {
            Blog blog = new Blog();
            try
            {
                blog = _applicationDbContext.Blogs.FirstOrDefault(x => x.BlogId == blogId);
            }
            catch (Exception)
            {

                throw;
            }
            return blog;
        }

        public List<Blog> GetBlogs()
        {
            List<Blog> blogs = new List<Blog>();
            try
            {
                blogs = _applicationDbContext.Blogs.ToList();
                List<Blog> roles = new List<Blog>();
                try
                {
                    roles = (from b in _applicationDbContext.Blogs
                             join p in _applicationDbContext.Posts on b.BlogId equals p.BlogId
                             join u in _applicationDbContext.Users on p.UserId equals u.Id
                             where b.BlogId > 0
                             select (b)).ToList();
                }
                catch (Exception)
                {

                }
                return roles;
            }
            catch (Exception)
            {

                throw;
            }
            return blogs;
        }

        public Post GetPost(int postId)
        {
            Post post = new Post();
            try
            {
                post = _applicationDbContext.Posts.FirstOrDefault(x => x.PostId == postId);
            }
            catch (Exception)
            {

                throw;
            }
            return post;
        }

        public List<Post> GetPosts()
        {
            List<Post> posts = new List<Post>();
            try
            {
                posts = _applicationDbContext.Posts.ToList();
            }
            catch (Exception)
            {

                throw;
            }
            return posts;
        }
        public bool BlogExists(string title)
        {
            return _applicationDbContext.Blogs.Any(e => e.Title == title);
        }
    }
}
