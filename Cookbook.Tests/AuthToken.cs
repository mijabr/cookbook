namespace Cookbook.Tests
{
    public class AuthToken
    {
        public string iss { get; set; }
        public string sub { get; set; }
        public string aud { get; set; }
        public string exp { get; set; }
        public string iat { get; set; }
        // {"iss":"https://michael-brydie.au.auth0.com/","sub":"google-oauth2|115840693890092937292","aud":"0zrbs6HfWDjL8sh68z7kSu1WL6wAjRE7","exp":1476885702,"iat":1476849702}
    }
}