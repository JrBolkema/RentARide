using Microsoft.EntityFrameworkCore;


namespace RentARide.Data
{
	public class RentARideContext :DbContext
	{

			public  RentARideContext(
				DbContextOptions< RentARideContext> options)
				: base(options)
			{
			}

			public DbSet<Models.Vehicle> Vehicle { get; set; }
		}
	}


