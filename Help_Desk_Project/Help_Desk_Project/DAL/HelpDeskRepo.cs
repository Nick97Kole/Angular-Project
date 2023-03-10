using Help_Desk_Project.Models;
using Microsoft.EntityFrameworkCore;

namespace Help_Desk_Project.DAL
{
  public class HelpDeskRepo
  {
    private HelpDeskDbContext _dbContext = new HelpDeskDbContext();
    public Ticket AddTicket(Ticket ticket)
    {
      _dbContext.Tickets.Add(ticket);
      _dbContext.SaveChanges();
      return GetLatestTicket();
    }
    private Ticket GetLatestTicket()
    {
      return _dbContext.Tickets.OrderByDescending(x => x.Id).FirstOrDefault();
    }

    public List<Ticket> GetAllTickets ()
    {
      return _dbContext.Tickets.ToList();
    }

    public Ticket FindById(int id)
    {
      return _dbContext.Tickets.AsNoTracking().FirstOrDefault(x => x.Id == id);
    }

    public bool UpdateTickets(Ticket ticketToUpdate)
    {
      if (FindById(ticketToUpdate.Id) == null)
      {
        return false;
      }
      _dbContext.Tickets.Update(ticketToUpdate);
      _dbContext.SaveChanges();
      return true;
    }

    public List<Ticket> GetOpenTickets()
    {
      return _dbContext.Tickets.Where(x => x.Status == "Open").ToList();
    }

  }
}
