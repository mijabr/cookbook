﻿using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Cookbook.Models
{
    public class Recipe
    {
        public int Id { get; set; }
        [JsonIgnore]
        public string UserId { get; set; }
        public bool IsOwn { get; set; }
        public string Name { get; set; }
        public virtual ICollection<Ingredient> Ingredients { get; set; }
        public string Method { get; set; }
        public virtual ICollection<RecipePicture> Pictures { get; set; }
    }
}