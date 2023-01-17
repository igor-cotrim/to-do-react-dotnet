using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Data.Context;
using Domain.Entities;
using Domain.Interfaces.Repositories;
using Microsoft.EntityFrameworkCore;

namespace Data.Repositories
{
  public class ActivityRepo : GeneralRepo, IActivityRepo
  {
    private readonly DataContext _context;
    public ActivityRepo(DataContext context) : base(context)
    {
      this._context = context;
    }

    public async Task<Activity[]> GetAllAsync()
    {
      IQueryable<Activity> query = _context.Activities;

      query = query.AsNoTracking()
        .OrderBy(act => act.Id);

      return await query.ToArrayAsync();
    }

    public async Task<Activity> GetByIdAsync(int id)
    {
      IQueryable<Activity> query = _context.Activities;

      query = query.AsNoTracking()
        .OrderBy(act => act.Id)
        .Where(act => act.Id == id);

      return await query.FirstOrDefaultAsync();
    }

    public async Task<Activity> GetByTitleAsync(string title)
    {
      IQueryable<Activity> query = _context.Activities;

      query = query.AsNoTracking()
        .OrderBy(act => act.Id);

      return await query.FirstOrDefaultAsync(act => act.Title == title);
    }
  }
}