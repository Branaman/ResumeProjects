using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Http;
using movieAPI.Models;
using movieAPI.Factories;
namespace movieAPI.Controllers
{
    public class MoviesController : Controller
    {
        private readonly MovieFactory movieFactory;
        private readonly WebRequest _apiConnector;
        public MoviesController(MovieFactory connect, WebRequest connect1)
        {
            movieFactory = connect;
            _apiConnector = connect1;
        }
        // Load Movies Page
        [HttpGet]
        [Route("/movies")]
        public IActionResult Movies()
        {
            if (HttpContext.Session.GetString("loggedIn")=="true")
            {
                ViewBag.userID = HttpContext.Session.GetInt32("userID");
                ViewBag.FavMovies = movieFactory.GetFavMovies((int)HttpContext.Session.GetInt32("userID"));
                ViewBag.AllMovies = movieFactory.GetAllMovies();
                return View();
            }
            return RedirectToAction("Index","Home");
        }
        // Add New Movie
        [HttpPost]
        [Route("/addMovie")]
        public IActionResult AddMovie(string movie)
        {   
            if (HttpContext.Session.GetString("loggedIn")=="true")
            {
                Movie MovieObject;
                string queryTitle = movie;
                _apiConnector.GetMovieDataAsync(queryTitle, MovieResponse => {
                    MovieObject = MovieResponse;
                    if (MovieObject != new Movie())
                    {
                        movieFactory.AddMovie(MovieObject);
                    }
                }).Wait();
            }
            return RedirectToAction("Movies");
        }
        // Favorite a Movie
        [HttpPost]
        [Route("/favorite/{movieID}/{userID}")]
        public IActionResult Favorite(int movieID, int userID)
        {
            if (HttpContext.Session.GetInt32("userID")==userID)
            {
                movieFactory.FavoriteMovie(movieID,userID);
            }     
            return RedirectToAction("Movies");
        }
        // Remove Movie from Favorites
        [HttpPost]
        [Route("/unfavorite/{movieID}/{userID}")]
        public IActionResult unFavorite(int movieID, int userID)
        {
            if (HttpContext.Session.GetInt32("userID")==userID)
            {
                movieFactory.UnfavoriteMovie(movieID,userID);
            }     
            return RedirectToAction("Movies");
        }
    }
}
