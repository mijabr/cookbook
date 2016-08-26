using Cookbook.Extensions;
using Cookbook.Models;
using System;
using System.Collections.Generic;
using System.Linq;

namespace Cookbook.DataAccess
{
    public class RecipeDataAccess
    {
        public IEnumerable<Recipe> GetAllRecipes()
        {
            var recipes = new List<Recipe>();
            using (var ctx = new RecipeContext())
            {
                foreach (var recipe in ctx.Recipes)
                {
                    recipes.Add(recipe.Clone());
                }
            }

            return recipes;
        }

        public Recipe GetRecipe(int id)
        {
            Recipe recipe = null;
            using (var ctx = new RecipeContext())
            {
                recipe = ctx.Recipes.FirstOrDefault(r => r.Id == id);
                if (recipe != null)
                {
                    recipe = recipe.Clone();
                }
            }

            return recipe;
        }

        public void AddRecipe(Recipe recipe)
        {
            using (var ctx = new RecipeContext())
            {
                ICollection<RecipePicture> pictures = recipe.Pictures;
                ICollection<Ingredient> ingredients = recipe.Ingredients;
                recipe.Pictures = null;
                recipe.Ingredients = null;

                recipe.Ingredients = new List<Ingredient>();
                foreach (var ing in ingredients)
                {
                    recipe.Ingredients.Add(ing);
                }

                ctx.Recipes.Add(recipe);
                recipe.Pictures = new List<RecipePicture>();
                foreach (var pic in pictures)
                {
                    recipe.Pictures.Add(pic);
                }

                ctx.SaveChanges();
            }
        }

        public void UpdateRecipe(Recipe recipe)
        {
            using (var ctx = new RecipeContext())
            {
                ICollection<RecipePicture> pictures = recipe.Pictures;
                ICollection<Ingredient> ingredients = recipe.Ingredients;
                recipe.Pictures = null;
                recipe.Ingredients = null;

                Recipe existingRecipe = ctx.Recipes.FirstOrDefault(r => r.Id == recipe.Id);
                if (existingRecipe != null)
                {
                    existingRecipe.Name = recipe.Name;
                    existingRecipe.Method = recipe.Method;
                    existingRecipe.Ingredients.Clear();
                    foreach (var ing in ingredients)
                    {
                        existingRecipe.Ingredients.Add(ing);
                    }

                    existingRecipe.Pictures.Clear();
                    foreach (var pic in pictures)
                    {
                        existingRecipe.Pictures.Add(pic);
                    }

                    ctx.SaveChanges();
                }
            }
        }

        public void DeleteRecipe(int id)
        {
            using (var ctx = new RecipeContext())
            {
                Recipe recipe = ctx.Recipes.FirstOrDefault(r => r.Id == id);
                if (recipe != null)
                {
                    ctx.Recipes.Remove(recipe);
                    ctx.SaveChanges();
                }
            }
        }

        public void AddMockRecipes()
        {
            using (var ctx = new RecipeContext())
            {
                ctx.Configuration.LazyLoadingEnabled = true;
                if (ctx.Recipes.Count() == 0)
                {
                    foreach (var recipe in MockData.Recipes)
                    {
                        AddRecipe(recipe);
                    }
                }
            }
        }
    }
}