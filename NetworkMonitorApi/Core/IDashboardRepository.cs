﻿using NetworkMonitorApi.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace NetworkMonitorApi.Core
{
    public interface IDashboardRepository
    {

        Dashboard GetDashboard();
    }
}
