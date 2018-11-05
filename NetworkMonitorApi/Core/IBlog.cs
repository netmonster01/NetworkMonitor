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
        Post GetLatestPost();
        List<Post> GetPosts();
        Task<bool> CreatePostAsync(Post post);
        Task<bool> CreateCommentAsync(Comment comment);
        Task<bool> CreateBlog(Blog blog);

        Task<bool> CreateBlogImageAsync(BlogImage blogImage);
        bool BlogExists(string title);

    }
}
