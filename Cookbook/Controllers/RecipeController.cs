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
        [Route("Recipe")]
        public IHttpActionResult Get()
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
        [Route("Recipe/{id}")]
        public IHttpActionResult Get(int id)
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
        [Route("Recipe")]
        public IHttpActionResult Put([FromBody] Recipe recipe)
        {
            RecipeDataAccess da = new RecipeDataAccess();
            da.UpdateRecipe(recipe);
            return Ok();
        }

        [HttpPost]
        [Route("Recipe")]
        public IHttpActionResult Post([FromBody] Recipe recipe)
        {
            RecipeDataAccess da = new RecipeDataAccess();
            da.AddRecipe(recipe);
            return Ok();
        }

        [HttpDelete]
        [Route("Recipe")]
        public IHttpActionResult Delete(int id)
        {
            RecipeDataAccess da = new RecipeDataAccess();
            da.DeleteRecipe(id);
            return Ok();
        }
    }
}