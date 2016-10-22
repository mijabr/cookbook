using Cookbook.DataAccess;
using Cookbook.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Web.Http;

namespace Cookbook.Controllers
{
    [RoutePrefix("api")]
    [Authorize]
    public class RecipeController : ApiController
    {
        [HttpGet]
        [Route("recipe")]
        [AllowAnonymous]
        public IHttpActionResult GetRecipe()
        {
            RecipeDataAccess da = new RecipeDataAccess();
            IEnumerable<Recipe> result = da.GetAllRecipes(GetUserId());
            if (result.Count() > 0)
            {
                return Ok(result);
            }

            return NotFound();
        }

        [HttpGet]
        [Route("recipe/{id}")]
        [AllowAnonymous]
        public IHttpActionResult GetRecipe(int id)
        {
            RecipeDataAccess da = new RecipeDataAccess();
            Recipe result = da.GetRecipe(id, GetUserId());

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
            da.UpdateRecipe(recipe, GetUserId());
            return Ok();
        }

        [HttpPost]
        [Route("recipe")]
        public IHttpActionResult Post([FromBody] Recipe recipe)
        {
            RecipeDataAccess da = new RecipeDataAccess();
            da.AddRecipe(recipe, GetUserId());
            return Ok();
        }

        [HttpDelete]
        [Route("recipe/{id}")]
        public IHttpActionResult DeleteRecipe(int id)
        {
            RecipeDataAccess da = new RecipeDataAccess();
            da.DeleteRecipe(id, GetUserId());
            return Ok();
        }

        private string GetUserId()
        {
            string userId;
            try
            {
                userId = ClaimsPrincipal.Current.Claims.First().Value;
            }
            catch (Exception x)
            {
                userId = "Guest";
            }

            return userId;
        }
    }
}