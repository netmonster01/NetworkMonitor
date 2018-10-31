using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace NetworkMonitorApi.Models
{
    public class Setting
    {
        [Key]
        public int SettingId { get; set; }
        
        public string Key  { get; set; }
       
        public string Value { get; set; }
    }
}
