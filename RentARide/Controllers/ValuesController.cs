using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using RentARide.Model;

namespace RentARide.Controllers
{
	[Route("Vehicle")]
	[ApiController]
	public class ValuesController : ControllerBase
	{
		// GET vehicle
		[HttpGet]
		public ActionResult<IEnumerable<Vehicle>> Get()
		{
			List<Vehicle> VehicleList = new List<Vehicle>
			{
				new Vehicle("Toyota","Yaris",2010,"White",7500.00),
				new Vehicle("Nissan","XTerra",2010,"Silver",10000.00),
				new Vehicle("Infiniti","Fx35",2012,"Gray",15000.25)
			};
			return VehicleList;
		}

		// GET vehicle/get/{id}
		[HttpGet("{id}")]
		public ActionResult<string> Get(int id)
		{
			return "value";
		}

		// POST vehicle
		[HttpPost]
		public void Post([FromBody] string value)
		{
		}

		// PUT vehicle/put/{id}
		[HttpPut("{id}")]
		public void Put(int id, [FromBody] string value)
		{
		}

		// DELETE vehicle/put/{id}
		[HttpDelete("{id}")]
		public void Delete(int id)
		{
		}
	}
}
