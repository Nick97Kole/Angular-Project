using Help_Desk_Project.Models;
using Microsoft.EntityFrameworkCore;

namespace Help_Desk_Project.DAL
{
  public class FavoriteRepo
  {

    private HelpDeskDbContext _dbContext = new HelpDeskDbContext();
    public Favorite AddFavorite(Favorite favorite)
    {
      _dbContext.Favorites.Add(favorite);
      _dbContext.SaveChanges();
      return GetLatestFavorite();
    }
    private Favorite GetLatestFavorite()
    {
      return _dbContext.Favorites.OrderByDescending(x => x.Id).FirstOrDefault();
    }

    public List<Favorite> GetAllFavorites()
    {
      return _dbContext.Favorites.ToList();
    }

    public Favorite FindById(int id)
    {
      return _dbContext.Favorites.AsNoTracking().FirstOrDefault(x => x.Id == id);
    }

    

  }
}
