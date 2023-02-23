using Help_Desk_Project.DAL;
using Help_Desk_Project.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Help_Desk_Project.Controllers
{
  public class TicketController : Controller
  {

    HelpDeskRepo repo = new HelpDeskRepo();

    private readonly HelpDeskDbContext _dbContext;

    public TicketController(HelpDeskDbContext dbContext)
    {
      _dbContext = dbContext;
    }

    //[HttpGet]
    //public async Task<ActionResult<IEnumerable<Ticket>>> GetTickets()
    //{
    //  return await _dbContext.Tickets.ToListAsync();
    //}

    //[HttpGet("{id}")]
    //public async Task<ActionResult<Ticket>> GetTicket(int id)
    //{
    //  var ticket = await _dbContext.Tickets.FindAsync(id);

    //  if (ticket == null)
    //  {
    //    return NotFound();
    //  }

    //  return ticket;
    //}

    [HttpPost("add")]
    public Ticket AddTicket(string title, string description, string createdBy, string assignedTo, string status, DateTime CreatedDate, DateTime ResolvedDate)
    {
      Ticket newTicket = new Ticket
      {

        Title = title,
        Description = description,
        CreatedBy = createdBy,
        AssignedTo = assignedTo,
        Status = status,
        CreatedDate = CreatedDate,
        ResolvedDate = ResolvedDate
      };
      return repo.AddTicket(newTicket);
    }

    //[HttpPut("{id}")]
    //public async Task<IActionResult> UpdateTicket(int id, Ticket ticket)
    //{
    //  if (id != ticket.Id)
    //  {
    //    return BadRequest();
    //  }

    //  _dbContext.Entry(ticket).State = EntityState.Modified;
    //  await _dbContext.SaveChangesAsync();

    //  return NoContent();
    //}

    //[HttpPatch("{id}")]
    //public async Task<IActionResult> CloseTicket(int id, Ticket ticket)
    //{
    //  if (id != ticket.Id)
    //  {
    //    return BadRequest();
    //  }

    //  ticket.Status = "Closed";
    //  ticket.ResolvedDate = DateTime.Now;

    //  _dbContext.Entry(ticket).State = EntityState.Modified;
    //  await _dbContext.SaveChangesAsync();

    //  return NoContent();
    //}

    [HttpGet("get all")]
    public List<Ticket> GetAll()
    {
      return repo.GetAllTickets();
    }

  }
}
