using System.Collections.Generic;
using System.Data;
using MySql.Data.MySqlClient;
using Microsoft.Extensions.Options;
using ECommerce.Models;
using Dapper;
using System.Linq;
namespace ECommerce.Factories {
    public class ProductFactory : IFactory<Product>{
        private readonly IOptions<MySqlOptions> MySqlConfig;
        public ProductFactory(IOptions<MySqlOptions> config)
        {
            MySqlConfig = config;
        }
        internal IDbConnection Connection {
            get {
                return new MySqlConnection(MySqlConfig.Value.ConnectionString);
            }
        }
        public List<Product> GetAllProducts() {
            using(IDbConnection dbConnection = Connection)
            {
                using(IDbCommand command = dbConnection.CreateCommand())
                {
                    string query = "SELECT * FROM Products";
                    dbConnection.Open();
                    return dbConnection.Query<Product>(query).ToList();
                }
            }
        }
        public string AddProduct(Product Product){
            using (IDbConnection dbConnection = Connection)
            {
                string query = $"INSERT INTO Products (name, description, image, quantity) VALUES (@name,@description,@image, @quantity)";
                dbConnection.Open();
                try
                {
                    dbConnection.Execute(query, Product);
                    return "Product added to database";
                }
                catch (MySqlException)
                {
                    return "Product already in database";
                }

            }
        }
        public List<OrderDetail> GetOrders() {
            using(IDbConnection dbConnection = Connection)
            {
                using(IDbCommand command = dbConnection.CreateCommand())
                {
                    string query = $"SELECT products.name, users.username, orders.created_at, orders.quantity FROM Products LEFT OUTER JOIN orders ON Products.idproducts = orders.Products_idproducts right outer Join users on users.idusers = orders.users_idusers where idorders > 0";
                    dbConnection.Open();
                    return dbConnection.Query<OrderDetail>(query).ToList();
                }
            }
        }
        public void AddOrder(Order Order){
            using (IDbConnection dbConnection = Connection){
                string query = $"INSERT INTO orders (products_idproducts, users_idusers, quantity, created_at) VALUES (@products_idproducts, @users_idusers, @quantity, @created_at)";
                dbConnection.Execute(query, Order);
                query = $"UPDATE products SET quantity = quantity - @quantity WHERE idproducts = @products_idproducts";
                dbConnection.Execute(query,Order);
            }
        }
    }
}