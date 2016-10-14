using Cookbook.DataAccess;
using Cookbook.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace Cookbook.Controllers
{
    [RoutePrefix("api")]
    public class RecipeController : ApiController
    {
        [HttpGet]
        [Route("recipe")]
        public IHttpActionResult GetRecipe()
        {
            RecipeDataAccess da = new RecipeDataAccess();
            IEnumerable<Recipe> result = da.GetAllRecipes();

            if (result.Count() > 0)
            {
                return Ok(result);
            }

            return NotFound();
        }

        [HttpGet]
        [Route("recipe/{id}")]
        public IHttpActionResult GetRecipe(int id)
        {
            RecipeDataAccess da = new RecipeDataAccess();
            Recipe result = da.GetRecipe(id);

            if (result != null)
            {
                return Ok(result);
            }

            return NotFound();
        }

        [HttpPut]
        [Route("recipe")]
        public IHttpActionResult Put([FromBody] Recipe recipe)
        {
            RecipeDataAccess da = new RecipeDataAccess();
            da.UpdateRecipe(recipe);
            return Ok();
        }

        [HttpPost]
        [Route("recipe")]
        public IHttpActionResult Post([FromBody] Recipe recipe)
        {
            RecipeDataAccess da = new RecipeDataAccess();
            da.AddRecipe(recipe);
            return Ok();
        }

        [HttpDelete]
        [Route("recipe/{id}")]
        public IHttpActionResult DeleteRecipe(int id)
        {
            RecipeDataAccess da = new RecipeDataAccess();
            da.DeleteRecipe(id);
            return Ok();
        }
    }
}