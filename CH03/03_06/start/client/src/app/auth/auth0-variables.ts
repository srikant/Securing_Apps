interface AuthConfig {
  clientID: string;
  domain: string;
  callbackURL: string;
}

export const AUTH_CONFIG: AuthConfig = {
  clientID: 'Use_your_own_clientID_here',
  domain: 'UseYourOwnDomainHere.auth0.com', 
  callbackURL: 'http://localhost:4200/callback'
}; // be sure to use your own clientID and domain here.
