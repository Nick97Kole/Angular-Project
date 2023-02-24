using Help_Desk_Project.DAL;
using Help_Desk_Project.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Net;

namespace Help_Desk_Project.Controllers
{
  [Route("api/[controller]")]
  [ApiController]
  public class TicketController : ControllerBase
  {

    HelpDeskRepo repo = new HelpDeskRepo();

    
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

    [HttpPost("update")]
    public HttpResponseMessage UpdateTicket(string title, string description, string createdBy, string assignedTo, string status, DateTime CreatedDate, DateTime ResolvedDate, int Id)
    {
      Ticket ticketToUpdate = new Ticket
      {
        Id = Id,
        Title = title,
        Description = description,
        CreatedBy = createdBy,
        AssignedTo = assignedTo,
        Status = status,
        CreatedDate = CreatedDate,
        ResolvedDate = ResolvedDate
      };

     

      try
      {
        if (repo.UpdateTickets(ticketToUpdate) == true)
        {
          return new HttpResponseMessage(HttpStatusCode.NoContent);
        }
        else
        {
          return new HttpResponseMessage(HttpStatusCode.NotFound);
        }
      }
      catch (Exception ex)
      {
        return new HttpResponseMessage(HttpStatusCode.ServiceUnavailable);
      }
    }

    [HttpGet("{id}")]
    public Ticket GetById(int id)
    {
      return repo.FindById(id);
    }


    [HttpGet("get all")]
    public List<Ticket> GetAll()
    {
      return repo.GetAllTickets();
    }

  }
}
