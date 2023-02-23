using Help_Desk_Project.Models;
using Microsoft.EntityFrameworkCore;

namespace Help_Desk_Project.DAL
{
  public class HelpDeskDbContext : DbContext
  {
    public HelpDeskDbContext() { }
    public HelpDeskDbContext(DbContextOptions options) : base(options)
    {
    }

    public DbSet<Ticket> Tickets { get; set; }
    public DbSet<Favorite> Favorites { get; set; }

    private static IConfigurationRoot _configuration;
    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    {
      if (!optionsBuilder.IsConfigured)
      {
        var builder = new ConfigurationBuilder()
            .SetBasePath(Directory.GetCurrentDirectory())
            .AddJsonFile("appsettings.json", optional: true, reloadOnChange: true);
        _configuration = builder.Build();
        string cnstr = _configuration.GetConnectionString("HelpDeskDb");
        optionsBuilder.UseSqlServer(cnstr);
      }
    }

  }
}
