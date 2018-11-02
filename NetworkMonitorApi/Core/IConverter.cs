using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace NetworkMonitorApi.Core
{
    public interface IConverter<TSource, TDestination>
    {
        TDestination Convert(TSource source_object);
    }
}
