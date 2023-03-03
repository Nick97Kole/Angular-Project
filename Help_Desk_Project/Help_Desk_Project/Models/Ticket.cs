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
    public DateTime? CreatedDate { get; set; }
    public DateTime? ResolvedDate { get; set; }

  }
}
