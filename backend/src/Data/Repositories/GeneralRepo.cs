using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Data.Context;
using Domain.Interfaces.Repositories;

namespace Data.Repositories
{
  public class GeneralRepo : IGeneralRepo
  {
    private readonly DataContext _context;
    public GeneralRepo(DataContext context)
    {
      this._context = context;
    }

    public void Add<T>(T entity) where T : class
    {
      _context.Add(entity);
    }

    public void Update<T>(T entity) where T : class
    {
      _context.Update(entity);
    }

    public void Delete<T>(T entity) where T : class
    {
      _context.Remove(entity);
    }

    public void DeleteMany<T>(T[] entityArray) where T : class
    {
      _context.RemoveRange(entityArray);
    }

    public async Task<bool> SaveChangesAsync()
    {
      return (await _context.SaveChangesAsync()) > 0;
    }
  }
}