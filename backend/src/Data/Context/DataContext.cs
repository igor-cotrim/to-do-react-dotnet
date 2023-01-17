using Data.Mappings;
using Domain.Entities;
using Microsoft.EntityFrameworkCore;

namespace Data.Context
{
  public class DataContext : DbContext
  {
    public DataContext(DbContextOptions<DataContext> options) : base(options) { }
    public DbSet<Activity> Activities { get; set; }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
      modelBuilder.ApplyConfiguration(new ActivityMap());
    }
  }
}