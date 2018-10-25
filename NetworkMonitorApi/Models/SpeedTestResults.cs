using System.ComponentModel.DataAnnotations.Schema;

namespace NetworkMonitorApi.Models
{
    public class SpeedTestResults
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }
        public string Date { get; set; }
        public decimal Upload { get; set; }
        public decimal Download { get; set; }
        public decimal Ping { get; set; }
    }
}