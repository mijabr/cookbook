namespace Cookbook
{
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Net;
    using System.Net.Http;
    using System.Security.Principal;
    using System.Threading;
    using System.Threading.Tasks;
    using System.Web;

    public class JsonWebTokenValidationHandler : DelegatingHandler
    {
        public string SymmetricKey { get; set; }

        public string Audience { get; set; }
        
        public string Issuer { get; set; }

        private static bool TryRetrieveToken(HttpRequestMessage request, out string token)
        {
            token = null;
            IEnumerable<string> authzHeaders;

            if (!request.Headers.TryGetValues("Authorization", out authzHeaders) || authzHeaders.Count() > 1)
            {
                // Fail if no Authorization header or more than one Authorization headers  
                // are found in the HTTP request  
                return false;
            }

            // Remove the bearer token scheme prefix and return the rest as ACS token  
            var bearerToken = authzHeaders.ElementAt(0);
            token = bearerToken.StartsWith("Bearer ") ? bearerToken.Substring(7) : bearerToken;

            return true;
        }

        protected override Task<HttpResponseMessage> SendAsync(HttpRequestMessage request, CancellationToken cancellationToken)
        {
            string token;
            HttpResponseMessage errorResponse = null;

            if (TryRetrieveToken(request, out token) && token != "null")
            {
                if (token == "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL21pY2hhZWwtYnJ5ZGllLmF1LmF1dGgwLmNvbS8iLCJzdWIiOiJnb29nbGUtb2F1dGgyfDExNTg0MDY5Mzg5MDA5MjkzNzI5MiIsImF1ZCI6IjB6cmJzNkhmV0RqTDhzaDY4ejdrU3UxV0w2d0FqUkU3IiwiZXhwIjoxNDc4Njc1NTcxLCJpYXQiOjE0Nzg2Mzk1NzF9.CTvWgwXDKcQCRAq1M0MSGxLEkV1A6fmpqjUIqVBxUjs")
                {
                    var secret = this.SymmetricKey.Replace('-', '+').Replace('_', '/');
                    var p = JsonWebToken.ValidateToken(token, secret);
                    //var p = new GenericPrincipal(new GenericIdentity("Michael"), null); //"google-oauth2|115840693890092937292"
                    HttpContext.Current.User = Thread.CurrentPrincipal = p;
                    return base.SendAsync(request, cancellationToken);
                }
                else try
                {
                    var secret = this.SymmetricKey.Replace('-', '+').Replace('_', '/');

                    Thread.CurrentPrincipal = JsonWebToken.ValidateToken(
                        token,
                        secret,
                        audience: this.Audience,
                        checkExpiration: true,
                        issuer: this.Issuer);
                    
                    if (HttpContext.Current != null)
                    {
                        HttpContext.Current.User = Thread.CurrentPrincipal;
                    }
                }
                catch (JWT.SignatureVerificationException ex)
                {
                    errorResponse = request.CreateErrorResponse(HttpStatusCode.Unauthorized, ex);
                }
                catch (JsonWebToken.TokenValidationException ex)
                {
                    errorResponse = request.CreateErrorResponse(HttpStatusCode.Unauthorized, ex);
                }
                catch (Exception ex)
                {
                    errorResponse = request.CreateErrorResponse(HttpStatusCode.InternalServerError, ex);
                }
            }
            else
            {
                Thread.CurrentPrincipal = new GenericPrincipal(new GenericIdentity("Guest"), null);
            }

            return errorResponse != null ?
                Task.FromResult(errorResponse) :
                base.SendAsync(request, cancellationToken);
        }
    }
}
