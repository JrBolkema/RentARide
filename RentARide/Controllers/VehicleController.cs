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
using Newtonsoft.Json;

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
		public ActionResult<string> Get()
		{
            
            using (var context = new RentARideContext(
                    serviceProvider.GetRequiredService<
                        DbContextOptions<RentARideContext>>())
                    )
            {
                SqlParameter returnParam = new SqlParameter();
                returnParam.Direction = System.Data.ParameterDirection.ReturnValue;
                
                var outputParamUpdate = new SqlParameter("@JSON", System.Data.SqlDbType.VarChar,100000)
                {
                    Direction = System.Data.ParameterDirection.Output
                };
                string VehicleList = context.Database.ExecuteSqlCommand("Exec dbo.listVehicles @JSON OUT",outputParamUpdate,returnParam).ToString();
                return outputParamUpdate.Value.ToString();
            }    
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
				var outputParam = new SqlParameter("@vehicleId", vehicle.vehicleId)
				{
					Direction = System.Data.ParameterDirection.Output
				};

				var vehicleId = context.Database.ExecuteSqlCommand("Exec dbo.AddVehicle @vinNumber, @make, @model, @vehicleYear, @dailyRate, @vehicleType, @currentLocation, @fleetStatus, @vehicleId OUT",
					new SqlParameter("@vinNumber", vehicle.vinNumber),
					new SqlParameter("@make", vehicle.make),
					new SqlParameter("@model", vehicle.model),
					new SqlParameter("@vehicleYear", vehicle.vehicleYear),
					new SqlParameter("@dailyRate", vehicle.dailyRate),
					new SqlParameter("@vehicleType", vehicle.vehicleType),
                    new SqlParameter("@currentLocation", vehicle.currentLocation),
                    new SqlParameter("@fleetStatus", vehicle.fleetStatus),
					outputParam);
				// Logs the ID of the newly created vehicle
				Console.WriteLine(outputParam.Value);

			}
		}

		// PUT vehicle/put/{id}
		[HttpPut("{id}")]
		public void Put(int id, [FromBody] Vehicle vehicle)
		{
			using (var context = new RentARideContext(
                    serviceProvider.GetRequiredService<
                        DbContextOptions<RentARideContext>>())
                    )
            {

                var outputParamUpdate = new SqlParameter("@outputMessage", System.Data.SqlDbType.Bit)
                {
                    Direction = System.Data.ParameterDirection.Output
                };
                var vehicleId = context.Database.ExecuteSqlCommand("Exec dbo.updateVehicle @vehicleId, @vinNumber, @make, @model, @vehicleYear, @dailyRate, @vehicleType, @currentLocation, @fleetStatus, @outputMessage OUT",
                    new SqlParameter("@vehicleId", id),
                    new SqlParameter("@vinNumber", vehicle.vinNumber),
                    new SqlParameter("@make", vehicle.make),
                    new SqlParameter("@model", vehicle.model),
                    new SqlParameter("@vehicleYear", vehicle.vehicleYear),
					new SqlParameter("@dailyRate", vehicle.dailyRate),
                    new SqlParameter("@vehicleType", vehicle.vehicleType),
					new SqlParameter("@currentLocation", vehicle.currentLocation),
                    new SqlParameter("@fleetStatus", vehicle.fleetStatus),
                    outputParamUpdate);

                Console.WriteLine(outputParamUpdate.Value);
            }
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

                var outputParam = new SqlParameter("@outputMessage", System.Data.SqlDbType.Bit)
                {
                    Direction = System.Data.ParameterDirection.Output
                };
                var vehicleId = context.Database.ExecuteSqlCommand("Exec dbo.deleteVehicle @vehicleId, @outputMessage OUT",
                    new SqlParameter("@vehicleId", id),
                    outputParam);

                Console.WriteLine(outputParam.Value);
            }
        }
	}
}
