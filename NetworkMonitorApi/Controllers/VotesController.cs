using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using NetworkMonitorApi.Core;
using NetworkMonitorApi.Data;
using NetworkMonitorApi.Models;

namespace NetworkMonitorApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class VotesController : ControllerBase
    {
        private readonly IVoteRepository _voteRepository;

        public VotesController(IVoteRepository voteRepository)
        {
            _voteRepository = voteRepository;
        }


        // GET: api/Vote
        [HttpPost]
        [Route("MyVote")]
        public IActionResult GetVote([FromBody] Vote vote)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            // Vote checkVote = new Vote { PostId = postId, UserId = userId };
            var castVote = _voteRepository.GetVote(vote);

            //if (castVote == null)
            //{
            //    return NotFound();
            //}

            return Ok(castVote);
        }

        // GET: api/Vote
        [HttpGet]
        [Route("VoteCount/{postID}")]
        public IActionResult GetVoteCounts([FromRoute] int postID)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var postCounts = _voteRepository.GetPostVotes(postID);

            if (postCounts == null)
            {
                return NotFound();
            }

            return Ok(postCounts);
        }

        // PUT: api/Votes/5
        [HttpPut]
        public async Task<IActionResult> PutVote([FromBody] Vote vote)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            //if (id != vote.Id)
            //{
            //    return BadRequest();
            //}

            var updatedVote = _voteRepository.AddorUpdateVote(vote);

            //try
            //{
            //    await _context.SaveChangesAsync();
            //}
            //catch (DbUpdateConcurrencyException)
            //{
            //    if (!VoteExists(id))
            //    {
            //        return NotFound();
            //    }
            //    else
            //    {
            //        throw;
            //    }
            //}

            return Ok(updatedVote);
        }

        // POST: api/Votes
        [HttpPost]
        public async Task<IActionResult> PostVote([FromBody] Vote vote)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            var currentVote = _voteRepository.AddorUpdateVote(vote);
            return Ok(currentVote);
        }

        //// DELETE: api/Votes/5
        //[HttpDelete("{id}")]
        //public async Task<IActionResult> DeleteVote([FromRoute] int id)
        //{
        //    if (!ModelState.IsValid)
        //    {
        //        return BadRequest(ModelState);
        //    }

        //    var vote = await _context.Votes.FindAsync(id);
        //    if (vote == null)
        //    {
        //        return NotFound();
        //    }

        //    _context.Votes.Remove(vote);
        //    await _context.SaveChangesAsync();

        //    return Ok(vote);
        //}
    }
}