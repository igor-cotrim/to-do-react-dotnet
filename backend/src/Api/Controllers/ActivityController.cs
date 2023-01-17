using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Data.Context;
using Domain.Entities;
using Domain.Interfaces.Services;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Api.Controllers
{
  [ApiController]
  [Route("api/[controller]")]
  public class ActivityController : ControllerBase
  {
    private readonly IActivityService _activityService;
    public ActivityController(IActivityService activityService)
    {
      this._activityService = activityService;
    }

    [HttpGet]
    public async Task<IActionResult> Get()
    {
      try
      {
        var activities = await _activityService.GetAllActivitiesAsync();

        if (activities == null) return NoContent();

        return Ok(activities);
      }
      catch (System.Exception ex)
      {
        return this.StatusCode(StatusCodes.Status500InternalServerError, $"Erro ao tentar recuperar Atividades. Error: {ex.Message}");
      }
    }

    [HttpGet("{id}")]
    public async Task<IActionResult> Get(int id)
    {
      try
      {
        var activity = await _activityService.GetActivityByIdAsync(id);

        if (activity == null) return NoContent();

        return Ok(activity);
      }
      catch (System.Exception ex)
      {
        return this.StatusCode(StatusCodes.Status500InternalServerError, $"Erro ao tentar recuperar Atividade com id: ${id}. Error: {ex.Message}");
      }
    }

    [HttpPost]
    public async Task<IActionResult> Post(Activity model)
    {
      try
      {
        var activity = await _activityService.AddActivity(model);

        if (activity == null) return NoContent();

        return Ok(activity);
      }
      catch (System.Exception ex)
      {
        return this.StatusCode(StatusCodes.Status500InternalServerError, $"Erro ao tentar adicionar Atividade. Error: {ex.Message}");
      }
    }

    [HttpPut("{id}")]
    public async Task<IActionResult> Put(int id, Activity model)
    {
      try
      {
        if (model.Id != id) this.StatusCode(StatusCodes.Status409Conflict, "Você está tentando atualizar a atividade errada");

        var activity = await _activityService.UpdateActivity(model);

        if (activity == null) return NoContent();

        return Ok(activity);
      }
      catch (System.Exception ex)
      {
        return this.StatusCode(StatusCodes.Status500InternalServerError, $"Erro ao tentar atualizar Atividade com o id: ${id}. Error: {ex.Message}");
      }
    }

    [HttpDelete("{id}")]
    public async Task<IActionResult> Delete(int id)
    {
      try
      {
        var activity = await _activityService.GetActivityByIdAsync(id);

        if (activity == null) this.StatusCode(StatusCodes.Status409Conflict, "Você está tentando deletar a atividade que não existe");

        if (await _activityService.DeleteActivity(id))
        {
          return Ok(new { message = "Deletado" });
        }
        else
        {
          return BadRequest("Ocorreu um problema não específico ao tentar deletar a atividade.");
        }

      }
      catch (System.Exception ex)
      {
        return this.StatusCode(StatusCodes.Status500InternalServerError, $"Erro ao tentar deletar Atividade com o id: ${id}. Error: {ex.Message}");
      }
    }
  }
}