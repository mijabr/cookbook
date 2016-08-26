using Cookbook.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Cookbook.DataAccess
{
    public static class MockData
    {
        public static List<Recipe> Recipes = new List<Recipe>() {
            new Recipe() {
                Name = "Pizza Dough",
                Ingredients = new List<Ingredient>() {
                    new Ingredient() { Name = "Water", Condition = "Warm", Quantity=  1, QuantityName = "L" },
                    new Ingredient() { Name = "Yeast", Condition = "", Quantity = 60, QuantityName = "g" },
                    new Ingredient() { Name = "Sugar", Condition = "", Quantity = 3, QuantityName = " tsp" },
                    new Ingredient() { Name = "Flour", Condition = "", Quantity = 1.8, QuantityName = "k" },
                    new Ingredient() { Name = "Olive Oil", Condition = "", Quantity = 100, QuantityName = "mls" },
                    new Ingredient() { Name = "Salt", Condition = "", Quantity = 6, QuantityName = " pinches" }
                },
                Method = "1. Combine yeast with sugar in a large bowl; add water and stir. Let stand for 10 minutes or until bubbles appear on the surface. <BR>2. Add flour, salt. Make a well in the flour and pour in the oil. Mix to a firm dough by hand.<BR>3. Turn onto floured surface and kneed for 10 minuntes or until dough is smooth and elastic. Cover and stand in a warm location for 30 minutes or until dough has doubled in size.<BR>4. Knock down and kneed the dough again and leave for 10 minutes more.",
                Pictures = new List<RecipePicture>() {
                    new RecipePicture() { Filename = "pizza01_1024.jpg", Caption = "Star Pizza" }
                }
            },
            new Recipe()
            {
                Name = "Chicken, Leek and Mushroom Pie",
                Ingredients = new List<Ingredient>() {
                    new Ingredient() { Name = "Butter", Condition = "", Quantity = 50, QuantityName = "g" },
                    new Ingredient() { Name = "Celery Stalks", Condition = "Finely chopped", Quantity = 3, QuantityName = "" },
                    new Ingredient() { Name = "Leeks", Condition = "Well washed, trimmed, thinly sliced", Quantity = 2, QuantityName = "" },
                    new Ingredient() { Name = "Plain Flour", Condition = "plus extra to dust", Quantity = 0.5, QuantityName = " cup" },
                    new Ingredient() { Name = "Salt reduced Chicken Stock", Condition = "", Quantity = 375, QuantityName = "ml" },
                    new Ingredient() { Name = "Pure Cream", Condition = "", Quantity = 200, QuantityName = "ml" },
                    new Ingredient() { Name = "Button Mushrooms", Condition = "Halved if large", Quantity = 200, QuantityName = "g" },
                    new Ingredient() { Name = "Roasted Chicken", Condition = "Chopped", Quantity = 750, QuantityName = "g" },
                    new Ingredient() { Name = "Parsley", Condition = "Roughly Chopped", Quantity = 0.25, QuantityName = " cup" },
                    new Ingredient() { Name = "Puff Pastry", Condition = "", Quantity = 4, QuantityName = " sheets" },
                    new Ingredient() { Name = "Egg Yolk", Condition = "", Quantity = 1, QuantityName = "" },
                    new Ingredient() { Name = "Milk", Condition = "", Quantity = 1, QuantityName = " tbsp" }
                },
                Method = "1. Melt butter in a large saucepan on medium heat.<BR>2. Add celery and leek and cook for 5 minutes, stirring until leek softens.<BR>3. Sprinkle in flour and cook for additional 2 minutes, stirring to make a paste.<BR>4. Gradually stir in stock and cream. Bring to boil then reduce heat to medium-low. Cover and simmer for 5 minutes.<BR>5. Remove from heat. Stir though mushrooms and chicken. Season. Stir in parsley.<BR>6. Preheat oven to 180C.<BR>7. Cover bottom of pie dish with pastry sheets, cut to fit. Cut out leaf shapes from remaining pastry.<BR>8. Spoon in chicken mixture into pie dish. Top with pastry and crimp edges to seal. Decorate with pastry leaves. Cut 1cm slit in centre on pastry lid.<BR>9. Whisk together egg and milk and brush over pie top. Bake for 40 minutes or until golden.",
                Pictures = new List<RecipePicture>() {
                    new RecipePicture() { Filename = "chickenpie01_1024.jpg", Caption = "Golden"}
                }
            },
            new Recipe()
            {
                Name = "Spicy Beef with Beans and Bok Choy",
                Ingredients = new List<Ingredient>() {
                    new Ingredient() { Name = "Ginger", Condition = "Finely chopped", Quantity = 1, QuantityName = " nob" },
                    new Ingredient() { Name = "Garlick", Condition = "Crushed", Quantity = 2, QuantityName = " cloves" },
                    new Ingredient() { Name = "Birdseye Chillie", Condition = "Finely chopped (optional)", Quantity = 1, QuantityName = "" },
                    new Ingredient() { Name = "Rump Steak", Condition = "Thinly sliced", Quantity = 750, QuantityName = "g" },
                    new Ingredient() { Name = "Vegetable Oil", Condition = "", Quantity = 2, QuantityName = " tbsp" },
                    new Ingredient() { Name = "Sugar", Condition = "", Quantity = 2, QuantityName = " tsp" },
                    new Ingredient() { Name = "Oyster Sauce", Condition = "", Quantity = 3, QuantityName = " tbsp" },
                    new Ingredient() { Name = "Soy Sauce", Condition = "", Quantity = 2, QuantityName = " tbsp" },
                    new Ingredient() { Name = "Jasmine Rice", Condition = "Washed", Quantity = 2, QuantityName = " cups" }
                },
                Method = "1. Fill a large pot of water and bring to boil.<BR>2. Combine steak, ginger, garlick, chillie and oil in a large bowl and leave to marinate.<BR>3. Top and tail beans. Clean and roughly chop bok choy.<BR>4. Boil beans very briefly, about 30 seconds.<BR>5. Now add the rice to the same boiling water.<BR>6. Heat fry pan on high then add beef mixture. Stir fry the beef.<BR>7. When beef is cooked, remove from heat and stir in sugar, oyster sauce and soy sauce and then move to serving bowl.<BR>8. In the same pan add the beans, bok choy and a dash of oyster sauce and cook for 1 minute or until the boy choy leaves wilter.",
                Pictures = new List<RecipePicture>() {
                    new RecipePicture() { Filename = "spicybeef01_1024.jpg", Caption = "Yum!" }
                }
            }
        };
    }
}