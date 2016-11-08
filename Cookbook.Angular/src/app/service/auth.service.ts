import { Injectable } from '@angular/core';
import { AuthHttp, JwtHelper } from 'angular2-jwt';
import { AppService } from './app.service';
import { Subject, Observable } from 'rxjs/Rx';

declare var Auth0Lock: any;

@Injectable()
export class AuthService {

  jwtHelper: JwtHelper = new JwtHelper();
  lock = new Auth0Lock('0zrbs6HfWDjL8sh68z7kSu1WL6wAjRE7', 'michael-brydie.au.auth0.com', {
    auth: {
      redirectUrl: 'http://www.mijabr.com',
      responseType: 'code',
      params: {
        scope: 'openid email' // Learn about scopes: https://auth0.com/docs/scopes
      }
    }
  });
  authSubject = new Subject<string>();
  authEvents = this.authSubject.asObservable();
  backdoorToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL21pY2hhZWwtYnJ5ZGllLmF1LmF1dGgwLmNvbS8iLCJzdWIiOiJnb29nbGUtb2F1dGgyfDExNTg0MDY5Mzg5MDA5MjkzNzI5MiIsImF1ZCI6IjB6cmJzNkhmV0RqTDhzaDY4ejdrU3UxV0w2d0FqUkU3IiwiZXhwIjoxNDc4Njc1NTcxLCJpYXQiOjE0Nzg2Mzk1NzF9.CTvWgwXDKcQCRAq1M0MSGxLEkV1A6fmpqjUIqVBxUjs'; // google-oauth2|115840693890092937292

  // Google client ID
  // 986625760223-6vmdd97qfv2o27kf6n1in6ecnnsvh7a3.apps.googleusercontent.com
  // Profile
  // {"email":"michael.brydie@gmail.com","email_verified":true,"name":"Michael Brydie","given_name":"Michael","family_name":"Brydie","picture":"https://lh3.googleusercontent.com/-XdUIqdMkCWA/AAAAAAAAAAI/AAAAAAAAAAA/4252rscbv5M/photo.jpg","gender":"male","locale":"en","clientID":"0zrbs6HfWDjL8sh68z7kSu1WL6wAjRE7","updated_at":"2016-06-18T01:52:45.306Z","user_id":"google-oauth2|115840693890092937292","nickname":"michael.brydie","identities":[{"provider":"google-oauth2","access_token":"ya29.Ci8FAwyNYDVERIRm6Z9tm3m-cvilB2F9K-HLFE3nrEnvdDC3EUyqjKkRuMdbrZkYWg","expires_in":3600,"user_id":"115840693890092937292","connection":"google-oauth2","isSocial":true}],"created_at":"2016-06-18T01:18:51.014Z","global_client_id":"yNgSEs0agjHuyTnICMNxIjeWFbXEgL99"}

  constructor(private appService: AppService)
  {
  }

  login()
  {
    if (process.env.ENV === 'production' && this.backdoorToken == '')
    {
      this.lock.show({}, (err: any, profile: any, token: any) => {
        if (err) {
          alert(err);
          return;
        }
        // If authentication is successful, save the items
        this.appService.setItem('profile', JSON.stringify(profile));
        this.appService.setItem('id_token', token);
        this.authSubject.next("login");
      });
    }
    else
    {
      var token = this.backdoorToken;
      var profile = JSON.parse('{"email":"michael.brydie@gmail.com","email_verified":true,"name":"Michael Brydie","given_name":"Michael","family_name":"Brydie","picture":"https://lh3.googleusercontent.com/-XdUIqdMkCWA/AAAAAAAAAAI/AAAAAAAAAAA/4252rscbv5M/photo.jpg","gender":"male","locale":"en","clientID":"0zrbs6HfWDjL8sh68z7kSu1WL6wAjRE7","updated_at":"2016-06-18T01:52:45.306Z","user_id":"google-oauth2|115840693890092937292","nickname":"michael.brydie","identities":[{"provider":"google-oauth2","access_token":"ya29.Ci8FAwyNYDVERIRm6Z9tm3m-cvilB2F9K-HLFE3nrEnvdDC3EUyqjKkRuMdbrZkYWg","expires_in":3600,"user_id":"115840693890092937292","connection":"google-oauth2","isSocial":true}],"created_at":"2016-06-18T01:18:51.014Z","global_client_id":"yNgSEs0agjHuyTnICMNxIjeWFbXEgL99"}');
      this.appService.setItem('profile', JSON.stringify(profile));
      this.appService.setItem('id_token', token);
      this.authSubject.next("login");
    }
  }


  logout()
  {
    this.appService.removeItem('profile');
    this.appService.removeItem('id_token');
    this.authSubject.next("logout");
  }

  isLoggedIn()
  {
    var token = this.appService.getItem('id_token');
    if (token == null)
    {
      return false;
    }
    return !this.jwtHelper.isTokenExpired(token);
  }

  getProfile() : any
  {
    return this.appService.getItem('profile');
  }

  getToken() : any
  {
    return this.appService.getItem('id_token');
  }
}