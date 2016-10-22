using System;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using FluentAssertions;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;

namespace Cookbook.Tests
{
    [TestClass]
    public class CookbookTests
    {
        [TestMethod]
        public void CanVerifyJwt()
        {
            /*var token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL21pY2hhZWwtYnJ5ZGllLmF1LmF1dGgwLmNvbS8iLCJzdWIiOiJnb29nbGUtb2F1dGgyfDExNTg0MDY5Mzg5MDA5MjkzNzI5MiIsImF1ZCI6IjB6cmJzNkhmV0RqTDhzaDY4ejdrU3UxV0w2d0FqUkU3IiwiZXhwIjoxNDc2ODg1NzAyLCJpYXQiOjE0NzY4NDk3MDJ9.maxe-k82PO3OofCFQLafDqaIK83TXuCEkH6M4W2hxus";
            var b64secret = "TKpGC9xwBevJnTibz0-HsFKtE80zjCA7Fzhk2CP_ylXayd0cZ5hD2aW6DXo-XQuB".Replace('_', '/').Replace('-', '+');
            var secret = System.Convert.FromBase64String(b64secret);
            var claims = JWT.JsonWebToken.Decode(token, secret);
            var id = JsonConvert.DeserializeObject<AuthToken>(claims, new JsonSerializerSettings() { MissingMemberHandling = MissingMemberHandling.Ignore, NullValueHandling = NullValueHandling.Ignore } );
            id.iss.Should().Be("https://michael-brydie.au.auth0.com/");
            id.sub.Should().Be("google-oauth2|115840693890092937292");
            id.aud.Should().Be("0zrbs6HfWDjL8sh68z7kSu1WL6wAjRE7");
            id.exp.Should().Be("1476885702");
            id.iat.Should().Be("1476849702");*/
        }
    }
}
