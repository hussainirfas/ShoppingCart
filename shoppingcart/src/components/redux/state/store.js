import { createStore, compose } from "redux";
import rootReducer from '../reducers'

const enhancers = compose(
    window.__REDUX_DEVTOOLS_EXTENSIONS__ && window.__REDUX_DEVTOOLS_EXTENSIONS__()
)

export const store = createStore(
    rootReducer,
    enhancers
)