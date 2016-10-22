using Cookbook.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Cookbook.Extensions
{
    public static class RecipeExtension
    {
        public static Recipe Clone(this Recipe recipe)
        {
            var copy = new Recipe() { Id = recipe.Id, Name = recipe.Name, UserId = recipe.UserId, Method = recipe.Method };
            copy.Ingredients = new List<Ingredient>();
            foreach (var ingredient in recipe.Ingredients)
            {
                copy.Ingredients.Add(new Ingredient() { Id = ingredient.Id, Name = ingredient.Name, Condition = ingredient.Condition, Quantity = ingredient.Quantity, QuantityName = ingredient.QuantityName });
            }

            copy.Pictures = new List<RecipePicture>();
            foreach (var pic in recipe.Pictures)
            {
                copy.Pictures.Add(new RecipePicture() { Id = pic.Id, Filename = pic.Filename, Caption = pic.Caption });
            }

            return copy;
        }

        public static Recipe MakeUserCopy(this Recipe recipe, string userId)
        {
            var userCopy = recipe.Clone();
            userCopy.IsOwn = (recipe.UserId == userId);
            return userCopy;
        }
    }
}