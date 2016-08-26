using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Cookbook.Models
{
    public class RecipePicture
    {
        public int Id { get; set; }
        public string Filename { get; set; }
        public string Caption { get; set; }
        public Recipe Recipe { get; set; }
    }
}