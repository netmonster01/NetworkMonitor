using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace NetworkMonitorApi
{
    public static class Constants
    {

        public class Roles
        {
            public const string Admin = "Admin";
            public const string Reader = "Reader";
            public const string Author = "Author";

        }

        public class App
        {
            public const string ClientAppPath = "ClientApp/dist";
            public const string ClientApp = "ClientApp";
        }
    }
}
