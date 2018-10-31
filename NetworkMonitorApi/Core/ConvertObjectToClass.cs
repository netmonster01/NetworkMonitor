using NetworkMonitorApi.Models;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Threading.Tasks;

namespace NetworkMonitorApi.Core
{
    public static class ConvertObjectToClass
    {
        public static T ObjectToClass<T>(this object obj) where T : class, new()
        {
            // loop to get properties.
            string json = JsonConvert.SerializeObject(obj);
            //json.Remove(json.Length);
            //json.Remove(1);
            User o = JsonConvert.DeserializeObject<User>(json);
            Type t = obj.GetType();
            //JObject json = JObject.Parse(JasonText);
            //Type c = data.GetType();
            T Target = new T();
            Type c = typeof(T);
            foreach (PropertyInfo info in t.GetProperties())
            {
            }
            var incomingObject = t.GetProperties().OrderBy(x => x.Name).Select(x => x.Name).ToList();
            var compareObjectType = c.GetProperties().OrderBy(x => x.Name).Select(x => x.Name).ToList();


            foreach (PropertyInfo propertyInfo in t.GetProperties())
            {
                if (propertyInfo.CanRead)
                {

                }
            }
            return (Target);
            //return (T)Convert.ChangeType(value, typeof(T));
        }
    }
}
