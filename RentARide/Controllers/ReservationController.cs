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
    [Route("Reservation")]
    [ApiController]
    public class ReservationController : ControllerBase
    {
        IServiceProvider serviceProvider;
        public ReservationController(IServiceProvider serviceProvider)
        {
            this.serviceProvider = serviceProvider;
        }
        [HttpGet("{confirmationCode}")]
        public ActionResult<string> Get(string confirmationCode)
        {
            using (var context = new RentARideContext(
                    serviceProvider.GetRequiredService<
                        DbContextOptions<RentARideContext>>())
                    )
            {
                SqlParameter returnParam = new SqlParameter();
                returnParam.Direction = System.Data.ParameterDirection.ReturnValue;
                // location pickup time drop time
                
                var outputParamUpdate = new SqlParameter("@JSON", System.Data.SqlDbType.VarChar, 100000)
                {
                    Direction = System.Data.ParameterDirection.Output
                };
                string ReservationList = context.Database.ExecuteSqlCommand("Exec dbo.getReservation @confirmationCode, @JSON OUT",
                    new SqlParameter("@confirmationCode", confirmationCode),
                    outputParamUpdate, returnParam).ToString();
                return outputParamUpdate.Value.ToString();
            }
        }
        [HttpPost]
        public ActionResult<string> Post([FromBody] Reservations reservations)
        {
            using (var context = new RentARideContext(
                    serviceProvider.GetRequiredService<
                        DbContextOptions<RentARideContext>>())
                    )
            {
                SqlParameter returnParam = new SqlParameter();
                returnParam.Direction = System.Data.ParameterDirection.ReturnValue;
                // location pickup time drop time

                var outputParamUpdate = new SqlParameter("@confirmCode", System.Data.SqlDbType.VarChar, 100000)
                {
                    Direction = System.Data.ParameterDirection.Output
                };
                string ReservationList = context.Database.ExecuteSqlCommand("Exec dbo.createReservation @customerName, @vehicleId, @pickupLocationId, @signedCheckOut, @signedCheckIn, @creditCard,@securityCode, @confirmCode OUT",
                    new SqlParameter("@customerName", reservations.customerName),
                    new SqlParameter("@vehicleId", reservations.vehicleId),
                    new SqlParameter("@pickupLocationId", reservations.pickupLocationId),
                    new SqlParameter("@signedCheckOut", reservations.signedCheckOut),
                    new SqlParameter("@signedCheckIn", reservations.signedCheckIn),
                    new SqlParameter("@creditCard", reservations.creditCard),                    
                    new SqlParameter("@securityCode", reservations.securityCode),                    
                    outputParamUpdate, returnParam).ToString();
                return outputParamUpdate.Value.ToString();
            }
        }

    }
}
