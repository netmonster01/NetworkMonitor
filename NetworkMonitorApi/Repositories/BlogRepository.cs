﻿using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.DependencyInjection;
using NetworkMonitorApi.Core;
using NetworkMonitorApi.Data;
using NetworkMonitorApi.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;

namespace NetworkMonitorApi.Repositories
{
    public class BlogRepository : IBlog
    {
        private readonly ApplicationDbContext _applicationDbContext;
        private readonly IServiceProvider _serviceProvider;
        private readonly ILoggerRepository _loggerRepository;
        private readonly UserManager<ApplicationUser> _userManager;
        private readonly IHttpContextAccessor _accessor;

        public BlogRepository(IServiceProvider serviceProvider, IHttpContextAccessor accessor)
        {
            _serviceProvider = serviceProvider;
            _applicationDbContext = _serviceProvider.GetRequiredService<ApplicationDbContext>();
            _loggerRepository = _serviceProvider.GetRequiredService<ILoggerRepository>();
            _userManager = _serviceProvider.GetRequiredService<UserManager<ApplicationUser>>();
            _accessor = accessor;
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
                comment.UserName = await GetCurrentUser();
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

            if (_accessor.HttpContext.User.Identity.IsAuthenticated)
            {
                try
                {
                    // var authenticatedUser = _accessor.HttpContext.User.Identity.Name;
                    // get user
                    post.Author = await GetCurrentUser();
                    _applicationDbContext.Posts.Add(post);
                    await _applicationDbContext.SaveChangesAsync();
                    didCreate = true;
                }
                catch (Exception ex)
                {
                    _loggerRepository.Write(ex);
                }
            }

            return didCreate;
        }

        private async Task<string> GetCurrentUser()
        {
            string userName = string.Empty;
            try
            {
                if (_accessor.HttpContext.User.Identity.IsAuthenticated)
                {
                    ClaimsPrincipal currentUser = _accessor.HttpContext.User;

                    var currentUserName = currentUser.FindFirst(ClaimTypes.Name).Value;

                    ApplicationUser user = await _userManager.FindByNameAsync(currentUserName);
                    userName = string.Format("{0} {1}", user.FirstName, user.LastName);
                }
            }
            catch (Exception ex)
            {
                _loggerRepository.Write(ex);
            }
            return userName;
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
        public Post GetLatestPost()
        {
            Post post = new Post();
            try
            {
                post = (from p in _applicationDbContext.Posts
                        join u in _applicationDbContext.Users on p.UserId equals u.Id
                        //join c in _applicationDbContext.Comments on p.PostId equals c.PostId
                        //where p.PostId > 0

                        //(from comment in _applicationDbContext.Comments
                        // where comment.PostId == p.PostId
                        // select (comment)).ToList(),
                        select (new Post
                        {
                            Author = p.Author,
                            Comments = _applicationDbContext.Comments.Where(c => c.PostId == p.PostId).Select(c => c).ToList(),
                            Content = p.Content,
                            DateCreated = p.DateCreated,
                            DateModified = p.DateModified,
                            Likes = p.Likes,
                            PostId = p.PostId,
                            Title = p.Title,
                            UserId = p.UserId,
                            DisLikes = p.DisLikes
                        })).LastOrDefault();
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
                         join u in _applicationDbContext.Users on p.UserId equals u.Id
                         //join c in _applicationDbContext.Comments on p.PostId equals c.PostId
                         //where p.PostId > 0

                         //(from comment in _applicationDbContext.Comments
                         // where comment.PostId == p.PostId
                         // select (comment)).ToList(),
                         select (new Post
                         {
                             Author = p.Author,
                             Comments = _applicationDbContext.Comments.Where(c => c.PostId == p.PostId).Select(c=> c).ToList(),
                             Content = p.Content,
                             DateCreated = p.DateCreated,
                             DateModified = p.DateModified,
                             Likes = p.Likes,
                             PostId = p.PostId,
                             Title = p.Title,
                             UserId = p.UserId,
                             DisLikes = p.DisLikes
                         })).OrderBy(c=> c.DateCreated).ToList();
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

        public async Task<bool> CreateImageAsync(ImageLibrary incomingImage)
        {
            bool didCreate = false;
            try
            {
                _applicationDbContext.ImageLibrary.Add(incomingImage);
                await _applicationDbContext.SaveChangesAsync();
                didCreate = true;
            }
            catch (Exception ex)
            {
                _loggerRepository.Write(ex);
            }

            return didCreate;
        }

        //public bool DeletePost(int postId)
        //{
        //    // delete post and comments
        //    throw new NotImplementedException();
        //}

        public async Task<bool> DeletePost(int postId)
        {
            try
            {
                var post = await _applicationDbContext.Posts.FindAsync(postId);
                // remove comments
                var comments = _applicationDbContext.Comments.Where(c => c.PostId == postId);
                _applicationDbContext.Comments.RemoveRange(comments);
                _applicationDbContext.Posts.Remove(post);
                _applicationDbContext.SaveChanges();
                return true;
            }
            catch (Exception ex)
            {
                _loggerRepository.Write(ex);
                return false;
                    
            }

        }
    }
}
