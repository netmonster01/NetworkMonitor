using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace NetworkMonitorApi.Models
{
    public class ImageLibrary
    {
        [Key]
        public int ImageId { get; set; }
        public string Title { get; set; }
        public Alias Alias { get; set; }
        public byte[] Image { get; set; }
    }
}
