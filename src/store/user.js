import { msalInstance, signInAndGetUser } from '@/lib/microsoftGraph'
import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  state: () => ({
    user: null,
    isAuthenticated: false,
    isLoading: false,
    error: null
  }),

  actions: {
    async signIn() {
      this.isLoading = true
      this.error = null

      try {
        const account = await signInAndGetUser()
        this.user = {
          id: account.homeAccountId,
          name: account.name,
          username: account.username,
        }
        this.isAuthenticated = true
        return account
      } catch (error) {
        this.error = error.message || 'Failed to sign in'
        throw error
      } finally {
        this.isLoading = false
      }
    },

    signOut() {
      msalInstance.logout();
      this.user = null
      this.isAuthenticated = false
    },

    checkAuthState() {
      const currentAccount = msalInstance.getActiveAccount()

      if (currentAccount) {
        this.user = {
          id: currentAccount.homeAccountId,
          name: currentAccount.name,
          username: currentAccount.username,
        }
        this.isAuthenticated = true
      }
    }
  },

  getters: {
    getUserInfo: (state) => state.user,
    getAuthStatus: (state) => state.isAuthenticated,
    getLoadingStatus: (state) => state.isLoading,
    getError: (state) => state.error
  }
})