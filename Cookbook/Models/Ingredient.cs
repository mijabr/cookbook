using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace Cookbook.Models
{
    public class Ingredient
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Condition { get; set; }
        public double Quantity { get; set; }
        public string QuantityName { get; set; }
        public Recipe Recipe { get; set; }
    }
}