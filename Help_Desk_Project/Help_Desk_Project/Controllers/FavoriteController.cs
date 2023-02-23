using Help_Desk_Project.DAL;
using Help_Desk_Project.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Help_Desk_Project.Controllers
{
  public class FavoriteController : Controller
  {

    private readonly HelpDeskDbContext _dbContext;

    public FavoriteController(HelpDeskDbContext dbContext)
    {
      _dbContext = dbContext;
    }

    //[HttpGet("{userId}")]
    //public async Task<ActionResult<IEnumerable<Ticket>>> GetFavorites(string userId)
    //{
    //  var favoriteIds = await _dbContext.Favorites
    //      .Where(f => f.UserId == userId)
    //      .Select(f => f.TicketId)
    //      .ToListAsync();

    //  var favorites = await _dbContext.Tickets
    //      .Where(t => favoriteIds.Contains(t.Id))
    //      .ToListAsync();

    //  return favorites;
    //}

    //[HttpPost]
    //public async Task<ActionResult<Favorite>> CreateFavorite(Favorite favorite)
    //{
    //  _dbContext.Favorites.Add(favorite);
    //  await _dbContext.SaveChangesAsync();

    //  return CreatedAtAction(nameof(GetFavorites), new { userId = favorite.UserId }, favorite);
    //}

    //[HttpDelete("{ticketId}/{userId}")]
    //public async Task<IActionResult> DeleteFavorite(int ticketId, string userId)
    //{
    //  var favorite = await _dbContext.Favorites.FindAsync(ticketId, userId);

    //  if (favorite == null)
    //  {
    //    return NotFound();
    //  }

    //  _dbContext.Favorites.Remove(favorite);
    //  await _dbContext.SaveChangesAsync();

    //  return NoContent();
    //}
  }
}

