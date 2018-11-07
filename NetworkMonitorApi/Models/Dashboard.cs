using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace NetworkMonitorApi.Models
{
    public class Dashboard
    {
        public int Errors { get; set; }

        public int Users { get; set; }

        public int Comments { get; set; }

        public int Posts { get; set; }
    }
}
