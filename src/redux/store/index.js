import { createStore, combineReducers, applyMiddleware } from "redux";
import { signUpReducer } from "../reducers/signup.reducer";
import { signInReducer } from "../reducers/signin.reducer";
import { authReducer } from "../reducers/auth.reducer";
import { forgotPasswordReducer } from "../reducers/forgetPassword.reducer";
import { resetPasswordReducer } from "../reducers/resetPassword.reducer";
import thunk from "redux-thunk";
import { logoutReducer } from "../reducers/logout.reducer";
import { themeReducer } from "../reducers/theme.reducer";
import { signInAdminReducer } from "../reducers/signInAdmin.reducer";
import { authAdminReducer } from "../reducers/authAdmin.reducer";
import { favoriteCryptoReducer } from "../reducers/favoriteCrypto.reducer";

const rootReducer = combineReducers({
  signUp: signUpReducer,
  signIn: signInReducer,
  signInAdmin: signInAdminReducer,
  auth: authReducer,
  authAdmin: authAdminReducer,
  forgotPassword: forgotPasswordReducer,
  resetPassword: resetPasswordReducer,
  logout: logoutReducer,
  theme: themeReducer,
  favorites: favoriteCryptoReducer,
});
const store = createStore(rootReducer, applyMiddleware(thunk));

store.subscribe(() => {
  const { theme } = store.getState().theme;
  if (!theme) return;
  localStorage.setItem("theme", JSON.stringify(theme));
});

export default store;
