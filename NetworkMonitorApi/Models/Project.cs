using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace NetworkMonitorApi.Models
{
    public class Project
    {
        [Key]
        public int ProjectId { get; set; }
        public string Title{ get; set; }
        public int Content { get; set; }
        public Guid ThumbnailId { get; set; }
        [NotMapped]
        public string ThumbnailImage { get; set; }
    }
}
