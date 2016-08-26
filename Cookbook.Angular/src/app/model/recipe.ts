
export interface IIngredient
{
    Id: number;
    Name: string;
    Condition: string;
    Quantity: number;
    QuantityName: string;
}

export interface IRecipePicture
{
    Filename: string;
    Caption: string;
}

export interface IRecipe
{
    Id: number;
    Name: string;
    Ingredients: IIngredient[];
    Method: string;
    Pictures: IRecipePicture[];
}

export class Recipe implements IRecipe
{
    constructor() {
        this.Id = 0;
        this.Name = "";
        this.Ingredients = <IIngredient[]>[];
        this.Method = "";
        this.Pictures = <IRecipePicture[]>[];
    }

    Id: number;
    Name: string;
    Ingredients: IIngredient[];
    Method: string;
    Pictures: IRecipePicture[];
}