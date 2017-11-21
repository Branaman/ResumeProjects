using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Http;
using ExcitedEmu.Models;
using ExcitedEmu.Factories;
namespace ExcitedEmu.Controllers
{
    public class ActivityController : Controller
    {
        private readonly ActivityFactory ActivityFactory;
        public ActivityController(ActivityFactory connect)
        {
            ActivityFactory = connect;
        }
        // Load Objects Page
        [HttpGet]
        [Route("/Home")]
        public IActionResult Home()
        {
            if (HttpContext.Session.GetString("loggedIn")=="true")
            {
                ViewBag.loggedIn = true;
                ViewBag.userID = HttpContext.Session.GetInt32("userID");
                ViewBag.AllActivities = ActivityFactory.GetActivities();
                ViewBag.JoinedActivities = ActivityFactory.MyActivities((int)HttpContext.Session.GetInt32("userID"));
                ViewBag.errors = "";
                return View();
            }
            return RedirectToAction("Index","Home");
        }
        [HttpGet]
        [Route("/New")]
        public IActionResult Create()
        {
            if (HttpContext.Session.GetString("loggedIn")=="true")
            {
                ViewBag.loggedIn = true;
                ViewBag.userID = HttpContext.Session.GetInt32("userID");
                ViewBag.errors = "";
                return View();
            }
            return RedirectToAction("Index","Home");
        }
        [HttpGet]
        [Route("/activity/{activityID}")]
        public IActionResult Show(int activityID)
        {
            if (HttpContext.Session.GetString("loggedIn")=="true")
            {
                ViewBag.loggedIn = true;
                ViewBag.userID = HttpContext.Session.GetInt32("userID");
                ViewBag.errors = "";
                ViewBag.Activity = ActivityFactory.GetActivity(activityID);
                ViewBag.Participants = ActivityFactory.GetParticipants(activityID);
                return View();
            }
            return RedirectToAction("Index","Home");
        }
        [HttpPost]
        [Route("/leaveactivity/{activityID}/{userID}")]
        public IActionResult Leave(int activityID, int userID)
        {
            if (HttpContext.Session.GetInt32("userID")==userID)
            {
                ActivityFactory.LeaveActivity(activityID,userID);
            }     
            return RedirectToAction("Home");
        }
        [HttpPost]
        [Route("/joinactivity/{activityID}/{userID}")]
        public IActionResult Join(int activityID, int userID)
        {
            if (HttpContext.Session.GetInt32("userID")==userID)
            {
                ActivityFactory.JoinActivity(activityID,userID);
            }     
            return RedirectToAction("Home");
        }
        [HttpPost]
        [Route("/deleteactivity/{activityID}/{userID}")]
        public IActionResult Delete(int activityID, int userID)
        {
            if (HttpContext.Session.GetInt32("userID")==userID)
            {
                ActivityFactory.DeleteActivity(activityID);
            }     
            return RedirectToAction("Home");
        }
        // Add New Object
        [HttpPost]
        [Route("/addactivity")]
        public IActionResult AddActivity(Activity Activity)
        {   
            if (ModelState.IsValid)
            {
                if (HttpContext.Session.GetString("loggedIn")=="true")
                {
                    int IDresult = ActivityFactory.AddActivity(Activity,(int)HttpContext.Session.GetInt32("userID"));                  
                    return RedirectToAction("Show", new {activityID = IDresult});
                }
            }
            ViewBag.errors = ModelState.Values;
            return RedirectToAction("Create");
        }
    }
}
