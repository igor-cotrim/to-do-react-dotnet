using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using src.Models;

namespace src.Controllers
{
  [ApiController]
  [Route("api/[controller]")]
  public class ActivityController : ControllerBase
  {
    public IEnumerable<Activity> Activities = new List<Activity>() {
        new Activity(1),
        new Activity(2),
        new Activity(3)
      };

    [HttpGet]
    public IEnumerable<Activity> Get()
    {
      return Activities;
    }
    [HttpGet("{id}")]
    public Activity Get(int id)
    {
      return Activities.FirstOrDefault(act => act.Id == id);
    }
    [HttpPost]
    public IEnumerable<Activity> Post(Activity activity)
    {
      return Activities.Append<Activity>(activity);
    }
    [HttpPut("{id}")]
    public Activity Put(int id, Activity activity)
    {
      activity.Id = activity.Id + 1;
      return activity;
    }
    [HttpDelete("{id}")]
    public string Delete(int id)
    {
      return "Meu primeiro método Delete";
    }
  }
}