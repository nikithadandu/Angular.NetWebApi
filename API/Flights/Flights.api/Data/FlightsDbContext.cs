using Flights.API.Models;
using Microsoft.EntityFrameworkCore;

namespace Flights.API.Data
{
    public class FlightsDbContext : DbContext
    {
        public FlightsDbContext(DbContextOptions options) : base(options)
        {
        }

        //DbSet
        public DbSet<Flight> Flights { get; set; }
    }
}
