using NetworkMonitorApi.Core;
using NetworkMonitorApi.Data;
using NetworkMonitorApi.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace NetworkMonitorApi.Repositories
{
    public class VoteRepository : IVoteRepository
    {

        private readonly ApplicationDbContext _applicationDbContext;
        private readonly ILoggerRepository _loggerRepository;
        public VoteRepository(ApplicationDbContext applicationDbContext, ILoggerRepository loggerRepository) {

            _applicationDbContext = applicationDbContext;
            _loggerRepository = loggerRepository;
        }

        public Vote AddorUpdateVote(Vote incomingVote)
        {
            try
            {
                var post = _applicationDbContext.Posts.Where(p => p.PostId == incomingVote.PostId).FirstOrDefault();
               
                // did user vote on this post? No
                if (!VoteExists(incomingVote.PostId, incomingVote.UserId))
                {
                    if (incomingVote.UserVote == 1)
                    {
                        post.Likes++;

                    }
                    else if (incomingVote.UserVote == -1)
                    {
                        post.Likes--;
                    }

                    // add new vote
                    _applicationDbContext.Votes.Add(incomingVote);
                    

                }
                else
                {
                    // get the user vote.
                    var previousVote = _applicationDbContext.Votes.Where(v => v.UserId == incomingVote.UserId).FirstOrDefault();

                    // check it.
                    if (incomingVote.UserVote > previousVote.UserVote)
                    {
                        post.Likes++;
                        post.DisLikes--;

                    }
                    else if (incomingVote.UserVote < previousVote.UserVote)
                    {
                        post.Likes--;
                        post.DisLikes++;// = post.DisLikes++;
                    }

                    previousVote.UserVote = incomingVote.UserVote;
                    // update vote
                    _applicationDbContext.Update(previousVote);
                }
                // update post
                _applicationDbContext.Update(post);
                _applicationDbContext.SaveChanges();

            }
            catch (Exception ex)
            {
                _loggerRepository.Write(ex);
            }

            return incomingVote;
        }

      

        public VoteCount GetPostVotes(int postId)
        {
            VoteCount count = new VoteCount();

            try
            {
                var post = _applicationDbContext.Posts.Where(p => p.PostId == postId).FirstOrDefault();
                if (post != null)
                {
                    count.DisLikes = post.DisLikes;
                    count.Likes = post.Likes;
                    count.PostId = post.PostId;
                }
            }
            catch (Exception ex)
            {
                _loggerRepository.Write(ex);
            }

            return count;
        }

        public Vote GetVote(Vote vote)
        {
            Vote castedVote = new Vote();
            try
            {
                castedVote = _applicationDbContext.Votes.Where(v => v.PostId == vote.PostId && v.UserId == vote.UserId).FirstOrDefault();
                
            }
            catch (Exception ex)
            {
                _loggerRepository.Write(ex);
            }

            return castedVote;
        }

        public bool VoteExists(Vote vote)
        {
            return VoteExists(vote.PostId, vote.UserId);
        }

        public bool VoteExists(int postId, string userId)
        {
            return _applicationDbContext.Votes.Any(i => i.PostId == postId && i.UserId == userId);
        }
       
    }
}
