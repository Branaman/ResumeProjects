using System.Collections.Generic;
using System.Data;
using MySql.Data.MySqlClient;
using Microsoft.Extensions.Options;
using ECommerce.Models;
using Dapper;
using System.Linq;
namespace ECommerce.Factories {
    public class UserFactory : IFactory<User>{
        private readonly IOptions<MySqlOptions> MySqlConfig;
        public UserFactory(IOptions<MySqlOptions> config)
        {
            MySqlConfig = config;
        }
        internal IDbConnection Connection {
            get {
                return new MySqlConnection(MySqlConfig.Value.ConnectionString);
            }
        }
        public LoginUser GetUser(LoginUser User) {
                using(IDbConnection dbConnection = Connection)
                {
                    string query = $"SELECT * FROM users WHERE username = @username";
                    using(IDbCommand command = dbConnection.CreateCommand())
                    {
                        dbConnection.Open();
                        return dbConnection.Query<LoginUser>(query,User).FirstOrDefault();
                    }
                }
        }
        public string AddUser(RegisterUser User){
            using (IDbConnection dbConnection = Connection)
            {
                string query = $"INSERT INTO users (username, email, password, created_at) VALUES (@username,@email,@password, @created_at)";
                dbConnection.Open();
                try
                {
                    dbConnection.Execute(query, User);
                    return "User added to database";
                }
                catch (MySqlException)
                {
                    return "User already exists";
                }

            }
        }
    }
}