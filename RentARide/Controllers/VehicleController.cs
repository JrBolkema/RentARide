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
		[HttpGet]
		public ActionResult<IEnumerable<Vehicle>> Get()
		{
			List<Vehicle> VehicleList = new List<Vehicle>
			{
				//new Vehicle("Toyota","Yaris",2010,7500.00m),
				new Vehicle{
					Make = "Toyota",
					Model = "Yaris",
					ModelYear = 2010,
					PurchasePrice = 7500.00m}
				//new Vehicle("Nissan","XTerra",2010,10000.00m),
				//new Vehicle("Infiniti","Fx35",2012,15000.25m)
			};
			return VehicleList;
		}

		// GET vehicle/get/{id}
		[HttpGet("{id}")]
		public ActionResult<string> Get(int id)
		{
			return "Value";
		}

		// POST vehicle
		[HttpPost]
		// explicitly declares the name of the route
		// would be .../vehicle/addvehicle instead of .../vehicle
		// [Route("AddVehicle")]
		public void Post([FromBody] Vehicle vehicle)
		{

			using (var context = new RentARideContext(
					serviceProvider.GetRequiredService<
						DbContextOptions<RentARideContext>>())
					)
			{
				var outputParam = new SqlParameter("@VehicleID", vehicle.rarVehicleID)
				{
					Direction = System.Data.ParameterDirection.Output
				};

				var vehicleId = context.Database.ExecuteSqlCommand("Exec dbo.AddVehicle @VIN, @Make, @Model, @ModelYear, @PurchasePrice, @VehicleType, @VehicleID OUT",
					new SqlParameter("@VIN", vehicle.VIN),
					new SqlParameter("@Make", vehicle.Make),
					new SqlParameter("@Model", vehicle.Model),
					new SqlParameter("@ModelYear", vehicle.ModelYear),
					new SqlParameter("@PurchasePrice", vehicle.PurchasePrice),
					new SqlParameter("@VehicleType", vehicle.VehicleType),
					outputParam);
				// Logs the ID of the newly created vehicle
				Console.WriteLine(outputParam.Value);
				
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
            using (var context = new RentARideContext(
                    serviceProvider.GetRequiredService<
                        DbContextOptions<RentARideContext>>())
                    )
            {
                
                var outputParam = new SqlParameter("@outputMessage", id)
                {
                    Direction = System.Data.ParameterDirection.Output
                };
                var vehicleId = context.Database.ExecuteSqlCommand("Exec dbo.AddVehicle @rarVehicleID",
                    new SqlParameter("@rarVehicleID", id),
                    outputParam);

                Console.WriteLine(outputParam.Value);
            }
        }
	}
}
