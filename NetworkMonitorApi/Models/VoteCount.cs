using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace NetworkMonitorApi.Models
{
    public class VoteCount
    {
        public int PostId { get; set; }
        public int Likes { get; set; }
        public int DisLikes { get; set; }
    }
}
