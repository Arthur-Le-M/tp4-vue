
import * as msal from '@azure/msal-browser'

const requestedScopes = { scopes: ['User.Read'] }

export const msalInstance = new msal.PublicClientApplication({
  auth: {
    clientId: process.env.VUE_APP_OAUTH_CLIENT_ID
  },
  cache: {
    cacheLocation: 'sessionStorage'
  }
})

export async function signInAndGetUser() {
  await msalInstance.initialize()

  const authResult = await msalInstance.loginPopup(requestedScopes)
  
  msalInstance.setActiveAccount(authResult.account)
  return authResult.account
}