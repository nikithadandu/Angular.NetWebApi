using Flights.API.Data;
using Flights.API.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Flights.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class FlightsController : Controller
    {
        private readonly FlightsDbContext _flightsDbContext;
        private object _flightsDBContext;

        public FlightsController(FlightsDbContext flightsDbContext)
        {
            _flightsDbContext = flightsDbContext;
        }
        [HttpGet]
        public async Task<IActionResult> GetAllFlights()
        {
            var flights = await _flightsDbContext.Flights.ToListAsync();
            return Ok(flights);
        }
        
        [HttpPost]
        public async Task<IActionResult> AddFlight([FromBody] Flight flightRequest)
        {
            flightRequest.Id = Guid.NewGuid();

            await _flightsDbContext.Flights.AddAsync(flightRequest);
            await _flightsDbContext.SaveChangesAsync();

            return Ok(flightRequest);
        }
    }
}
