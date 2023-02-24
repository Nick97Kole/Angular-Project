using Help_Desk_Project.DAL;
using Help_Desk_Project.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Net;

namespace Help_Desk_Project.Controllers
{
  [Route("api/[controller]")]
  [ApiController]
  public class FavoriteController : Controller
  {

    FavoriteRepo repo = new FavoriteRepo();


    [HttpPost("add")]
    public Favorite AddFavorite( int ticketId, string userId)
    {
      Favorite newFavorite = new Favorite
      {
        
        TicketId = ticketId,
        UserId = userId,
        
      };
      return repo.AddFavorite(newFavorite);
    }

   

    [HttpGet("{id}")]
    public Favorite GetById(int id)
    {
      return repo.FindById(id);
    }


    [HttpGet("get all")]
    public List<Favorite> GetAll()
    {
      return repo.GetAllFavorites();
    }


  }
}

