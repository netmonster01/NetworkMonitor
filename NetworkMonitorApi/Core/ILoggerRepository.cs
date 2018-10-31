using NetworkMonitorApi.Models;
using System;
using static NetworkMonitorApi.CustomEnums;

namespace NetworkMonitorApi.Core
{
    public interface ILoggerRepository
    {

        void Write(Log log);
        void Write(Exception ex, [System.Runtime.CompilerServices.CallerMemberName] string memberName = "",
        [System.Runtime.CompilerServices.CallerFilePath] string sourceFilePath = "",
        [System.Runtime.CompilerServices.CallerLineNumber] int sourceLineNumber = 0);

        void Write(LogType type, string message, [System.Runtime.CompilerServices.CallerMemberName] string memberName = "",
        [System.Runtime.CompilerServices.CallerFilePath] string sourceFilePath = "",
        [System.Runtime.CompilerServices.CallerLineNumber] int sourceLineNumber = 0);
    }
}
