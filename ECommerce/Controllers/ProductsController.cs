using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Http;
using ECommerce.Models;
using ECommerce.Factories;
namespace ECommerce.Controllers
{
    public class ProductsController : Controller
    {
        private readonly ProductFactory ProductFactory;
        public ProductsController(ProductFactory connect)
        {
            ProductFactory = connect;
        }
        // Load Products Page
        [HttpGet]
        [Route("/products")]
        public IActionResult Products()
        {
            if (HttpContext.Session.GetString("loggedIn")=="true")
            {
                ViewBag.loggedIn = true;
                ViewBag.userID = HttpContext.Session.GetInt32("userID");
                // ViewBag.FavProducts = ProductFactory.GetFavProducts((int)HttpContext.Session.GetInt32("userID"));
                ViewBag.AllProducts = ProductFactory.GetAllProducts();
                ViewBag.errors = "";
                return View();
            }
            return RedirectToAction("Index","Home");
        }
        // Add New Product
        [HttpPost]
        [Route("/addproduct")]
        public IActionResult AddProduct(Product Product)
        {   
            if (ModelState.IsValid)
            {
                if (HttpContext.Session.GetString("loggedIn")=="true")
                {
                    ProductFactory.AddProduct(Product);
                }
            }
            ViewBag.errors = ModelState.Values;
            return RedirectToAction("Products");
        }
        // // Favorite a Product
        // [HttpPost]
        // [Route("/favorite/{ProductID}/{userID}")]
        // public IActionResult Favorite(int ProductID, int userID)
        // {
        //     if (HttpContext.Session.GetInt32("userID")==userID)
        //     {
        //         ProductFactory.FavoriteProduct(ProductID,userID);
        //     }     
        //     return RedirectToAction("Products");
        // }
        // // Remove Product from Favorites
        // [HttpPost]
        // [Route("/unfavorite/{ProductID}/{userID}")]
        // public IActionResult unFavorite(int ProductID, int userID)
        // {
        //     if (HttpContext.Session.GetInt32("userID")==userID)
        //     {
        //         ProductFactory.UnfavoriteProduct(ProductID,userID);
        //     }     
        //     return RedirectToAction("Products");
        // }
    }
}
