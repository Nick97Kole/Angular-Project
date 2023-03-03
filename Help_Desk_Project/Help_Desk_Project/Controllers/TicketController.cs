using Help_Desk_Project.DAL;
using Help_Desk_Project.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Net;
using System.Text.Json;

namespace Help_Desk_Project.Controllers
{
  [Route("api/[controller]")]
  [ApiController]
  public class TicketController : ControllerBase
  {

    HelpDeskRepo repo = new HelpDeskRepo();

    
    [HttpPost("add")]
    public Ticket AddTicket(Ticket ticketToAdd)
    {
      
      Ticket newTicket = new Ticket
      {

        Title = ticketToAdd.Title,
        Description = ticketToAdd.Description,
        CreatedBy = ticketToAdd.CreatedBy,
        AssignedTo = ticketToAdd.AssignedTo,
        Status = ticketToAdd.Status,
        //CreatedDate = ticketToAdd.CreatedDate,
        //ResolvedDate = ticketToAdd.ResolvedDate
      };
      return repo.AddTicket(newTicket);
    }

    [HttpPost("update")]
    public HttpResponseMessage UpdateTicket(Ticket ticketToUpdate)
    {
      Ticket updatedTicket = new Ticket
      {
        Id = ticketToUpdate.Id,
        Title = ticketToUpdate.Title,
        Description = ticketToUpdate.Description,
        CreatedBy = ticketToUpdate.CreatedBy,
        AssignedTo = ticketToUpdate.AssignedTo,
        Status = ticketToUpdate.Status,
        //CreatedDate = ticketToUpdate.CreatedDate,
        //ResolvedDate = ticketToUpdate.ResolvedDate


      };

      try
      {
        if (repo.UpdateTickets(updatedTicket) == true)
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


    [HttpGet()]
    public List<Ticket> GetAll()
    {
      return repo.GetAllTickets();
    }

  }
}
