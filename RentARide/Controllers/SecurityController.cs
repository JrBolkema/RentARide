using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;



namespace RentARide.Controllers
{
    [Route("security")]
    [ApiController]
    public class SecurityController : ControllerBase
    {
		[HttpGet("login")]
		public bool Get(string username, string password)
		{
			if (username == "jon" && password == "1234")
			{
				return true;
			} else {
				return false;
					}
		}
	}
}