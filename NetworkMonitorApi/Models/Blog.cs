﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace NetworkMonitorApi.Models
{
    public class Blog
    {
        public int BlogId { get; set; }
        public string Title { get; set; }
        public string Url { get; set; }

        public string UserId { get; set; }
        public DateTime DateCreated{get;set;}
        public DateTime DateModified { get; set; }
        public ICollection<Post> Posts { get; set; }
    }
}
