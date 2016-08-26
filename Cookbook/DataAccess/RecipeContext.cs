using Cookbook.Models;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace Cookbook.DataAccess
{
    public class RecipeContext : DbContext
    {
        public RecipeContext() : base("recipedb")
        {
        }

        public DbSet<Recipe> Recipes { get; set; }
        public DbSet<Ingredient> Ingredients { get; set; }
        public DbSet<RecipePicture> RecipePictures { get; set; }
    }
}