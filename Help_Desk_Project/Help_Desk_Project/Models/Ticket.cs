using Microsoft.VisualBasic;

namespace Help_Desk_Project.Models
{
  public class Ticket
  {

    public int Id { get; set; }
    public string Title { get; set; }
    public string Description { get; set; }
    public string CreatedBy { get; set; }
    public string AssignedTo { get; set; }
    public string Status { get; set; }
    public string? CreatedDate { get; set; } = DateTime.Now.ToString("yyyy/MM/dd");
    public string? ResolvedDate { get; set; } = DateTime.Now.ToString("yyyy/MM/dd");



  }
}
