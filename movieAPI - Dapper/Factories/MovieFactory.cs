using System.Collections.Generic;
using System.Data;
using MySql.Data.MySqlClient;
using Microsoft.Extensions.Options;
using movieAPI.Models;
using Dapper;
using System.Linq;
namespace movieAPI.Factories {
    public class MovieFactory : IFactory<Movie>{
        private readonly IOptions<MySqlOptions> MySqlConfig;
        public MovieFactory(IOptions<MySqlOptions> config)
        {
            MySqlConfig = config;
        }
        internal IDbConnection Connection {
            get {
                return new MySqlConnection(MySqlConfig.Value.ConnectionString);
            }
        }
        public List<Movie> GetFavMovies(int userID) {
            using(IDbConnection dbConnection = Connection)
            {
                using(IDbCommand command = dbConnection.CreateCommand())
                {
                    string query = $"SELECT movies.idmovies, movies.title, movies.rating, movies.released, movies.poster FROM movies LEFT OUTER JOIN favorites ON movies.idmovies = favorites.movies_idmovies where favorites.users_idusers = {userID}";
                    dbConnection.Open();
                    return dbConnection.Query<Movie>(query).ToList();
                }
            }
        }
        public List<Movie> GetAllMovies() {
            using(IDbConnection dbConnection = Connection)
            {
                using(IDbCommand command = dbConnection.CreateCommand())
                {
                    string query = "SELECT * FROM movies";
                    dbConnection.Open();
                    return dbConnection.Query<Movie>(query).ToList();
                }
            }
        }
        public string AddMovie(Movie Movie){
            using (IDbConnection dbConnection = Connection)
            {
                string query = $"INSERT INTO movies (title, rating, released, poster) VALUES (@title,@rating,@released,@poster)";
                dbConnection.Open();
                try
                {
                    dbConnection.Execute(query, Movie);
                    return "Movie added to database";
                }
                catch (MySqlException)
                {
                    return "Movie already in database";
                }

            }
        }
        public void FavoriteMovie(int movieID,int userID){
            using (IDbConnection dbConnection = Connection){
                string query = $"SELECT * FROM favorites WHERE movies_idmovies = '{movieID}' and users_idusers = '{userID}'";
                if (dbConnection.Query<Movie>(query).ToList().Count == 0)
                {
                    query = $"INSERT INTO favorites (movies_idmovies, users_idusers) VALUES ('{movieID}','{userID}')";
                    dbConnection.Execute(query);
                }
            }
        }
        public void UnfavoriteMovie(int movieID,int userID){
            using (IDbConnection dbConnection = Connection){
                string query = $"DELETE FROM favorites WHERE movies_idmovies = '{movieID}' and users_idusers = '{userID}'";
                dbConnection.Execute(query);
            }
        }
    }
}