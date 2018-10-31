using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace NetworkMonitorApi
{
    public class CustomEnums
    {
        public enum ContentType
        {
            Blog = 1,
            Article = 2,
        }

        public enum LogType
        {
            Error,
            Warning,
            Debug,
            Info,
            Pass,
            Fail
        }
    }
}
