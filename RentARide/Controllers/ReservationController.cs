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
                // location pickup time drop time
                
                var outputParamUpdate = new SqlParameter("@JSON", System.Data.SqlDbType.VarChar, 100000)
                {
                    Direction = System.Data.ParameterDirection.Output
                };
                string ReservationList = context.Database.ExecuteSqlCommand("Exec dbo.listReservations @JSON OUT", outputParamUpdate, returnParam).ToString();
                return outputParamUpdate.Value.ToString();
            }
        }

    }
}
