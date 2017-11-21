using System.IO;
using Microsoft.AspNetCore.Hosting;

namespace ECommerce
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var host = new WebHostBuilder()
                .UseKestrel()
                .UseContentRoot(Directory.GetCurrentDirectory())
                .UseUrls("http://localhost:8147")
                .UseStartup<Startup>()
                .Build();

            host.Run();
        }
    }
}
