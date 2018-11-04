using System;
using System.ComponentModel.DataAnnotations;

namespace NetworkMonitorApi.Models
{
    public class Comment
    {
        [Key]
        public int CommentId { get; set; }
        public int PostId { get; set; }
        public string Message { get; set; }

        public string Userid { get; set; }
        public string UserName { get; set; }
        public DateTime DateCreated { get; set; }
        public DateTime DateModified { get; set; }
        public int Likes { get; set; }
    }
}
