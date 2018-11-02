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
        private readonly ILoggerRepository _loggerRepository;

        public BlogRepository(IServiceProvider serviceProvider)
        {
            _serviceProvider = serviceProvider;
            _applicationDbContext = _serviceProvider.GetRequiredService<ApplicationDbContext>();
            _loggerRepository = _serviceProvider.GetRequiredService<ILoggerRepository>();
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
            catch (Exception ex)
            {
                _loggerRepository.Write(ex);
            }

            return didCreate;
        }

        public async Task<bool> CreateCommentAsync(Comment comment)
        {
            bool didCreate = false;
            try
            {
                _applicationDbContext.Comments.Add(comment);
                await _applicationDbContext.SaveChangesAsync();
                didCreate = true;
            }
            catch (Exception ex)
            {
                _loggerRepository.Write(ex);
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
            catch (Exception ex)
            {
                _loggerRepository.Write(ex);
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
            catch (Exception ex)
            {
                _loggerRepository.Write(ex);
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
                catch (Exception ex)
                {
                    _loggerRepository.Write(ex);
                }

                return roles;
            }
            catch (Exception ex)
            {
                _loggerRepository.Write(ex);
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
            catch (Exception ex)
            {
                _loggerRepository.Write(ex);
            }

            return post;
        }

        public List<Post> GetPosts()
        {
            List<Post> posts = new List<Post>();
            try
            {
                posts = (from p in _applicationDbContext.Posts
                               //join u in _applicationDbContext.Users on p.UserId equals u.Id
                               //join c in _applicationDbContext.Comments on p.PostId equals c.PostId
                               //where p.PostId > 0
                               select ( new Post {
                                   Author = p.Author,
                                   Comments = (from comment in _applicationDbContext.Comments
                                               where comment.PostId == p.PostId 
                                               select(comment)).ToList(),
                                   Content = p.Content,
                                   DateCreated = p.DateCreated,
                                   DateModified = p.DateModified,
                                   Likes = p.Likes,
                                   PostId = p.PostId,
                                   Title = p.Title,
                                   UserId = p.UserId
                               })).ToList();
            }
            catch (Exception ex)
            {
                _loggerRepository.Write(ex);
            }

            return posts;
        }

        public bool BlogExists(string title)
        {
            return _applicationDbContext.Blogs.Any(e => e.Title == title);
        }

        public async Task<bool> CreateBlogImageAsync(BlogImage blogImage)
        {
            bool didCreate = false;
            try
            {
                _applicationDbContext.BlogImages.Add(blogImage);
                await _applicationDbContext.SaveChangesAsync();
                didCreate = true;
            }
            catch (Exception ex)
            {
                _loggerRepository.Write(ex);
            }

            return didCreate;
        }
    }
}
