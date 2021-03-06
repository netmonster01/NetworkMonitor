﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.DependencyInjection;
using NetworkMonitorApi.Core;
using NetworkMonitorApi.Data;
using NetworkMonitorApi.Models;

namespace NetworkMonitorApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LogsController : ControllerBase
    {

        private readonly ApplicationDbContext _context;
        private readonly IServiceProvider _serviceProvider;
        private readonly ILoggerRepository _loggerRepository;
        
        public LogsController(IServiceProvider serviceProvider)
        {
            _serviceProvider = serviceProvider;
           _context = _serviceProvider.GetRequiredService<ApplicationDbContext>();
            _loggerRepository = _serviceProvider.GetRequiredService<ILoggerRepository>();
        }

        // GET: api/Logs
        [HttpGet]
        public IEnumerable<Log> GetLogs()
        {
            return _loggerRepository.GetLogs();
        }


        // GET: api/Logs
        [HttpPost]
        public IActionResult AddLog(Log log)
        {
            log.DateCreated = DateTime.Now;
            _loggerRepository.Write(log);
            return Ok();  
        }

        // GET: api/Logs/5
        [HttpGet("{id}")]
        public async Task<IActionResult> GetLog([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var log = await _context.Logs.FindAsync(id);

            if (log == null)
            {
                return NotFound();
            }

            return Ok(log);
        }


        // GET: api/Logs/5
        [HttpGet("{numberOfDays}")]
        public IActionResult GetLogByDays([FromRoute] int numberOfDays)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var logs =  _context.Logs.Where(c => c.DateCreated <= DateTime.Now.AddDays(-numberOfDays)).ToList();

            if (logs == null)
            {
                return NotFound();
            }

            return Ok(logs);
        }


        // DELETE: api/Logs/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteLog([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var log = await _context.Logs.FindAsync(id);
            if (log == null)
            {
                return NotFound();
            }

            _context.Logs.Remove(log);
            await _context.SaveChangesAsync();

            return Ok(log);
        }


        [HttpGet]
        [Route("ErrorLogCount")]
        public async Task<IActionResult> GetErrorLogCount()
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            int count = _loggerRepository.ErrorLogCount();

            return Ok(count);
        }
        private bool LogExists(int id)
        {
            return _context.Logs.Any(e => e.LogId == id);
        }
    }
}