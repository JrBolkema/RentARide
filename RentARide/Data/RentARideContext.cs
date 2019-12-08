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
            public DbSet<Models.Employees> Employees { get; set; }
            public DbSet<Models.Reservations> Reservations { get; set; }
            public DbSet<Models.Locations> Locations { get; set; }
    }
	}


