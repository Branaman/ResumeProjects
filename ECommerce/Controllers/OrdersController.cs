using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Http;
using ECommerce.Models;
using ECommerce.Factories;
namespace ECommerce.Controllers
{
    public class OrdersController : Controller
    {
        private readonly ProductFactory ProductFactory;
        public OrdersController(ProductFactory connect)
        {
            ProductFactory = connect;
        }
        // Load Orders Page
        [HttpGet]
        [Route("/Orders")]
        public IActionResult Orders()
        {
            if (HttpContext.Session.GetString("loggedIn")=="true")
            {
                ViewBag.loggedIn = true;
                ViewBag.userID = HttpContext.Session.GetInt32("userID");
                ViewBag.AllOrders = ProductFactory.GetOrders();
                ViewBag.errors = "";
                return View();
            }
            return RedirectToAction("Index","Home");
        }
        // Add New Product
        [HttpPost]
        [Route("/addorder")]
        public IActionResult AddOrder(Order Order)
        {   
            if (ModelState.IsValid)
            {
                if (HttpContext.Session.GetString("loggedIn")=="true")
                {
                    ViewBag.loggedIn = true;
                    ProductFactory.AddOrder(Order);
                }
                else
                {
                    ViewBag.loggedIn = false;
                    ModelState.AddModelError("noLogin","You must be logged in to create an error");
                }
            }
            ViewBag.AllOrders = ProductFactory.GetOrders();
            ViewBag.errors = ModelState.Values;
            return View("Orders");
        }
    }
}
