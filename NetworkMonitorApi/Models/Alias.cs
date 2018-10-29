using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace NetworkMonitorApi.Models
{
    public class Alias
    {
        [Key]
        public int Id { get; set; }
        public string Title { get; set; }
        public string ContentId { get; set; }
        public string Url { get; set; }

    }
}
