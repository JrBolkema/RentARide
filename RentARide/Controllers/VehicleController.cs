using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using RentARide.Models;
using RentARide.Data;
using System.Data.SqlClient;

namespace RentARide.Controllers
{
	[Route("Vehicle")]
	[ApiController]
	public class VehicleController : ControllerBase
	{
		IServiceProvider serviceProvider;
		public VehicleController(IServiceProvider serviceProvider)
		{
			this.serviceProvider = serviceProvider;
		}
		// GET vehicle
		//[HttpGet]
		//public ActionResult<IEnumerable<Vehicle>> Get()
		//{
		//	List<Vehicle> VehicleList = new List<Vehicle>
		//	{
		//		new Vehicle("Toyota","Yaris",2010,7500.00m),
		//		new Vehicle("Nissan","XTerra",2010,10000.00m),
		//		new Vehicle("Infiniti","Fx35",2012,15000.25m)
		//	};
		//	return VehicleList;
		//}

		// GET vehicle/get/{id}
		[HttpGet("{id}")]
		public ActionResult<string> Get(int id)
		{
			try
			{
				var conn = new SqlConnection("Server=tcp:cis447.database.windows.net,1433;Initial Catalog=RentARide;Persist Security Info=True;User ID=cisadmin;Password=Password1;MultipleActiveResultSets=True;Encrypt=True;TrustServerCertificate=True;Connection Timeout=30;");
				conn.Open();
				conn.Close();
			}
			catch (Exception e)
			{
				return e.ToString();
			}
			return "true";

		}

		// POST vehicle
		[HttpPost]
		public void Post()
		{

			using (var context = new RentARideContext(
					serviceProvider.GetRequiredService<
						DbContextOptions<RentARideContext>>())
					)
			{
				context.Database.ExecuteSqlCommand("Exec dbo.AddVehicle @VIN, @Make, @Model, @ModelYear, @PurchasePrice, @VehicleType, @VehicleID",
					new SqlParameter("@VIN", "AAAAAAAAAAAAAAAAA"),
					new SqlParameter("@Make", "Toyota"),
					new SqlParameter("@Model", "Rav4"),
					new SqlParameter("@ModelYear", 2010),
					new SqlParameter("@PurchasePrice", 10000.00m),
					new SqlParameter("@VehicleType", "Car"),
					new SqlParameter("@VehicleID", -1));
					//new SqlParameter("@VehicleID",)
			}
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
