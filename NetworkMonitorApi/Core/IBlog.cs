using NetworkMonitorApi.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace NetworkMonitorApi.Core
{
    public interface IBlog
    {
        Blog GetBlog(int blogId);
        List<Blog> GetBlogs();
        Post GetPost(int postId);
        List<Post> GetPosts();
        Task<bool> CreatePostAsync(Post post);
        Task<bool> CreateComment(Comment comment);
        Task<bool> CreateBlog(Blog blog);

        bool BlogExists(string title);
    }
}
