using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using NetworkMonitorApi.Data;
using NetworkMonitorApi.Models;

namespace NetworkMonitorApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Authorize(Roles = Constants.Roles.Admin)]
    public class SpeedTestResultsController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public SpeedTestResultsController(ApplicationDbContext context)
        {
            _context = context;
        }

        // GET: api/SpeedTestResults
        [HttpGet]
        public IEnumerable<SpeedTestResults> GetSpeedTestResults()
        {
            return _context.SpeedTestResults;
        }

        // GET: api/SpeedTestResults/5
        [HttpGet("{id}")]
        public async Task<IActionResult> GetSpeedTestResults([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var speedTestResults = await _context.SpeedTestResults.FindAsync(id);

            if (speedTestResults == null)
            {
                return NotFound();
            }

            return Ok(speedTestResults);
        }

        // PUT: api/SpeedTestResults/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutSpeedTestResults([FromRoute] int id, [FromBody] SpeedTestResults speedTestResults)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != speedTestResults.Id)
            {
                return BadRequest();
            }

            _context.Entry(speedTestResults).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!SpeedTestResultsExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/SpeedTestResults
        [HttpPost]
        public async Task<IActionResult> PostSpeedTestResults([FromBody] SpeedTestResults speedTestResults)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            _context.SpeedTestResults.Add(speedTestResults);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetSpeedTestResults", new { id = speedTestResults.Id }, speedTestResults);
        }

        // DELETE: api/SpeedTestResults/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteSpeedTestResults([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var speedTestResults = await _context.SpeedTestResults.FindAsync(id);
            if (speedTestResults == null)
            {
                return NotFound();
            }

            _context.SpeedTestResults.Remove(speedTestResults);
            await _context.SaveChangesAsync();

            return Ok(speedTestResults);
        }

        private bool SpeedTestResultsExists(int id)
        {
            return _context.SpeedTestResults.Any(e => e.Id == id);
        }
    }
}