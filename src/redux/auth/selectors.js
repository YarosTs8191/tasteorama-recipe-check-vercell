export const selectAuthUser = (state) => state.auth.user;
export const selectToken = (state) => state.auth.token;
export const selectAuthLoading = (state) => state.auth.loading;
export const selectAuthError = (state) => state.auth.error;
export const selectIsLoggedIn = (state) => state.auth.IsLoggedIn;
export const selectIsRefreshing = state => state.auth.isRefreshing;
