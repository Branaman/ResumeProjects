using System;
using System.Net.Http;
using System.Threading.Tasks;
using System.Collections.Generic;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using Microsoft.Extensions.Options;
using System.Data;
using movieAPI.Models;

namespace movieAPI
{
    public class WebRequest
    {
        private readonly IOptions<MyApiOptions> MyApiConfig;
        public WebRequest(IOptions<MyApiOptions> config)
        {
            MyApiConfig = config;
        }
        internal string ApiKey {
            get {
                return (string)MyApiConfig.Value.ApiKey;
            }
        }
        public async Task GetMovieDataAsync(string MovieTitle, Action<Movie> Callback)
        {
            using (var Client = new HttpClient())
            {
                try
                {
                    Client.BaseAddress = new Uri($"https://api.themoviedb.org/3/search/movie?api_key={ApiKey}&language=en-US&query={MovieTitle}&page=1&include_adult=false");
                    HttpResponseMessage Response = await Client.GetAsync("");
                    Response.EnsureSuccessStatusCode();
                    string StringResponse = await Response.Content.ReadAsStringAsync();                  
                    JObject MovieObject = JsonConvert.DeserializeObject<JObject>(StringResponse);
                    JArray Results = MovieObject["results"].Value<JArray>();
                    JToken FirstMovie = Results.First;
                    DateTime released;
                    if (FirstMovie["release_date"].Equals(""))
                    {
                        released = new DateTime(1800,1,1);
                    }
                    else
                    {
                        released = FirstMovie["release_date"].Value<DateTime>();
                    }
                    Movie MovieData = new Movie
                    {
                        title = FirstMovie["title"].Value<string>(),
                        rating = FirstMovie["vote_average"].Value<float>(),
                        released = released
                    };

                    Callback(MovieData);
                }
                catch (HttpRequestException e)
                {
                    Console.WriteLine($"Request exception: {e.Message}");
                }
            }
        }
    }
}