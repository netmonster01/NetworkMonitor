using NetworkMonitorApi.Models;
using System;
using System.Collections.Generic;
using static NetworkMonitorApi.CustomEnums;

namespace NetworkMonitorApi.Core
{
    public interface ILoggerRepository
    {
        int ErrorLogCount();
        List<Log> GetLogs();
        void Write(Log log);
        void Write(Exception ex, [System.Runtime.CompilerServices.CallerMemberName] string memberName = "",
        [System.Runtime.CompilerServices.CallerFilePath] string sourceFilePath = "",
        [System.Runtime.CompilerServices.CallerLineNumber] int sourceLineNumber = 0);

        void Write(LogType type, string message, [System.Runtime.CompilerServices.CallerMemberName] string memberName = "",
        [System.Runtime.CompilerServices.CallerFilePath] string sourceFilePath = "",
        [System.Runtime.CompilerServices.CallerLineNumber] int sourceLineNumber = 0);
    }
}
