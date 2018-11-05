using NetworkMonitorApi.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace NetworkMonitorApi.Core
{
    public interface IVoteRepository
    {
        Vote GetVote(Vote vote);
        Vote AddorUpdateVote(Vote vote);
        //Vote UpdateVote(Vote vote);
        bool VoteExists(int postId, string userId);
        bool VoteExists(Vote vote);

        VoteCount GetPostVotes(int postId);
    }
}
