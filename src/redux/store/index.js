import { createStore, combineReducers, applyMiddleware } from "redux";
import { signUpReducer } from '../reducers/signup.reducer';
import { signInReducer } from '../reducers/signin.reducer';
import { authReducer} from '../reducers/auth.reducer';
import thunk from 'redux-thunk'

const rootReducer = combineReducers({
   signUp: signUpReducer,
   signIn: signInReducer,
   auth: authReducer
})
const store = createStore(rootReducer, applyMiddleware(thunk))
export default store