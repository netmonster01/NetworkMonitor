using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace NetworkMonitorApi.Models
{
    public class Vote
    {
        [Key]
        public int Id { get; set; }
        public int PostId { get; set; }
        public int UserVote { get; set; }
        public string UserId{ get; set; }
    }
}
