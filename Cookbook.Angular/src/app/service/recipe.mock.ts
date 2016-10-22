import { IRecipe, IIngredient } from '../model/recipe';

export var MockRecipes : IRecipe[] = 
[
{
    Id : 1,
    Name : "Pizza Dough",
    Ingredients : [
        {Id: 1, Name: "Water", Condition: "Warm", Quantity: 1, QuantityName: "L" },
        {Id: 2, Name: "Yeast", Condition: "", Quantity: 60, QuantityName: "g" },
        {Id: 3, Name: "Sugar", Condition: "", Quantity: 3, QuantityName: " tsp" },
        {Id: 4, Name: "Flour", Condition: "", Quantity: 1.8, QuantityName: "k" },
        {Id: 5, Name: "Olive Oil", Condition: "", Quantity: 100, QuantityName: "mls" },
        {Id: 6, Name: "Salt", Condition: "", Quantity: 6, QuantityName: " pinches" }],
    Method : "1. Combine yeast with sugar in a large bowl; add water and stir. Let stand for 10 minutes or until bubbles appear on the surface. <BR>2. Add flour, salt. Make a well in the flour and pour in the oil. Mix to a firm dough by hand.<BR>3. Turn onto floured surface and kneed for 10 minuntes or until dough is smooth and elastic. Cover and stand in a warm location for 30 minutes or until dough has doubled in size.<BR>4. Knock down and kneed the dough again and leave for 20 minutes more.",
    Pictures : [{ Filename: "pizza01_1024.jpg", Caption: "Star Pizza"}]
},
{
    Id : 2,
    Name : "Chicken, Leek and Mushroom Pie",
    Ingredients : [
        {Id: 1, Name: "Butter", Condition: "", Quantity: 50, QuantityName: "g" },
        {Id: 2, Name: "Celery Stalks", Condition: "Finely chopped", Quantity: 3, QuantityName: "" },
        {Id: 3, Name: "Leeks", Condition: "Well washed, trimmed, thinly sliced", Quantity: 2, QuantityName: "" },
        {Id: 4, Name: "Plain Flour", Condition: "plus extra to dust", Quantity: 0.5, QuantityName: " cup" },
        {Id: 5, Name: "Salt reduced Chicken Stock", Condition: "", Quantity: 375, QuantityName: "ml" },
        {Id: 6, Name: "Pure Cream", Condition: "", Quantity: 200, QuantityName: "ml" },
        {Id: 7, Name: "Button Mushrooms", Condition: "Halved if large", Quantity: 200, QuantityName: "g" },
        {Id: 8, Name: "Roasted Chicken", Condition: "Chopped", Quantity: 750, QuantityName: "g" },
        {Id: 9, Name: "Parsley", Condition: "Roughly Chopped", Quantity: 0.25, QuantityName: " cup" },
        {Id: 10, Name: "Puff Pastry", Condition: "", Quantity: 4, QuantityName: " sheets" },
        {Id: 11, Name: "Egg Yolk", Condition: "", Quantity: 1, QuantityName: "" },
        {Id: 12, Name: "Milk", Condition: "", Quantity: 1, QuantityName: " tbsp" }],
    Method : "1. Melt butter in a large saucepan on medium heat.<BR>2. Add celery and leek and cook for 5 minutes, stirring until leek softens.<BR>3. Sprinkle in flour and cook for additional 2 minutes, stirring to make a paste.<BR>4. Gradually stir in stock and cream. Bring to boil then reduce heat to medium-low. Cover and simmer for 5 minutes.<BR>5. Remove from heat. Stir though mushrooms and chicken. Season. Stir in parsley.<BR>6. Preheat oven to 180C.<BR>7. Cover bottom of pie dish with pastry sheets, cut to fit. Cut out leaf shapes from remaining pastry.<BR>8. Spoon in chicken mixture into pie dish. Top with pastry and crimp edges to seal. Decorate with pastry leaves. Cut 1cm slit in centre on pastry lid.<BR>9. Whisk together egg and milk and brush over pie top. Bake for 40 minutes or until golden.",
    Pictures : [{ Filename: "chickenpie01_1024.jpg", Caption: "Golden"}]
},
{
    Id : 3,
    Name : "Spicy Beef with Beans and Bok Choy",
    Ingredients : [
        {Id: 1, Name: "Ginger", Condition: "Finely chopped", Quantity: 1, QuantityName: " nob" },
        {Id: 2, Name: "Garlick", Condition: "Crushed", Quantity: 2, QuantityName: " cloves" },
        {Id: 3, Name: "Birdseye Chillie", Condition: "Finely chopped (optional)", Quantity: 1, QuantityName: "" },
        {Id: 4, Name: "Rump Steak", Condition: "Thinly sliced", Quantity: 750, QuantityName: "g" },
        {Id: 5, Name: "Vegetable Oil", Condition: "", Quantity: 2, QuantityName: " tbsp" },
        {Id: 6, Name: "Sugar", Condition: "", Quantity: 2, QuantityName: " tsp" },
        {Id: 7, Name: "Oyster Sauce", Condition: "", Quantity: 3, QuantityName: " tbsp" },
        {Id: 8, Name: "Soy Sauce", Condition: "", Quantity: 2, QuantityName: " tbsp" },
        {Id: 9, Name: "Jasmine Rice", Condition: "Washed", Quantity: 2, QuantityName: " cups" }],
    "Method" : "1. Fill a large pot of water and bring to boil.<BR>2. Combine steak, ginger, garlick, chillie and oil in a large bowl and leave to marinate.<BR>3. Top and tail beans. Clean and roughly chop bok choy.<BR>4. Boil beans very briefly, about 30 seconds.<BR>5. Now add the rice to the same boiling water.<BR>6. Heat fry pan on high then add beef mixture. Stir fry the beef.<BR>7. When beef is cooked, remove from heat and stir in sugar, oyster sauce and soy sauce and then move to serving bowl.<BR>8. In the same pan add the beans, bok choy and a dash of oyster sauce and cook for 1 minute or until the boy choy leaves wilter.",
    "Pictures" : [{ Filename: "spicybeef01_1024.jpg", Caption:"Yum!"}]
}
];
