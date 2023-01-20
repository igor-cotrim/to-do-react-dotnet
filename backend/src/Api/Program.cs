var builder = WebApplication.CreateBuilder(args);

// Add services to the container
builder.Services.AddDbContext<DataContext>(
  options => options.UseSqlite(builder.Configuration.GetConnectionString("Default"))
);
builder.Services.AddScoped<IActivityRepo, ActivityRepo>();
builder.Services.AddScoped<IGeneralRepo, GeneralRepo>();
builder.Services.AddScoped<IActivityService, ActivityService>();

builder.Services
  .AddControllers()
  .AddJsonOptions(options =>
    {
      options.JsonSerializerOptions.Converters.Add(new JsonStringEnumConverter());
    });
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen(c =>
  {
    c.SwaggerDoc("v1", new OpenApiInfo { Title = "Api", Version = "v1" });
  });
builder.Services.AddCors();

var app = builder.Build();

if (app.Environment.IsDevelopment())
{
  app.UseDeveloperExceptionPage();
  app.UseSwagger();
  app.UseSwaggerUI(c => c.SwaggerEndpoint("/swagger/v1/swagger.json", "ToDo v1"));
}

// app.UseHttpsRedirection();

app.UseAuthorization();

app.UseCors(option => option.AllowAnyHeader().AllowAnyMethod().AllowAnyOrigin());

app.MapControllers();

app.Run();

