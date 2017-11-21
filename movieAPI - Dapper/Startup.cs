using System;
using Microsoft.AspNetCore.Builder;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Configuration;
using Microsoft.AspNetCore.Hosting;
using movieAPI.Factories;

namespace movieAPI
{
    public class Startup
    {
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddScoped<MovieFactory>();
            services.AddScoped<UserFactory>();
            services.AddScoped<WebRequest>();
            services.AddMvc();
            services.AddSession();
            services.Configure<MySqlOptions>(Configuration.GetSection("DBInfo"));
            services.Configure<MyApiOptions>(Configuration.GetSection("ApiInfo"));
        }
        public IConfiguration Configuration { get; private set; }
        public Startup(IHostingEnvironment env)
        {
            var builder = new ConfigurationBuilder()
            .SetBasePath(env.ContentRootPath)
            .AddJsonFile("appsettings.json", optional: true, reloadOnChange: true)
            .AddEnvironmentVariables();
            Configuration = builder.Build();
        }
        public void Configure(IApplicationBuilder app, ILoggerFactory loggerFactory)
        {
            loggerFactory.AddConsole();
            app.UseDeveloperExceptionPage();
            app.UseStaticFiles();
            app.UseSession();
            app.UseMvc();
        }
    }
}
